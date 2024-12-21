const express = require("express");
const app = express();
const port = 9082;
const cors = require("cors");

app.use(express.json());
app.use(cors());

let botRunning = false; // Flag to track whether the bot is running or not

// Function to start the bot
const startBot = async () => {
    botRunning = true;
    let count = 0; // Initialize count outside the loop
    while (botRunning) {
        console.log(count, "Bot is running...");
        // Your bot's logic here
        await new Promise(resolve => setTimeout(resolve, 5000)); // Simulated delay of 5 seconds
        count++;
    }
}

// Route to start the bot
app.get("/startBot", (req, res) => {
    if (!botRunning) {
        startBot();
        res.status(200).json({ message: "Bot started successfully." });
    } else {
        res.status(400).json({ message: "Bot is already running." });
    }
});

// Route to stop the bot
app.get("/stopBot", (req, res) => {
    if (botRunning) {
        botRunning = false;
        return res.status(200).json({ message: "Bot stopped successfully.", status: true });
    } else {
        return res.status(400).json({ message: "Bot is not running." });
    }
});

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
