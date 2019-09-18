const validator = require('validator');
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
module.exports=numCheCker;