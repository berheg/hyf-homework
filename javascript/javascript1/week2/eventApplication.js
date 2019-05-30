//getEventWeekday function is 
function getEventWeekday(numberOfDays){
    //new date object is assigned to today
    const today = new Date();
    //days array is assigned days as getDay() index out put
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    //todays index in the array is assigned to dayIndex
    const dayIndex = today.getDay();
    let wantedDayIndex = dayIndex + numberOfDays;
    if(wantedDayIndex >7){
        wantedDayIndex %= 7;
    }
    return days[wantedDayIndex];
};
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('****************************************');
};
//testing sample days in array
const numDays = [40,20,10,5,7]
astrixOutPut();
for(let i=0;i<numDays.length;i++){
    console.log('The event day after ' + numDays[i] + ' days is:')
    console.log(getEventWeekday(numDays[i]));
    astrixOutPut();
}
astrixOutPut();