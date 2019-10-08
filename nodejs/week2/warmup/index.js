//Import express, body-parser and validator
const express = require('express');
const bodyParser = require('body-parser');
const validator = require('validator');
const app = express();
app.use(bodyParser());
//middleware for both routers
app.use(function(req,res,next){
  console.log(new Date(), req.url);
  if(req.url == '/numbers/add'){
    res.send('Enter query with expression ?first= yourNumberHere & second= yourNumberHere');
    return;
  }else if(req.url== '/numbers/multiply'){
    res.send('Enter the two numbers Please!');
    return;
  }  
  else
    next();
})
//router for /numbers/add 
app.get('/numbers/add', function(req, res) {  
  const first = req.query.first;
  const second = req.query.second;
  console.log(second);
  //if one or both of the inputs are not defined
  if(first== undefined||second==undefined){
    res.send('Enter the numbers properly please!');
  }
  //if both inputs are given properly
  else{
    if(numCheCker(first,second)===true){ 
      const firstNum = parseInt(first);
      const secondNum = parseInt(second);
      const sum = firstNum + secondNum;
      res.send(`The sum of ${firstNum} and ${secondNum} is ${sum}`);
    }else
      res.send(numCheCker(first,second));
  } 
    
});
//router for /numbers/multiply/[0-9]+/[0-9]+
  app.get('/numbers/multiply/:numFirst/:numSecond', function(req, res) {
    
    const first = req.params.numFirst;
    const second = req.params.numSecond;
    if(numCheCker(first,second)=== true){
      const firstNum = parseInt(first);
      const secondNum = parseInt(second);
      const product = firstNum * secondNum;
      res.send(`The product of ${firstNum} and ${secondNum} is  ${product}`); 
    }else
    res.send(numCheCker(first,second));      
  });
//Server listening function   
app.listen(3000, function() {
    console.log("Server listening at port: ",3000);
  });
//numChecker validates weather or not the given strings are numbers
function numCheCker(first,second){
  if(validator.isNumeric(first)&&validator.isNumeric(second)){   
      
      return true;      
    
  }
  else if(!validator.isNumeric(first)&& !validator.isNumeric(second)){
    return (`The inputs ${first} and ${second} are not numbers!`);
  }
  else if(!validator.isNumeric(first)){
    return (`The inputs ${first} is not number!`);
  }
  else{      
    return (`The inputs ${second} is not numbers!`);
  }
};