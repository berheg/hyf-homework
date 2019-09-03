let express = require('express');
let app = express();
//let obj = require("../data/meals.json");
app.listen(3000, () => console.log('Listening at 3000'));
let fs = require("fs");
console.log("\n *STARTING* \n");
// Get content from file
const contents = fs.readFile("./data/meals.json",'utf8', (err, jsonString) => {
    if (err) {
        console.log("File read failed:", err)
        return
    }
    console.log('File data:', jsonString) 
});
// Define to JSON type
const jsonContent = JSON.parse(contents);
// Get Value from JSON
console.log("Title: ", jsonContent.title);
console.log("Maxiumem number of guests: ", jsonContent.maxNumberOfGuests);
console.log("Description: ", jsonContent.description);
console.log("\n *EXIT* \n");