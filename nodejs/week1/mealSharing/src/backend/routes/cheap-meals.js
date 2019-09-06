const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const mealsJson = fs.readFileSync (
    __dirname + '/../data/meals.json',
    'utf8'
  );
  const mealsObject = JSON.parse (mealsJson);
//Router for cheap meals request
router.get('/', (req, res) => {    
    const cheapMealsObject = mealsObject.filter(meal => {return meal.price < 100;});
    res.send(cheapMealsObject);
}
);
module.exports=router;