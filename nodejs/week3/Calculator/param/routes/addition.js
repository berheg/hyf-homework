const express = require ('express');
const router = express.Router ();
const bodyParser = require('body-parser');
const validator = require('validator');

router.use(bodyParser());
//router for /numbers/multiply/[0-9]+/[0-9]+
router.get('/', function(req, res) { 
    const firstNum = req.query.firstParam;
    const secondNum =req.query.secondParam;
        
  
  //if one or both of the inputs are not defined
  if(firstNum== undefined||secondNum==undefined){
    res.send('Enter the numbers properly please!');
  }
  //if both inputs are given properly
  else{
    let sumFirstNum = 0; 
    let sumSecondNum = 0;
    if(typeof(firstNum)!=="object"){
        sumFirstNum = parseInt(firstNum);
    }else{
        for(let j=0; j<firstNum.length;j++){
            if(numCheCker(firstNum[j])===true){ 
                sumFirstNum += parseInt(firstNum[j]);            
            }else
                res.send(numCheCker(firstNum[j]));
        } 
    }
    console.log(typeof(secondNum));
    if(typeof(secondNum)!== "object"){
        sumSecondNum = parseInt(secondNum);
    }else{
        for(let i=0; i < secondNum.length;i++){
            if(numCheCker(secondNum[i])===true){             
                sumSecondNum += parseInt(secondNum[i]);
            }else
                res.send(numCheCker(secondNum[i]));
        } 
    }
    const sum = sumFirstNum+sumSecondNum;     
      res.send(`The sum of ${firstNum} and ${secondNum} is  ${sum}`); 
    
    }
    
});
//numChecker validates weather or not the given strings are numbers
function numCheCker(first){
    if(validator.isNumeric(first)){   
        
        return true;      
      
    }  
    else{      
      return (`The input ${first} is not number!`);
    }
  };
//Router will go here
module.exports=router;