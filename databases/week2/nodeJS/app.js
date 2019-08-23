const express = require('express');
const mysql = require('mysql');

// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Hailu/423103',
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
//function returns sql query for adding new task row
const addNewTask = function(title, description, created, updated, dueDate, statusID, userID) {
    const sql = `insert into task ` +
                `(title, description, created, updated, due_date, status_id, user_id) ` +
                `values ('${title}', '${description}', '${created}', '${updated}', '${dueDate}', ${statusID}, ${userID})` ;
     
   return sql;
 };
 //function returns sql query for changing task title given task id
 const changeTaskTitle = function(taskID, newTitle) {
     const sql = `update task ` +
                 `set title = '${newTitle}'` + 
                 `where id = '${taskID}'`;
     return sql;
 };
 //function returns sql query for changing task due date for given task id
 const changeTaskDueDate = function(taskID, newDueDate) {
     const sql = `update task ` + 
                 `set due_date = '${newDueDate}'` + 
                 `where id = '${taskID}'`;
     return sql;
   
 };
 //function returns sql query for changing task status for given task id
 const changeTaskStatus = function(taskID, newStatus) {
     const sql = `update task inner join status on status.name = '${newStatus}' ` + 
                 `set task.status_id = status.id ` + 
                 `where task.id = ${taskID}`;
     return sql;
 };
 //function returns sql query to assign  task status completed for given task id
 const markTaskAsCompleted = function(taskID) {
     const sql = `update task inner join status on status.id = tassk.status_id ` + 
                 `set task.status_id = status.id ` + 
                 `where status.name = 'Done' and task.id = '${taskID}'`;
     return sql;
 };
 //function returns sql query for deleting task given task id
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
 // Router for getting task table
app.get('/gettask', (req, res) => {
    let sql = 'SELECT * FROM task';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Posts fetched...');
    });
});
//Router for adding new task arrow function
app.get('/addnewtask', (req, res) => {
    let query = db.query(addNewTask('JS beginners','for all','2019-08-21','2019-08-22','2019-10-30',1,5), (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`Post inserted...`);
    });
});
//Router for changing task status given task id using arrow functiom
app.get('/changetaskstatus', (req, res) => {
    let query = db.query(changeTaskStatus(1,'Not started'), (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`Task Status Changed...`);
    });
});
//Router for changing task title for given task id using arrow functiom
app.get('/changetasktitle', (req, res) => {
    let query = db.query(changeTaskTitle(7,'Car Repair'), (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(`Task title Changed...`);
    });
});
//For listening port 3000
 app.listen('3000', () => {
    console.log('Server started on port 3000');
});
