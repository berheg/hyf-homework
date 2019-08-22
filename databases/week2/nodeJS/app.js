const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
    database : 'hyf19'    
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});

const app = express();
const addNewTask = function(title, description, created, updated, dueDate, statusID, userID) {
    const sql = `insert into task ` +
                `(title, description, created, updated, due_date, status_id, user_id) ` +
                `values ('${title}', '${description}', '${created}', '${updated}', '${dueDate}', ${statusID}, ${userID})` ;
     
   return sql;
 };
 
 const changeTaskTitle = function(taskID, newTitle) {
     const sql = `update task ` +
                 `set title = '${newTitle}'` + 
                 `where id = '${taskID}'`;
     return sql;
 };
 
 const changeTaskDueDate = function(taskID, newDueDate) {
     const sql = `update task ` + 
                 `set due_date = '${newDueDate}'` + 
                 `where id = '${taskID}'`;
     return sql;
   
 };
 
 const changeTaskStatus = function(taskID, newStatus) {
     const sql = `update task inner join status on status.id = tassk.status_id ` + 
                 `set task.status_id = status.id ` + 
                 `where status.name = '${newStatus}' and task.id = '${taskID}'`;
     return sql;
 };
 
 const markTaskAsCompleted = function(taskID) {
     const sql = `update task inner join status on status.id = tassk.status_id ` + 
                 `set task.status_id = status.id ` + 
                 `where status.name = 'Done' and task.id = '${taskID}'`;
     return sql;
 };
 
 const deleteTask = function(taskID) {
     const sql = `delete from task where id = '${taskID}'`;
     return sql;
 };
 function sqlQuery(queryToBeExcuted){
     let query = db.query(queryToBeExcuted, (err, result) => {
         if(err) throw err;
         console.log(result);
         res.send(`Post inserted...`);
     });
     return query
 }
 app.get('/updatepost/:id', (req, res) => {
     sqlQuery(deleteTask(2));
 });
 // Select posts
app.get('/gettask', (req, res) => {
    let sql = 'SELECT * FROM task';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});
app.get('/addnewtask', (req, res) => {
    let query = db.query(addNewTask('JS beginners','for all','2019-08-21','2019-08-22','2019-10-30',1,5), (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`Post inserted...`);
    });
});
 app.listen('3000', () => {
    console.log('Server started on port 3000');
});
