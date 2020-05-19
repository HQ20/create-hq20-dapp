import { ethers } from 'ethers';
import express from 'express';
import util from 'util';
import bodyParser from 'body-parser';

import Network from './contracts/network.json';
import SimpleStorageABI from './contracts/SimpleStorageABI.json';
import { SimpleStorageInstance } from './contracts/types/truffle-contracts/index';
import sql from './db';


// start express app
const app = express();
const port = 3001;

sql.query = util.promisify(sql.query) as any;
// support /post
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// allow CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

async function addEventToCache(newValue: number, tx: string, sender: string) {
    try {
        return await sql.query(
            "INSERT INTO setvalue(newvalue, tx, sender) VALUES($1, $2, $3)",
            [newValue, tx, sender],
        );
    } catch (e) {
        console.log("error: ", e);
        return null;
    }
}

async function getEventFromCache(sender: string) {
    try {
        return await sql.query(
            {
                text: "SELECT * FROM setvalue WHERE sender = $1",
                values: [sender],
            },
        );
    } catch (e) {
        console.log("error: ", e);
        return null;
    }
};

app.post('/cache/reset/', async (req, res) => {
    // TODO: !
    res.sendStatus(200);
});

app.get('/cache/:author', (req, res) => {
    //
    getEventFromCache(req.params.author).then((result) => res.send(result!.rows))
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
        Network.development.SimpleStorage,
        SimpleStorageABI,
        customHttpProvider,
    ) as ethers.Contract & SimpleStorageInstance;

    contract.on("SetValue", async (newValue, event) => {
        // Called when anyone changes the value
        addEventToCache(
            newValue.toNumber(),
            (await event.getTransaction()).hash,
            (await event.getTransaction()).from,
        );
    });

    console.log(`Example app listening on port ${port}!`);
});
