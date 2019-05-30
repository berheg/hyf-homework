//common variables to be used by all the functions, scope global
const candyType = ['Sweet','Chocolate','Toffee','Chewing-gum'];
const pricePerGram = [0.5,0.7,1.1,0.03];
const weight = [];
const boughtCandyPrice = [];
//addCandynfunction add total price spent to the array boughtCandyPrice
function addCandy(candyBought,weightBought){     
    let notFound = 'true';
    let i=0;    
    while( i<(candyType.length-1) && notFound){
        if(candyType[i]==candyBought){
            const wantedIndex = i;
            const totalPrice= weightBought*pricePerGram[wantedIndex];
            boughtCandyPrice.push(totalPrice);
            notFound = 'false';                   
            console.log(candyType[wantedIndex] + ' , ' + weightBought  + ' , ' + pricePerGram[wantedIndex]);          
        }
        i++;
    };
    return;   
};
//canBuyMoreCandy helps to decide based on the amountToSpent and amountSpent
function canBuyMoreCandy(){
    const amountToSpend = Math.random() * 100;
    let amountSpent= 0;
    for(let i=0; i< boughtCandyPrice.length;i++){        
        amountSpent += boughtCandyPrice[i];
        console.log('amountSpent = ' + amountSpent);
    };
    console.log('amountToSpend = ' + amountToSpend);    
    if(amountToSpend > amountSpent){
        const outPut = true;
        return outPut;
    }else{
        const outPut = false;
        return outPut;
    }    
};
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('****************************************');
};
astrixOutPut();
console.log('The candy type bought , weight bought and price per gram: ');
addCandy('Sweet',20);
addCandy('Chocolate',20);
//addCandy('Chocolate',1000);
astrixOutPut();
console.log('So, based on the amount of candy you buy: ');
//Helps to know if we have enough moneny to spent or not 
if(canBuyMoreCandy()){
    console.log("You can buy more, so please do!");    
}else{
   console.log("Enough candy for you!"); 
}
astrixOutPut();