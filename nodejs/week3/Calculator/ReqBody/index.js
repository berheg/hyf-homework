//Import required Routers in the given directory
const express = require('express');
const calculatorRoutes = require( __dirname +'/routes/calculator.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());
//middleware for both routers
app.use(function(req,res,next){
  console.log(new Date(), req.url);     
  if((req.url)===('/calculator')){
    res.send('Enter query with expression ?firstParam= yourNumberHere & secondParam= yourNumberHere');
    return;
  }
  else
    next();
})
//router for /numbers/multiply/[0-9]+/[0-9]+
app.use('/calculator', calculatorRoutes);

//Server listening function   
app.listen(3000, function() {
    console.log("Server listening at port: ",3000);
  });
