//Wear recommendation function based on temperature
function getWearRecommendation(temperature){    
    if(temperature>=37){
        return 'It is too hot you should wear T-shirt and shorts';
    }if(temperature>=15){
        return 'It is hot you should wear light summer clothes';
    }if(temperature>=10){
        return 'It is windy you should wear Light clothes with summer jacket';
    }if(temperature>0){
        return 'It is cold you should wear Winter Jacket';
    }
    else{
        return 'It is too cold you should wear Winter Jacket with gloves and insulated hat';
    }
};
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('************************************************************************');
};
//sample temperatures for testing the function 
const sampleTemperature = [30,40,13,7,-5]
astrixOutPut();
//for loop for calling the function wearingRecommendation 
for(let i=0;i<sampleTemperature.length;i++){
    console.log('The temperature is '+sampleTemperature[i] + ' degree celcius')
    console.log(getWearRecommendation(sampleTemperature[i]));
    astrixOutPut();
}
