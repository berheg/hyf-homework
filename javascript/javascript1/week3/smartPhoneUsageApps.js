//A user can add smartphone activities and then he can see a status on how his smartphone usage is going.
//acvivities array of objects is declared as global variable
let activities = [];
//addActivity function adds an object to the activities array and date is generated automatically
function addActivity(activity,duration){
    let today  = new Date();
    const date = `${today.toLocaleDateString("en-US")}`;
    /*const obj = {
        date: `${today.toLocaleDateString("en-US")}`,
        activity:`${activity}`,
        duration: duration,
    }*/
    activities.push({date,activity,duration});
    return ;
}
//showStatus function shoows the activities you registared and the total minutes you use
function showStatus(activities){
    num = activities.length;
    if(!num){
        outPut = "Add some activities before calling showStatus";
    }else{
        totalDuration = 0;
        const today  = new Date();        
        for(let i=0; i<num;i++){
            if(activities[i].date === `${today.toLocaleDateString("en-US")}`)
            totalDuration += activities[i].duration; 
        };
        if(num == 1){
            outPut  = `\n You have added ${num} activity. It amounts to ${totalDuration} min. of usage`;
        }else{
            outPut  = ` \n You have added ${num} activities. They amount to ${totalDuration} min. of usage`;
        }       
    }    
    return outPut;
}
console.log('\n\nCalling showStatus() before adding activities:');
console.log(showStatus(activities));
addActivity('Youtube', 30);
addActivity('DR-TV', 60);
console.log('\nCalling showStatus() after adding activities:');
console.log(showStatus(activities));
console.log(activities);