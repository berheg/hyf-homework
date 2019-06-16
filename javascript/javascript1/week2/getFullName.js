//getFullname function with three variables and default value
function getFullname(firstname,surname,useFormalName){
    //fullname is assigned to the given parameters
    if(firstname === undefined || surname === undefined ){
        return 'You have to set name and sur name first!'
    }
    let fullname= firstname + ' ' + surname;
    //if the third parameter is true and not default value
    if(useFormalName){        
        fullname = 'Lord ' + fullname;        
    }
    return fullname;
};
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('****************************************');
};
//const sampleFullname = [['Benjamin', 'Hughes', true],['Girmay', 'Berhe', false]]
//astrixOutPut function is called
astrixOutPut();
//output samples for different in put cases
const fullname1= getFullname('Benjamin', 'Hughes', true);
console.log(fullname1);
const fullname2= getFullname('Girmay', 'Berhe', false);
console.log(fullname2);
console.log(getFullname());
console.log(getFullname('Girmay'));
astrixOutPut();



