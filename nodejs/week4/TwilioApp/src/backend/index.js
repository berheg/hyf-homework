
require("dotenv").config();
const port = process.env.PORT||5000;
const subdomainKey = process.env.SUBDOMAIN_KEY;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
// setup twilio client
const client = require('twilio')(accountSid, authToken);

const express = require('express');
const localtunnel = require('localtunnel');
const renderFile = require('./api/renderFile')
const app = express();
// Public folder setup
app.use(express.static('public'));
app.use('/', renderFile);

const twilioRouter = require('./api/twilioRouter');
const tunnelCheckerRouter = require('./api/tunnelChecker');
const kitchenRouter = require('./api/kitchen');
  
const tunnel = localtunnel(port, { subdomain: subdomainKey }, (err, tunnel) => {
  if (!err)
    console.log('Tunnel is open');
  else
    console.log('Error opening tunnel: ', err);
});
  
  tunnel.on('close', function() {
    // When the tunnel is closed
    console.log('Tunnel is closed');
  });
  // to send message
  client.messages.create({
    to: process.env.MY_pHONE,
    from: process.env.TRIAL_NUMBER,
    body: 'This is my first text message'
  })
  .then((message) => console.log(message.sid));
  app.use("/check", tunnelCheckerRouter);
  app.use("/incoming-sms", twilioRouter);
  app.use("/kitchen/order", kitchenRouter);
  app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
  })