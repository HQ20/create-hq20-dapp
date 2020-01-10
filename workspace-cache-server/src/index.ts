import { ethers } from 'ethers';
import express from 'express';
import redis from 'redis';
import util from 'util';
import bodyParser from 'body-parser';

import SimpleStorageContractJSON from 'workspace-blockchain/build/contracts/SimpleStorage.json';
import { SimpleStorageInstance } from 'workspace-blockchain/types/truffle-contracts/index';


// start express app
const app = express();
const port = 3001;

// start redis
const redisClient = redis.createClient();
// promisify
redisClient.get = util.promisify(redisClient.get) as any;
redisClient.send_command = util.promisify(redisClient.send_command) as any;

// support /post
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// allow CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.post('/cache/reset/', async (req, res) => {
    //
    res.sendStatus(200);
});

app.get('/cache/', (req, res) => {
    //
    res.sendStatus(200);
});

app.listen(port, async () => {
    // Connect to the network
    const url = 'http://localhost:8545';
    const customHttpProvider = new ethers.providers.JsonRpcProvider(url);

    // We connect to the Contract using a Provider, so we will only
    // have read-only access to the Contract
    const network = await customHttpProvider.getNetwork();
    let contract = new ethers.Contract(
        // TODO: improve next line
        (SimpleStorageContractJSON.networks as any)[network.chainId].address,
        SimpleStorageContractJSON.abi,
        customHttpProvider,
    ) as ethers.Contract & SimpleStorageInstance;

    contract.on("SetValue", (newValue, event) => {
        // Called when anyone changes the value
        console.log(newValue);

        // See Event Emitter below for all properties on Event
        console.log(event.blockNumber);
    });

    console.log(`Example app listening on port ${port}!`);
});
