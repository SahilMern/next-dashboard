const express = require('express');
const axios = require('axios');

const app = express();
const port = 3002;

const URL = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3';
const query = `
    {
        swap(id: "0x000007e1111cbd97f74cfc6eea2879a5b02020f26960ac06f4af0f9395372b64#66785") {
            sender
            recipient
            amount0
            amount1
            transaction {
                id
                blockNumber
                gasUsed
                gasPrice
            }
            timestamp
            token0 {
                id
                symbol
            }
            token1 {
                id
                symbol
            }
        }
    }`;

app.get('/swapDetails', async (req, res) => {
    try {
        const { data } = await axios.post(URL, { query: query });
        // console.log(data.data, "data");
        return res.status(200).send({
            status: true,
            data
        });
    } catch (error) {
        console.error(error);
        return res.status(500).send({
            status: false,
            error: error.message
        });
    }
});

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
