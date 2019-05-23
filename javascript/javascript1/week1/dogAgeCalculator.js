//Age calculator 
const readline =require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let  shouldShowResultInDogYears = Boolean;
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('****************************************');
};
astrixOutPut();
//Out put to show result in dog years 
rl.question('Should show results dog years: ', (answer) => {  
  shouldShowResultInDogYears= Boolean(answer);
  let dogYearOfBirth =  2017;  
  let dogYearFuture =  2027;
  let dogYear = dogYearFuture - dogYearOfBirth;
  console.log(answer);
  console.log(shouldShowResultInDogYears);
  if(shouldShowResultInDogYears){
    console.log(`Your dog will be ${dogYear*7} dog years old in ${dogYearFuture}`);
  }  
    else {
        console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}`);
        
    };
    astrixOutPut();
  rl.close();
});