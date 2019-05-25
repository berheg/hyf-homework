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
    for (let i=0; i<2; i++)
    {
        volume = volumeInMeters(height[i],width[i],deep[i]);
        housePrice= housePriceEstimated(volume,gardenSizeInM2[i]);
        costDifference= costDifferenceCalculator(houseCosts[i],housePrice);
        console.log(name[i] +' estimated price: ' + housePrice);
        console.log(name[i] +' pays: ' + houseCosts[i]);
        if(costDifference>0){
            console.log(name[i] +' pays extra ' + costDifference);
        }
        else{        
            console.log(name[i] +' pays less '+ -(costDifference));
        } 
        astrixOutPut();
    };    
};
// calls for outPut function for Peter and Julia using array
outPut(['Peter','Julia'],[10,8],[8,5],[10,11],[100,70],[2500000,1000000]);
//calling astrixOutPut 
astrixOutPut();   






