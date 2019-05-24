//Age calculator function
const readline =require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('****************************************');
};
astrixOutPut();
//Out put to ask birthday
rl.question('Please enter your Year of birth: ', (answer) => {
  const yearOfBirth =  answer;  
  const yearFuture =  2057;
  const age = yearFuture - yearOfBirth;
    console.log(`You will be ${age} years old in ${yearFuture}`); 
    astrixOutPut();   
  rl.close();
});




