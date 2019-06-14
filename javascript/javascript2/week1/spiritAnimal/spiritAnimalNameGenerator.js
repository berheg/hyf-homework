
const spiritAnimal = ["The flying rat","The dancing mouse","cat","The barking dog","fox","sheep","The hungry lion","tiger","The sleeping camel","The milking cow"];

const btn = document.querySelector('button.btn');
const inputBox = document.querySelector('input.userName');
const result = document.querySelector('h1.result');

function selectEventHandler(){
    const select = document.querySelector('select.selectEvent');
    const selectedValue = select.value;
    select.addEventListener('change', function(){
        if(selectedValue === 'buttonClick'){
            inputBox.removeEventListener('onmouseenter', hoverListner());
            inputBox.removeEventListener('change', inputChangeListener());
            btn.addEventListener('click',()  =>{
                renderNewAnimalSpirit; 
            });            
        }else if(selectedValue === 'hoverOnInput'){
            inputBox.removeEventListener('change', inputChangeListener);
            btn.removeEventListener('click',btnClickListener);
            inputBox.addEventListener('mouseover',()  =>{
                renderNewAnimalSpirit; 
            });
            
        }else{
            inputBox.removeEventListener('mouseover', hoverListner);
            btn.removeEventListener('click',btnClickListener);
            inputBox.addEventListener('change',()  =>{
                renderNewAnimalSpirit; })          
        } 
    }) 
    
};

function renderNewAnimalSpirit() {   
    const randomIndex = parseInt(Math.random() * spiritAnimal.length);
    let outPut = '' ;
    if(inputBox.value === ""){
        alert('\nCould you please insert your name and select one in the dropdown list!')
           
    }else{         
        outPut =(inputBox.value + "-" + spiritAnimal[randomIndex]);     
        
    }
    result.innerHTML = outPut;   
    
    };
 
 function btnClickListener(){
    inputBox.removeEventListener('change',inputChangeListener);
    inputBox.removeEventListener('mouseover',hoverListner);
    btn.addEventListener('click', renderNewAnimalSpirit)   
 }
 function inputChangeListener(){
    inputBox.removeEventListener('mouseover',hoverListner);
    btn.removeEventListener("click",btnClickListener);
    inputBox.addEventListener('change', renderNewAnimalSpirit)
 }         
 
 function hoverListner(){
   Btn.removeEventListener("click",btnClickListener);
   inputBox.removeEventListener('change',inputChangeListener);   
   inputBox.addEventListener("mouseover", renderNewAnimalSpirit);
 
 }
selectEventHandler();
  