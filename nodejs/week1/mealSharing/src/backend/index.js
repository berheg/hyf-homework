
const express = require('express');
const app = express();
const fs = require ('fs');
const mealsJson = fs.readFileSync (
    __dirname + '/data/meals.json',
    'utf8'
  );
const mealsObject = JSON.parse (mealsJson);
//Server listening
app.listen(3000, () => console.log('Listening at 3000'));
//Router for meals request
app.get('/meals', (req, res) => {    
      
        res.send(mealsObject);
    }
);
//Router for cheap-meals request
app.get('/cheap-meals', (req, res) => {    
        const cheapMealsObject = mealsObject.filter(meal => {return meal.price <100;});
        res.json(cheapMealsObject);
    }
);
//Router for large-meals request
app.get('/large-meals', (req, res) => {    
    const lageMealsObject = mealsObject.filter(meal => {return meal.maxNumberOfGuests < 100;});
    res.json(lageMealsObject);
}
);

