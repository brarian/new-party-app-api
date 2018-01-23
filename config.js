'use strict';
require('dotenv').config()

const DATABASE_URL = process.env.NODE_ENV==="test"? process.env.DATABASE_URL_TEST : process.env.DATABASE_URL;
const DATABASE_URL_TEST = process.env.DATABASE_URL_TEST;
const PORT = process.env.PORT || 8080;
const JWT_EXPIRY = '1d';
const SALTFACTOR = 10;
module.exports = {
    DATABASE_URL, PORT, JWT_EXPIRY, SALTFACTOR
}