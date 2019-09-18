//Import required Routers in the given directory
const express = require('express');
const additionRoutes = require( __dirname +'/routes/addition.js');
const multiplicationRoutes = require( __dirname +'/routes/multiplication.js');
const divisionRoutes = require( __dirname +'/routes/division.js');
const subtractionRoutes = require( __dirname +'/routes/subtraction.js');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser());
//middleware for both routers
app.use(function(req,res,next){
  console.log(new Date(), req.url);
  const urlArr = ['/calculator/add','/calculator/multiply','/calculator/division','/calculator/subtraction'];    
  if(urlArr.includes(req.url)){
    res.send('Enter query with expression ?firstParam= yourNumberHere & secondParam= yourNumberHere');
    return;
  }
  else
    next();
})
//router for /numbers/multiply/[0-9]+/[0-9]+
app.use('/calculator/add', additionRoutes);
app.use('/calculator/multiply', multiplicationRoutes);
app.use('/calculator/division', divisionRoutes);
app.use('/calculator/subtraction', subtractionRoutes);
//Server listening function   
app.listen(3000, function() {
    console.log("Server listening at port: ",3000);
  });
