const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const mealsJson = fs.readFileSync (
    __dirname + '/../data/meals.json',
    'utf8'
  );
  const mealsObject = JSON.parse (mealsJson);
//Router for large-meals request
router.get('/', (req, res) => {    
    const lageMealsObject = mealsObject.filter(meal => {return meal.maxNumberOfGuests > 10;});
    res.send(lageMealsObject);
}
);
//Router will go here
module.exports=router;