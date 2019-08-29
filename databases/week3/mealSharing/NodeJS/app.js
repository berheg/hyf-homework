/*
*Express and mysql installed and created here
*Port listener created
*mysql connection created and connected
*functions created for appropriate query return
*Router for each query created
*/
const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '12345',
    database : 'mealsharing'    
});
// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();