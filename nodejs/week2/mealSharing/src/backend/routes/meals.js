const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const mealsJson = fs.readFileSync (
    __dirname + '/../data/meals.json',
    'utf8'
  );
  const validator = require('validator');
  const mealsObject = JSON.parse (mealsJson);
//Router for meals request
router.get('/', (req, res) => {    
    const url = req.url;
    console.log(req.url);
    const maxPrice = req.query.maxPrice;
    const title = req.query.title;
    const createdAfter = req.query.createdAfter;
    const limit = req.query.limit;
    if( url == '/'){
      res.send(mealsObject);
      return;
    }
    else{
      if(maxPrice!= undefined){
        if(validator.isNumeric(maxPrice)){
          const meals = mealsObject.filter(meal =>{
            return meal.price < parseInt(maxPrice);
          })
          res.json(meals);
        }
        else
          res.send('Please Enter maximum price as number');
          return;
      }
      else if(title!= undefined){
          const meals = mealsObject.filter(meal =>{
            return meal.title.includes(title)
          })
          if(meals != '')
            res.json(meals);        
          else
          res.send(`${title} is not found in the meal title!`);
            
      }
      else if(createdAfter!= undefined){
        if(validator.isDate(createdAfter)){
          const meals = mealsObject.filter(meal =>{
            return meal.createdAfter > createdAfter;
          })
          res.json(meals);
        }
        else
          res.send(`${createdAfter} is not date type!`)
      }
      else if(limit!= undefined){
        if(validator.isNumeric(limit)){
          let meals;
          if(parseInt(limit) < mealsObject.length){
            meals = mealsObject.slice(0,parseInt(limit));
          }
          else
            meals = mealsObject;
          res.json(meals);          
        }
      }    
  }
}
);
//Router will go here
module.exports=router;