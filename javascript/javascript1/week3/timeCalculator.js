//From given object speed and distance to calculate time it takes
//an object travel is created to pass to getTravelTime function scope global
const travel = {
    speed: 50,
    destinationDistance: 432
}
//getTravelTime function returns time in wanted format from given object
function getTravelTime(object){
    //hours is calculated by roounding of the lower integer
    const hours = Math.floor(object.destinationDistance/object.speed);
    //minutes is calculated from the remainder of distace/speed 
    const minutes = Math.floor(((object.destinationDistance%object.speed)/object.speed)*60);
    const outPut = `${hours} hours and ${minutes} minutes`;
    return outPut;
    }
const travelTime = getTravelTime(travel);
console.log(`Your travel time is :`)
console.log(travelTime); 