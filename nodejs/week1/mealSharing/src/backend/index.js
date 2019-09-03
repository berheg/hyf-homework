
const express = require('express');
const app = express();
const fs = require ('fs');
const mealsJson = fs.readFileSync (
    __dirname + '/data/meals.json',
    'utf8'
  );
const mealsObject = JSON.parse (mealsJson);
app.listen(3000, () => console.log('Listening at 3000'));
app.get('/meals', (req, res) => {    
      
        res.send(mealsObject);
    }
);
app.get('/cheap-meals', (req, res) => {
    
        const cheapMealsObject = mealsObject.filter(meal => {return meal.price <100;});
        res.json(cheapMealsObject);
    }
);

