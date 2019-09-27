const http = require('http');
const express = require('express');
const Order = require('../Order');
const app = express;
const router = express.Router();
const bodyParser = require('body-parser');
//const database = require('../database');
const fs = require ('fs');
const orderJson = fs.readFileSync (
    __dirname + '/../data/order.json',
    'utf8'
  );
const orderData = JSON.parse(orderJson);

router.use(bodyParser());
// Parse URL-encoded bodies (as sent by HTML forms)
const bodyParserUrlencoded = bodyParser.urlencoded({ extended: true });
// c. receive sms
const MessagingResponse = require('twilio').twiml.MessagingResponse;
router.get("/", (req, res) => {
    const incomingMessage = req.body.msg;   
    let msgToSend; 
    if(incomingMessage === 'help'){
        msgToSend = 'Send  menu: to get lists of avialiable meals types' + 
                        'order(type): to orded what you want ' + 
                        'status(id): to check status of your order';
    }
    else if(incomingMessage === 'menu'){
        msgToSend = '1:pizza 2:burger 3:salad';
    }
    else if(incomingMessage === "status"){
        msgToSend = orderData.order[id];
    } else{
        throw (`${incomingMessage} is not in the meal lists` );
        return;
    }
    res.send(msgToSend);   
})

// to receive sms
router.post("/", (req, res) => {
    // look in re.body to see incoming message
    const incomingMessage = req.body.order;
    const typeValue = ["pizza", "burger", "salad"];
    let msgToSend;
    let idNew;
    const bool = typeValue.includes(incomingMessage);
    if(bool){ 
        //console.log(typeValue.includes(incomingMessage));       
        const index = orderData.index;
        //console.log(orderData);
        const id = index +1;
        const newOrder = new Order(incomingMessage,id);
        msgToSend = `Order nr. ${id}`;         
        orderData.index = index + 1;
        idNew = id;
         orderData.order.push(newOrder); 
         //console.log(newOrder);  
         const orderNewJson = JSON.stringify(orderData);
         fs.writeFileSync(
             __dirname + '/../data/order.json',
             orderNewJson, (err)=>{
                 if(err) throw err;
             }
        );
    }else{
        throw (`${incomingMessage} is not in the meal lists` );
            return;
    }
    
    // response that you want to send back in response immediately
   /*const twiml = new MessagingResponse(); 
   twiml.message(msgToSend);
   res.wrteHead(200, {'Content-Type': 'text/xml'});
   res.send(twiml.toString());*/
   res.send(`${msgToSend} is added to order lists with id = ${idNew}!`);
});

module.exports = router;