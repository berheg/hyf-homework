
require("dotenv").config();
const port = process.env.PORT||5000;
const subdomainKey = process.env.SUBDOMAIN_KEY;
const bodyParser = require('body-parser');
const express = require('express');
const localtunnel = require('localtunnel');
const renderFile = require('./api/renderFile')
const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Public folder setup
app.use(express.static('public'));
app.use('/', renderFile);

const twilioRouter = require('./api/twilioRouter');
const tunnelCheckerRouter = require('./api/tunnelChecker');
const kitchenRouter = require('./api/kitchen');
  
/*const tunnel = localtunnel(port, { subdomain: subdomainKey }, (err, tunnel) => {
  if (!err)
    console.log('Tunnel is open');
  else
    console.log('Error opening tunnel: ', err);
});
  
  tunnel.on('close', function() {
    // When the tunnel is closed
    console.log('Tunnel is closed');
  });*/  
  app.use("/check", tunnelCheckerRouter);
  app.use("/incoming-sms", twilioRouter);
  app.use("/kitchen/order", kitchenRouter);
  app.listen(port, () =>{
    console.log(`Server listening on port ${port}`);
  })