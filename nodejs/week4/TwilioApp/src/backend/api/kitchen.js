const http = require('http');
const express = require('express');
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

const bodyParserUrlencoded = bodyParser.urlencoded({ extended: true });
//returns order with the given id 
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const orderIndex = id-1;   
  const searchedOrder =  orderData.order[orderIndex];
  res.json(searchedOrder);   
  
});
//update status of order with given id 
router.put("/:id",(req, res) => {
  const  newStatus= req.body.status;
  console.log(newStatus);
  const id = req.params.id;
  const orderIndex = id-1;  
  orderData.order[orderIndex].status.push(newStatus);  
  orderData.order[orderIndex].modified.push(new Date());
  const orderNewJson = JSON.stringify(orderData);
  fs.writeFileSync(
      __dirname + '/../data/order.json',
      orderNewJson, (err)=>{
        if(err) throw err;
      }
    );  
  res.send(`The status of order with id of ${id} is updated to ${newStatus}!`);    
  });
  module.exports = router;