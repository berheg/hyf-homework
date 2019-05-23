
//Starting up company name generator
//Array variable contains 10 words  
let firstWords = ["Easy", "Awesome", "Corporate", "Amazing", "Magnificent", "Wonderful", 
"Phenomenal", "Impressive", "Incredible", "Unbelievable"];
//Array variable contains 10 other words
let secondWords = ["Company", "Operation", "Corporation", "Partnership", "Agency", "Institution", 
"multinational", "Group", "Business", "Firm"];
//Random number between 0 and 10 generated using random function
const randomNumber = Math.floor(Math.random() * 10) + 0;
//New company name created by concating two words from two different arrays
let newStartupName = (firstWords[randomNumber] + " " + secondWords[randomNumber]);
console.log("The startup: \"" + newStartupName + "\" contains " + newStartupName.length + " characters");