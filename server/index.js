console.log("JAI SHREE RAM / JAI HANUMAN JI ");
const express = require("express");
const app = express();
const port = 9082;
const cors = require("cors");

app.use(express.json());
app.use(cors());

let botRunning = false;
const axios = require("axios");
const crypto = require("crypto");
const API_KEY = "216923741401081b27ee25a1cae0226a6a4ac796";
const API_SECRET =
  "be2a73cdfe14602d67fbc30941412456e6ea31bc4bba2d284c5370227049948d";
const API_MEMO = "cryptotredingbot";
const BASE_URL = "https://api-cloud.bitmart.com";
// Get current timestamp
function get_timestamp() {
  return new Date().getTime().toString();
}
// Generate signature
function generate_signature(timestamp, body) {
  const message = `${timestamp}#${API_MEMO}#${body}`;
  return crypto.createHmac("sha256", API_SECRET).update(message).digest("hex");
}

async function place_order(side, symbol, size, price) {
  console.log(side, symbol, size, price);
  // return true;
  // await place_order("buy", "DEOD_USDT", size, getDeodPrice)
  const path = "/spot/v2/submit_order";
  const timestamp = get_timestamp();
  const body = {
    size: size,
    price: price,
    side: side,
    symbol: symbol,
    type: "limit",
  };
  const headers = {
    "Content-Type": "application/json",
    "X-BM-KEY": API_KEY,
    "X-BM-TIMESTAMP": timestamp,
    "X-BM-SIGN": generate_signature(timestamp, JSON.stringify(body)),
  };
  const url = BASE_URL + path;
  try {
    const response = await axios.post(url, body, { headers });
    console.log(response.data);
  } catch (error) {
    console.error(`Error:`);
    console.error(error.response.data);
  }
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getOverallprice = async () => {
  try {
    const bestBidPrice = await axios.get(
      "https://api-cloud.bitmart.com/spot/v1/ticker_detail?symbol=DEOD_USDT"
    );
    console.log(bestBidPrice.data.data, "data get in api");
    const num1 = bestBidPrice.data.data.best_ask;
    const num2 = bestBidPrice.data.data.best_bid;
    const num3 = parseFloat(num2);
    const num4 = (num3 + 0.000001).toFixed(6);
    console.log(num1, "num1");
    console.log(num2, "num2");
    console.log(num3, "num3");
    console.log(num4, "num4");
    return num4;
  } catch (error) {
    console.error("Error fetching best bid price:", error);
    // You might want to return something here to indicate the error, e.g., throw error;
  }
};

const startBot = async () => {
  botRunning = true;
  let count = 0;
  while (botRunning) {
    let dollar;
    let sizeforSell;
    let sellDeodPrice;

    const randomUsdtPrice = randomNumber(6, 7);
    dollar = randomUsdtPrice;

    const getDeodPrice = await getOverallprice();
    console.log(getDeodPrice, "getDeodPrice");
    sellDeodPrice = getDeodPrice;

    const size = Math.floor(6 / getDeodPrice);
    console.log(size, "size");
    sizeforSell = size;

    console.log(randomUsdtPrice, dollar, "dollar randomUsdtPrice");
    console.log(getDeodPrice, sellDeodPrice, "  sellDeodPrice getDeodPrice");
    console.log(size, sizeforSell, "size sizeforSell");
    await place_order("buy", "DEOD_USDT", size, getDeodPrice);
    await place_order("sell", "DEOD_USDT", sizeforSell, sellDeodPrice);
    console.log(count, "Bot is running...");
    count++;
    await new Promise((resolve) => setTimeout(resolve, 50000)); //
  }
};

// Route to start the bot
app.get("/startBot", (req, res) => {
  if (!botRunning) {
    startBot();
    res
      .status(200)
      .json({ message: "Bot started successfully.", status: true });
  } else {
    res.status(400).json({ message: "Bot is already running." });
  }
});

// Route to stop the bot
app.get("/stopBot", (req, res) => {
  if (botRunning) {
    botRunning = false;
    return res
      .status(200)
      .json({ message: "Bot stopped successfully.", status: true });
  } else {
    return res.status(400).json({ message: "Bot is not running." });
  }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
