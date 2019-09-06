const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const mealsJson = fs.readFileSync (
    __dirname + '/../data/meals.json',
    'utf8'
  );
  const mealsObject = JSON.parse (mealsJson);
//Router for meals request
router.get('/', (req, res) => {    
      
  res.send(mealsObject);
}
);
//Router will go here
module.exports=router;