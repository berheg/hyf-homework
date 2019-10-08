const express = require ('express');
const router = express.Router ();
const bodyParser = require('body-parser');
//numChecker validates weather or not the given strings are numbers
const numCheCker = require('./numChecker.js');

router.use(bodyParser());
//router for /numbers/multiply/[0-9]+/[0-9]+
router.get('/', function(req, res) { 
    const firstNum = req.query.firstParam;
    const secondNum =req.query.secondParam;
        
  
  //if one or both of the inputs are not defined
  if(firstNum== undefined||secondNum==undefined){
    res.send('Enter at least firstParam and secondParam in the query properly please!');
  }
  
  //if both inputs are given properly
  else{
    let productFirstNum = 1; 
    let productSecondNum = 1;
    if(typeof(firstNum)!=="object"){
        productFirstNum = parseInt(firstNum);
    }else{
        for(let j=0; j<firstNum.length;j++){
            if(numCheCker(firstNum[j])===true){ 
                productFirstNum *= parseInt(firstNum[j]);            
            }else
                res.send(numCheCker(firstNum[j]));
        } 
    }
    if(typeof(secondNum)!=="object"){
        productFirstNum = parseInt(firstNum);
    }else{
        for(let i=0; i < secondNum.length;i++){
            if(numCheCker(secondNum[i])===true){             
                productSecondNum *= parseInt(secondNum[i]);
            }else
                res.send(numCheCker(secondNum[i]));
        }
    } 
    const division = productFirstNum/productSecondNum;     
      res.send(`The division of ${firstNum} and ${secondNum} is  ${division}`); 
    
    }
    
});

//Router will go here
module.exports=router;