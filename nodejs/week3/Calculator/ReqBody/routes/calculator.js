const express = require ('express');
const router = express.Router ();
const bodyParser = require('body-parser');
const addition = require('./addition.js');
const multiplication = require('./multiplication.js');
const division = require('./division.js');
const subtraction = require('./subtraction.js');
const app = express();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
router.use(bodyParser());
//router for /numbers/multiply/[0-9]+/[0-9]+
router.get('/', function(req, res) { 
    const {firstNum, secondNum } = req.query;
     console.log(firstNum);
     console.log(secondNum);  
  
  //if one or both of the inputs are not defined
  if(firstNum== undefined||secondNum==undefined){
    res.send('Enter the numbers properly please!');
  }
  //if both inputs are given properly
  else{
      const method  = req.params;
      console.log(method);
      const methodsArr = ['add','multiply','subtraction','division'];
      let output;
        if(methodsArr.includes(method)){
            if(method===methodsArr[0]){
                output = addition(firstNum,secondNum);
            }
            else if(method===methodsArr[1]){
                output = multiplication(firstNum,secondNum);
            }
            else if(method===methodsArr[2]){
                output = subtraction(firstNum,secondNum);
            }
            else{
                output = division(firstNum,secondNum);
            }
            res.send(`the output of ${method} of ${firstNum} and ${secondNum} is ${output}`)
        }
        else{
        res.send('Please enter one of the artimatics operations!');
        }
    }
});
//Router will go here
module.exports=router;