
const spiritAnimal = ["The flying rat","The dancing mouse","cat","The barking dog","fox","sheep","The hungry lion","tiger","The sleeping camel","The milking cow"];

const btn = document.querySelector('button.btn');
const inputBox = document.querySelector('input.userName');
const result = document.querySelector('h1.result');
const select = document.querySelector('select.selectEvent');
btn.addEventListener('click',renderNewAnimalSpirit);
inputBox.addEventListener('mouseover',renderNewAnimalSpirit);
inputBox.addEventListener('change',renderNewAnimalSpirit);
  function renderNewAnimalSpirit() {  
        const randomIndex = parseInt(Math.random() * spiritAnimal.length);
        let outPut = '' ;
        if(inputBox.value === ""){
            alert('Could you please insert your name and select one in the dropdown list!')    
        }else{         
            outPut =(inputBox.value + "-" + spiritAnimal[randomIndex]);     
            
        }
        result.innerHTML = outPut;     
        
      };
  /*function addListeners(){
      if(window.addEventListener){
          document.getElementById('btn').addEventListener('click',renderNewAnimalSpirit());
          //document.getElementById('userName').addEventListener('onmouseenter',renderNewAnimalSpirit(),false);
          //document.getElementById('userName').addEventListener('Mouseover',renderNewAnimalSpirit(),false);
      }
      window.onload = addListeners;

  }*/
  
  /*function listenToSelectElement() {
    const select = document.querySelector('select');
  
    select.addEventListener('change', selectchangeHandler)
  
  }  
  
  function selectchangeHandler() {
    const select = document.querySelector('select');
  
    const selectedValue = select.value;
  
    if (selectedValue === 'buttonClick') {
      listenToButtonClick();
    } else if (selectedValue === 'hoverOnInput') {
      listenToHover();
    } else {
      listenToTextchange();
    }
  }
  
  function listenToButtonClick() {   
  
    btn.addEventListener('click', buttonClickHandler);
    input.removeEventListener('onmouseenter', listenToHover);
    input.removeEventListener('keyup', textChangeHandler);
  }
  
  function buttonClickHandler() {
      alert('Could you please insert your name and select one in the dropdown list!');
    result.innerHTML = renderNewAnimalSpirit(); 
    
  }
  
  function listenToHover() {
    const btn = document.querySelector('button');
    const input = document.querySelector('input');
  
    btn.removeEventListener('click', buttonClickHandler);
    input.addEventListener('onmouseenter', listenToHover);
    input.removeEventListener('keyup', textChangeHandler);
  
  }
  function hoverHandler() {

    result.innerHTML = renderNewAnimalSpirit();
  
  }
  
  
  function listenToTextchange () {
    const btn = document.querySelector('button');
    const input = document.querySelector('input');
  
    btn.removeEventListener('click', buttonClickHandler);
    input.removeEventListener('onmouseenter', listenToHover);
    input.addEventListener('keyup', textChangeHandler);
  
  }
  function textChangeHandler() {
    result.innerHTML = renderNewAnimalSpirit();  
  }  
  window.onload = listenToSelectElement();
  listenToSelectElement();
*/
