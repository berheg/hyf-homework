//Default constant text is assigned for parameters 
const text = "no text given " 
//getFullname function with three variables and default value
function getFullname(firstname=text,surname=text,useFormalName=text){
    //fullname is assigned to the given parameters
    let fullname= firstname + ' ' + surname;
    //if the third parameter is true and not default value
    if(useFormalName){
        if(useFormalName!= text){
        fullname = 'Lord ' + fullname;
        }else if(useFormalName==text){
        //if the third variable is the default value we manage it
        fullname = text + fullname;
        }
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



