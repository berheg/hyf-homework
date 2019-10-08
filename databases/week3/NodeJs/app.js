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
const pool = require("./../database");


const app = express();
//function returns sql query for adding new article row in newsp database
const addNewArticle = function(title, artical_text, date) {
    const sql = `insert into article ` +
                `(title, artical_text, date) ` +
                `values ('${title}', '${artical_text}', '${date}')` ;     
   return sql;
 };
//function returns sql query for changing article title given task id
const changeArticleTitle = function(articleID, newTitle) {
    const sql = `update article ` +
                `set title = '${newTitle}'` + 
                `where id = ${articleID}`;
    return sql;
};
//function returns sql query for changing article date for given task id
const changeArticleDate = function(articleID, newDate) {
    const sql = `update article ` + 
                `set date = '${newDate}'` + 
                `where id = ${articleID}`;
    return sql;
  
};
//function returns sql query for changing article text for given task id
const changeArticleText = function(articleID, newText) {
    const sql = `update article ` + 
                `set text = '${newText}'` + 
                `where id = ${articleID}`;
    return sql;
  
};
 // Router for getting article table
 app.get('/getarticle', (req, res) => {
    let sql = 'SELECT * FROM article';
    let query = pool.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Article fetched...');
    });
});
// Router for getting author table
app.get('/getauthor', (req, res) => {
    let sql = 'SELECT * FROM author';
    let query = pool.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Author fetched...');
    });
});
// Router for getting author-article table
app.get('/getauthor-article', (req, res) => {
    let sql = 'SELECT * FROM author_article';
    let query = pool.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Author-article fetched...');
    });
});
// Router for getting category table
app.get('/getcategory', (req, res) => {
    let sql = 'SELECT * FROM category';
    let query = pool.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Category fetched...');
    });
});
// Router for getting category table
app.get('/getcategoryarticle', (req, res) => {
    let sql = 'SELECT * FROM category_article';
    let query = pool.query(sql, (err, results) => {
        if(err) throw err;
        console.log(results);
        res.send('Category_article fetched...');
    });
});
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.post('/authorpost', (req,res) =>{
    const authorData = req.body;
    const sql = ("insert into author SET ?");
    pool.query(sql,authorData,(err,result,query){
        if(err){
            console.error(err);
            return;
        }
        res.send('Author added successfully!');
    });
});
