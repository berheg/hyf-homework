const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const mealsJson = fs.readFileSync(
    __dirname + '/../data/meals.json',
    'utf8'
  );
const mealsObject = JSON.parse (mealsJson);
const post = {
    "id":6,"title":"India traditional food",
    "maxNumberOfGuests":20,"description":"Very special with delicious souce ",
    "createdAt":"2019/08/24 12:20","price":150
}

//Router for meal with selected id request
router.post('/', (req, res) => {    
    mealsObject.push(post);
   const mealsNewJson = JSON.stringify(mealsObject);
    fs.writeFileSync(
        __dirname + '/../data/meals.json',
        mealsNewJson, (err)=>{
            if(err) throw err;
        }
      ); 
      res.send('Post added');             
    });
    
//Router will go here
module.exports=router;