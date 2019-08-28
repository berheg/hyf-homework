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
    password : '123456',
    database : 'newsp'    
});
// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();
//function returns sql query for adding new article row in newsp database
const addNewArticle = function(title, artical_text, date) {
    const sql = `insert into article ` +
                `(title, artical_text, date) ` +
                `values ('${title}', '${artical_text}', '${date}')` ;     
   return sql;
 };
//function returns sql query for changing task title given task id
const changeArticleTitle = function(articleID, newTitle) {
    const sql = `update article ` +
                `set title = '${newTitle}'` + 
                `where id = ${articleID}`;
    return sql;
};
//function returns sql query for changing task due date for given task id
const changeArticleDate = function(articleID, newDate) {
    const sql = `update task ` + 
                `set due_date = '${newDate}'` + 
                `where id = ${articleID}`;
    return sql;
  
};