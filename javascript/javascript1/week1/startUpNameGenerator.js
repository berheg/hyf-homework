
//Starting up company name generator
//Array variable contains 10 words  
const firstWords = ["Easy", "Awesome", "Corporate", "Amazing", "Magnificent", "Wonderful", 
"Phenomenal", "Impressive", "Incredible", "Unbelievable"];
//Array variable contains 10 other words
const secondWords = ["Company", "Operation", "Corporation", "Partnership", "Agency", "Institution", 
"multinational", "Group", "Business", "Firm"];
//Random number between 0 and 10 generated using random function
function randomNumberGenerator(){
    const randomNumber = Math.floor(Math.random() * 10) + 0;
    return randomNumber;
};

//New company name created by concating two words from two different arrays
const newStartupName = (firstWords[randomNumberGenerator()] + " " + secondWords[randomNumberGenerator()]);
console.log("The startup: \"" + newStartupName + "\" contains " + newStartupName.length + " characters");