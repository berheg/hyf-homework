/*The user inputs name in the input and based on the event selected out puts the name of the user with - and 
animal spirit generated */
//spirit animals array
const spiritAnimal = ["The flying rat","The dancing mouse","cat","The barking dog","fox","sheep","The hungry lion","tiger","The sleeping camel","The milking cow"];
//button query is assigned to btn
const btn = document.querySelector('button.btn');
//input class userName query is assigned to inputBox
const inputBox = document.querySelector('input.userName');
//h1 class result query is assigned to result
const result = document.querySelector('h1.result');
//select class selectEvent query is assigned to select
const select = document.querySelector('select');
//button click eventlistener
btn.addEventListener('click', function(){
    if(select.value === 'mouseover'  || select.value === 'textChange' || select.value === 'none'){
        event.stopPropagation();
    }else{
        renderNewAnimalSpirit();
    }
});
//mouseover and change eventlistener
inputBox.addEventListener('mouseover', function(){
    if(select.value === 'buttonClick'  || select.value === 'textChange' || select.value === 'none'){
        event.stopPropagation();
    }else{
        renderNewAnimalSpirit();
    }
}); 
inputBox.addEventListener('change',function(){
    if(select.value === 'buttonClick'  || select.value === 'mouseover' || select.value === 'none'){
        event.stopPropagation();
    }else{
        renderNewAnimalSpirit();
    }
});  

//Animal spirit rendering function based on the input value
function renderNewAnimalSpirit() {   
    const randomIndex = parseInt(Math.random() * spiritAnimal.length);
    let outPut = '' ;
    if(inputBox.value === ""){
       outPut = 'please insert your name and select one in the dropdown list!'           
    }else{         
        outPut =(inputBox.value + "-" + spiritAnimal[randomIndex]);            
        
    }
    result.innerHTML = outPut;
    select.value = 'none';    
};
