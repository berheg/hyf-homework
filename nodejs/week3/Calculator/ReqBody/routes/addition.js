//numChecker validates weather or not the given strings are numbers
const numCheCker = require('./numChecker.js');

function addition(firstNum,secondNum){
    let sumFirstNum = 0; 
    let sumSecondNum = 0;
    if(typeof(firstNum)!=="object"){
        sumFirstNum = parseInt(firstNum);
    }else{
        for(let j=0; j<firstNum.length;j++){
            if(numCheCker(firstNum[j])===true){ 
                sumFirstNum += parseInt(firstNum[j]);            
            }else
                return (numCheCker(firstNum[j]));
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
                return (numCheCker(secondNum[i]));
        } 
    }
    const sum = sumFirstNum+sumSecondNum;     
     return sum; 
    
    };

//Router will go here
module.exports=addition;