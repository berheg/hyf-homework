const express = require ('express');
const router = express.Router ();
const bodyParser = require('body-parser');
const validator = require('validator');
//numChecker validates weather or not the given strings are numbers
const numCheCker = require('./numChecker.js');

router.use(bodyParser());
//router for /numbers/multiply/[0-9]+/[0-9]+
router.get('/', function(req, res) { 
    const {firstNum, secondNum} = req.query;
        
  
  //if one or both of the inputs are not defined
  if(firstNum== undefined||secondNum==undefined){
    res.send('Enter the numbers properly please!');
  }
  //if both inputs are given properly
  else{
    let sumFirstNum = 0; 
    let sumSecondNum = 0;
    if(typeof(firstNum)!=="object"){
        sumFirstNum = Number(firstNum);
    }else{
        for(let j=0; j<firstNum.length;j++){
            if(numCheCker(firstNum[j])===true){ 
                sumFirstNum += Number(firstNum[j]);            
            }else
                res.send(numCheCker(firstNum[j]));
        } 
    }
    console.log(typeof(secondNum));
    if(typeof(secondNum)!== "object"){
        sumSecondNum = Number(secondNum);
    }else{
        for(let i=0; i < secondNum.length;i++){
            if(numCheCker(secondNum[i])===true){             
                sumSecondNum += Number(secondNum[i]);
            }else
                res.send(numCheCker(secondNum[i]));
        } 
    }
    const sum = sumFirstNum+sumSecondNum;     
      res.send(`The sum of ${firstNum} and ${secondNum} is  ${sum}`); 
    
    }
    
});

//Router will go here
module.exports=router;