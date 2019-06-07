//Remove the item in numbersArray that is equal to randomNumber
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//random number generated using formula
const randomNumber = parseInt(Math.random() * 11);
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('****************************************');
};
astrixOutPut();
console.log(numbersArray);
console.log(randomNumber);
//check if the randomNumber is in numbersArray
if(numbersArray.includes(randomNumber)){
    //For loop to find the position of the randomNumber in the array
    for(let i=0; i < numbersArray.length;i++){
        if(numbersArray[i]==randomNumber){
            //Removes the element in the array in position i without leaving a hole
            numbersArray.splice(i,1);
        }
    }
}else{//if the randomNumber is not in the array
    console.log(randomNumber + " is not in the numbers array.")
}
console.log(" numbersArray after removing " + randomNumber);
console.log(numbersArray);
astrixOutPut();