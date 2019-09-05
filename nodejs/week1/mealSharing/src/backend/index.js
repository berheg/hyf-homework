
const express = require('express');
const app = express();
const fs = require ('fs');
const mealsJson = fs.readFileSync (
    __dirname + '/data/meals.json',
    'utf8'
  );
  const reservationsJson = fs.readFileSync (
    __dirname + '/data/reservation.json',
    'utf8'
  );
const mealsObject = JSON.parse (mealsJson);
const reservationsObject = JSON.parse (reservationsJson);
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
        res.send(cheapMealsObject);
    }
);
//Router for large-meals request
app.get('/large-meals', (req, res) => {    
    const lageMealsObject = mealsObject.filter(meal => {return meal.maxNumberOfGuests > 10;});
    res.send(lageMealsObject);
}
);
//Router for meal id request
app.get('/meal/:id', (req, res) => {    
    const selectedMeal = mealsObject.filter(meal => {return meal.id = parseInt(req.params.id);});
    res.send(selectedMeal);
}
);
//Router for reservations request
app.get('/reservations', (req, res) => {      
    res.send(reservationsObject);
}
);
//Router for reservations mealId request
app.get('/reservation/:id', (req, res) => {    
    const selectedReservation = reservationsObject.filter(reservation => {return reservation.mealId = parseInt(req.params.id);});
    res.send(selectedReservation);
}
);


