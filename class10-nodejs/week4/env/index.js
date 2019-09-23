const express = require('express');
const app = express();
const pool = require('./database');

/*require('dotenv').config();
const { USER,
PASSWORD,
HOST,
DATABASE,
PORT
} = process.env;*/

//returns row with the given id and table
app.get("/meal", (request, response) => { 
    const sql = 'Select * from meal'   
    pool.query(sql, function(err, results, fields) {
      if(err){
        console.error(err);
        return;
    }
      response.json(results);    
    });
  });
  app.listen(3000, () => console.log('Server start at 3000'));