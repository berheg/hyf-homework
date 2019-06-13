const h1 = document.createElement('h1');
h1.innerText = "Insert your name and click the button to get a spirit animal fit!";
const inputBox = document.createElement("input");
inputBox.setAttribute("type","text");

const btn = document.createElement("button");
btn.innerText = "Click Me"
document.body.appendChild(h1);
document.body.appendChild(inputBox);
h1.innerText = "Insert your name and select when to get a spirit animal fit!";

/*const selectObject = document.createElement("SELECT");
selectObject.setAttribute("id", "mySelect");
document.body.appendChild(selectObject);

let dropDownList = document.createElement("option");
dropDownList.setAttribute("value", "volvocar");
const option1 = document.createTextNode("When clicks the button");
selectObject.appendChild(option1);
document.querySelector("#mySelect").appendChild(option1);
const option2 = document.createTextNode("Whwn hovers the input field");
dropDownList.appendChild(option2);
document.getElementById("mySelect").appendChild(option2);
const option3 = document.createTextNode("When text is written in the input field");
dropDownList.appendChild(option3);
document.getElementById("mySelect").appendChild(option3);*/
const optionSelected = document.querySelector('#mySelect');
const para = document.createElement('p');
para.innerText = optionSelected.nodeValue;
document.body.appendChild(para);
if(optionSelected.nodeValue === 0){
    btn.addEventListener("click", function(){
        const spiritAnimal = ["The flying rat","The dancing mouse","cat","The barking dog","fox","sheep","lion","tiger","camel","cow"];
        const randomIndex = parseInt(Math.random() * spiritAnimal.length);          
        if(inputBox.value === ""){
            alert("Please insert your name on the input box and click the button");     
        }else{         
            alert(inputBox.value + "-" + spiritAnimal[randomIndex]); 
            const anchorTag = document.createElement('a');
            anchorTag.href = 'noInputDisplay.html';
            document.body.appendChild(anchorTag);
            btn.href ='noInputDisplay.html';
            
        }       
    });
}else if(optionSelected.nodeValue === 1){
    inputBox.addEventListener("hover",function(){
        const spiritAnimal = ["The flying rat","The dancing mouse","cat","The barking dog","fox","sheep","lion","tiger","camel","cow"];
        const randomIndex = parseInt(Math.random() * 10);          
        if(inputBox.value === ""){
            alert("Please insert your name on the input box and click the button");     
        }else{         
            alert(inputBox.value + "-" + spiritAnimal[randomIndex]); 
            /*const anchorTag = document.createElement('a');
            anchorTag.href = 'noInputDisplay.html';
            document.body.appendChild(anchorTag);*/
            
        }       
    });    
}

document.body.appendChild(btn);
