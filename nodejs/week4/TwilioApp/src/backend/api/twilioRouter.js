const express = require('express');
const app = express;
const router = express.Router();
const bodyParser = require('body-parser');

// c. receive sms
const MessagingResponse = require('twilio').twiml.MessagingResponse;

// to receive sms
router.post("/", (req, res) => {
    // look in re.body to see incoming message

    // response that you want to send back in response immediately
   const twiml = new MessagingResponse(); 
   twiml.message('The Robots are coming! Head for the hills!');
   res.wrteHead(200, {'Content-Type': 'text/xml'});
   res.send(twiml.toString());
});

module.exports = router;