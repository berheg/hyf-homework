const validator = require('validator');
//numChecker validates weather or not the given strings are numbers
function numChecker(first){
    if(validator.isNumeric(first)){   
        
        return true;      
      
    }  
    else{      
      return (`The input ${first} is not number!`);
    }
  };

module.exports=numChecker;