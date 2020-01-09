import * as express from 'express';
import * as redis from 'redis';
import * as util from 'util';
import * as bodyParser from 'body-parser';


// start express app
const app = express();
const port = 3001;
// start redis
const redisClient = redis.createClient();
// promisify
redisClient.get = util.promisify(redisClient.get);
redisClient.send_command = util.promisify(redisClient.send_command);
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
    res.sendStatus(200);
});

app.get('/cache/graph/', (req, res) => {
    //
    res.send('success');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
