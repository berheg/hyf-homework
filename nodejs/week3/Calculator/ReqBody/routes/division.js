//numChecker validates weather or not the given strings are numbers
const numCheCker = require('./numChecker.js');
function division(firstNum,secondNum){
    let productFirstNum = 1; 
    let productSecondNum = 1;
    if(typeof(firstNum)!=="object"){
        productFirstNum = Number(firstNum);
    }else{
        for(let j=0; j<firstNum.length;j++){
            if(numCheCker(firstNum[j])===true){ 
                productFirstNum *= Number(firstNum[j]);            
            }else
                return (numCheCker(firstNum[j]));
        } 
    }
    if(typeof(secondNum)!=="object"){
        productFirstNum = Number(firstNum);
    }else{
        for(let i=0; i < secondNum.length;i++){
            if(numCheCker(secondNum[i])===true){             
                productSecondNum *= Number(secondNum[i]);
            }else
                return (numCheCker(secondNum[i]));
        }
    } 
    const division = productFirstNum/productSecondNum;     
    return division; 

};

//Router will go here
module.exports=division;