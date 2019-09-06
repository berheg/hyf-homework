const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const mealsJson = fs.readFileSync (
    __dirname + '/../data/meals.json',
    'utf8'
  );
  const mealsObject = JSON.parse (mealsJson);
//Router for meal with selected id request
router.get('/:id', (req, res) => {    
    const selectedMeal = mealsObject.filter(meal => {
        return  meal.id = parseInt(req.params.id);                
    });
    if(selectedMeal.length == 1)    
        res.send(selectedMeal[0]);
    else{
        res.status(404)//Set status to 404 as movie was not found
        res.send({message: "Not Found"});
    }

});
//Router will go here
module.exports=router;