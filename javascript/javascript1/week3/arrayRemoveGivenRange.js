//In a loop remove the number of items equal to numbersToRemove
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//random number generated using formula
const randomNumber = parseInt(Math.random() * 11);
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('****************************************');
};
astrixOutPut();
console.log("Array before removal :")
console.log(numbersArray);
function getarrayRemove(numbersArray){
    //check if the randomNumber is in numbersArray
    if(numbersArray.includes(randomNumber)){
        //For loop to find the position of the randomNumber in the array
        for(let i=0; i < numbersArray.length;i++){
            if(numbersArray[i]==randomNumber){
                //random number is generated for number of elements to be removed
                let numbersToRemove = parseInt(Math.random() * 11);          
                //If the numbersToRemove is out of range , a new nember is assigned to it
                if((i+ numbersToRemove)>numbersArray.length){
                    numbersToRemove = numbersArray.length - i;
                }
                console.log("Initial number of elements to be removed: " + randomNumber);
                console.log("Number of elements to be removed: " + numbersToRemove);
                //Removes numbersToRemove elements in the array from position i without leaving a hole  
                numbersArray.splice(i,numbersToRemove);
                return;
            }
        }
    }else{//if the randomNumber is not in the array
        console.log(randomNumber + " is not in the numbers array.")
    }
    return;  
}
getarrayRemove(numbersArray);
//numbersArray.splice(0,numbersToRemove);   
console.log("Array after removal :")
console.log(numbersArray);
astrixOutPut();