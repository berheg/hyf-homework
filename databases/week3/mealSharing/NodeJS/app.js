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
//function returns sql query for adding new meal row in mealsharing database
const addNewMeal = function(title, description,location, when, date) {
    const sql = `insert into meal ` +
                `(title, artical_text, date) ` +
                `values ('${title}', '${description}', '${location}','${when}','${date}')` ;     
   return sql;
 };
 //function returns sql query for adding new reservation row in mealsharing database
const addNewReservation = function(number_of_guests, meal_id, created_date) {
    const sql = `insert into meal ` +
                `(title, artical_text, date) ` +
                `values (${number_of_guests}, ${meal_id},'${created_date}')` ;     
   return sql;
 };
  //function returns sql query for adding new review row in mealsharing database
const addNewReview = function(title, description, review_meal_id, stars, created_date) {
    const sql = `insert into meal ` +
                `(title, artical_text, date) ` +
                `values ('${title}','${description}', ${review_meal_id},'${stars}','${created_date}')` ;     
   return sql;
 };