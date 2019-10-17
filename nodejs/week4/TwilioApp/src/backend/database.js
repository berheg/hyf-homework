/*const JsonDB = require('node-json-db');
const Config = require('node-json-db/dist/lib/JsonDBConfig');
const db = new JsonDB(new Config("myDataBase", true, false, '/'));*/
require("dotenv").config();
const port = process.env.PORT||5000;
const {subdomainKey, accountSid, authToken} = process.env;//.SUBDOMAIN_KEY;
/*const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;*/

module.exports = port, subdomainKey, accountSid,authToken;
