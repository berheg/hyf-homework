
function redBallMove(){
    for(let i = 20;i<=290; i +=10){
        moveElement(redBox,{x:20,y:20+i});
    }
}
function blueBallMove(){
    for(let i = 20,j=20;i<=290,j<=390; i+=10 ,j +=10){
        moveElement(blueBox,{x:20+j,y:20+i});
    }
}
function greenBallMove(){
    for(let i = 20;i<=390; i +=10){
        moveElement(greenBox,{x:20+i,y:20});
    }
}
Promise.all(redBallMove(),blueBallMove(),greenBallMove())
.then(console.log('Done'));
