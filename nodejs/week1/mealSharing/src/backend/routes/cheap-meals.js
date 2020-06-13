const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const mealsJson = fs.readFileSync (
    __dirname + '/../data/meals.json',
    'utf8'
  );
  const reviewsJson = fs.readFileSync (
    __dirname + '/../data/reviews.json',
    'utf8'
  );
  const mealsObject = JSON.parse (mealsJson);
  const reviewsObject = JSON.parse (reviewsJson);
//Router for cheap meals request
router.get('/', (req, res) => {    
    const cheapMealsObject = mealsObject.filter(meal => {return meal.price < 100;});
    cheapMealsObject.forEach(meal => {
      const reviews = reviewsObject.filter(review =>{
        return review.mealId = meal.id;
      })
      meal.reviews= reviews;
    });
    
    res.send(cheapMealsObject);
}
);
module.exports=router;