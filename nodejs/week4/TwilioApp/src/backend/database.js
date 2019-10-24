/*const JsonDB = require('node-json-db');
const Config = require('node-json-db/dist/lib/JsonDBConfig');
const db = new JsonDB(new Config("myDataBase", true, false, '/'));*/
require("dotenv").config();
const port = process.env.PORT||5000;
const {subdomainKey, accountSid, authToken} = process.env;

module.exports = port, subdomainKey, accountSid,authToken;
