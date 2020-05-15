import { Client } from 'pg';
require('dotenv').config();

const client = new Client({
    user: process.env.SQL_SERVER_USER,
    host: process.env.SQL_SERVER_HOST,
    database: process.env.SQL_SERVER_DB,
    password: process.env.SQL_SERVER_PASS,
    port: process.env.SQL_SERVER_PORT,
} as any)
client.connect()

export default client;
