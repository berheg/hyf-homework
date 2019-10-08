const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const reservationsJson = fs.readFileSync(
    __dirname + '/../data/reservations.json',
    'utf8'
  );
const validator = require('validator');
const reservationsObject = JSON.parse (reservationsJson);
const post = {
    "name":"Anderson Jonson",
    "email":"adfsrew234@konen.dk",
    "mealId":6  
}

//Router for meal with selected id request
router.post('/', (req, res) => {    
    reservationsObject.push(post);
   const reservationsNewJson = JSON.stringify(reservationsObject);
    fs.writeFileSync(
        __dirname + '/../data/reservations.json',
        reservationsNewJson, (err)=>{
            if(err) throw err;
        }
      ); 
      res.send('New reservation added');             
    });
    
//Router will go here
module.exports=router;