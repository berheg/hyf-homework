const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
require("dotenv").config();
const app = express();
const db = mysql.createConnection({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    multipleStatements: true,
});
db.connect();
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());// route for the home directory - GET request
app.get("/", (req, res)=>{
    res.send("HYF week3 home page");
});
// route for adding data to the database - POST request
app.post("/add-contact", (req, res)=>{
    console.log(req.body)
    const contact = req.body;
    db.query("INSERT INTO contacts values(? , ?)", contact.name,cotact.phonenumber, function(err, result, query){
        if(err){
            throw err;
        }
        if(!err){
            res.send("contact added successfully!");
        }
    })
})
app.listen(3000, () => console.log('Server listening at port 3000'));
