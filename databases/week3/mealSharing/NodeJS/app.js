/*
*Express and mysql installed and created here
*Port listener created
*mysql connection created and connected
*functions created for appropriate query return
*Router for each query created
*/
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
// Create connection
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '123456',
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
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json());
//function returns sql query for adding new meal row in mealsharing database
const addNewMeal = function(title, description,location, when, date) {
    const sql = `insert into meal ` +
                `(title, description, location,when,date) ` +
                `values ('${title}', '${description}', '${location}','${when}','${date}')` ;     
   return sql;
 };
 //function returns sql query for adding new reservation row in mealsharing database
const addNewReservation = function(number_of_guests, meal_id, created_date) {
    const sql = `insert into reservation` +
                `(number_of_guests, meal_id, created_date) ` +
                `values (${number_of_guests}, ${meal_id},'${created_date}')` ;     
   return sql;
 };
  //function returns sql query for adding new review row in mealsharing database
const addNewReview = function(title, description, review_meal_id, stars, created_date) {
    const sql = `insert into review ` +
                `(title, description, review_meal_id, stars, created_date) ` +
                `values ('${title}','${description}', ${review_meal_id},${stars},'${created_date}')` ;     
   return sql;
 }; 
  //function returns sql query for Updating a meal with any id in mealsharing database
const updateMealwithId = function(id,newTitle,newMaxReservations) {
    const sql = `update meal ` +
                `set title = '${newTitle}', max_reservations = ${newMaxReservations} ` +
                `where id = ${id}` ;     
   return sql;
 }; 
 // Router for getting meal table
 app.get('/getmeal', (req, res) => {
    let sql = 'SELECT * FROM meal';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Meal fetched...');
    });
});
 // Router for getting reservation table
 app.get('/getreservation', (req, res) => {
    let sql = 'SELECT * FROM reservation';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Reservation fetched...');
    });
});
// Router for getting review table
app.get('/getreview', (req, res) => {
    let sql = 'SELECT * FROM review';
    let query = db.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Review fetched...');
    });
});
// Insert new meal
app.get('/addnewmeal', (req, res) => {
    let query = db.query(addNewMeal('Rød grød med fløde','Danish typical meal','Griffenfeldsgade 7, 2200 København','2019-06-12 23:30:20', 15, 200, now()), 
    (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('New Meal added...');
    });
});
// Insert new reservation
app.get('/addnewreservation', (req, res) => {
    let query = db.query(addNewReservation( 15, 2, '2019-08-30 20:30'), (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('New Reservation added...');
    });
});
// Insert new review
app.get('/addnewreview', (req, res) => {
    let query = db.query(addNewReview( 'Incridable', 'I am very much satisfied', 3, 10,'2019-08-31 20:30'), (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('New Review added...');
    });
});
// Update meal with given id and new attributes
app.get('/updatemealwithid', (req, res) => {
    let query = db.query(updateMealwithId( 5,'Chicken Roasted', 14), (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('Meal updated...');
    });
});
app.get('/getmeal/:id', (req, res) => {
    const id = req.params.id;
    const sql = "Select * from meal where id = ?"
    db.query(sql,id, (err,result) =>{
        if(err){
            console.error(err);
            throw err;
        }
        res.send(result);
    })
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.post('/authorpost', (req,res) =>{
    const authorData = req.body;
    const sql = ("insert into author SET ?");
    db.query(sql,authorData,(err,result,query){
        if(err){
            console.error(err);
            return;
        }
        res.send('Author added successfully!');
    });
});
app.listen('3000', () => {
    console.log('Server started on port 3000');
});