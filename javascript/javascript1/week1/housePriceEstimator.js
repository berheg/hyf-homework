//Volume of the house calculator function
function volumeInMeters(height,width,deep){
    return height*width*deep;
};
//The house Price calculator function based on the volume of the house
function housePriceEstimated(volume,gardenSize){
    return (volume*2.5* 1000 + gardenSize* 300)
};
//The cost difference calculator function
function costDifferenceCalculator(houseCosts,housePrice){
    return houseCosts - housePrice;
}
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('****************************************');
}
//calling astrixOutPut twice using a loop 
for (let i=0; i<2;i++){
    astrixOutPut();   
};
//Out put function for each person
function outPut(name,height,width,deep,gardenSizeInM2,houseCosts){
    volume= volumeInMeters(height,width,deep);
    housePrice= housePriceEstimated(volume,gardenSizeInM2);
    costDifference= costDifferenceCalculator(houseCosts,housePrice);
    console.log(name +' estimated price: ' + housePrice);
    console.log(name +' pays: ' + houseCosts);
    if(costDifference>0){
        console.log(name +' pays extra ' + costDifference);
    }
    else{        
        console.log(name +' pays less '+ -(costDifference));
    }
};
// calls for outPut function for Peter
outPut('Peter',10,8,10,100,2500000);
astrixOutPut();
// calls for outPut function for Julia
outPut('Julia',8,5,11,70,1000000);
//calling astrixOutPut twice using a loop 
for (let i=0; i<2;i++){
    astrixOutPut();   
};





