//Import required Routers in the given directory
const express = require('express');
const mealsRoutes = require( __dirname +'/routes/meals.js');
const cheapMealsRoutes = require (__dirname +'/routes/cheap-Meals.js');
const largeMealsRoutes = require (__dirname +'/routes/large-Meals.js');
const selectedMealsRoutes = require (__dirname +'/routes/selectedMeals.js');
const reservationsRoutes = require( __dirname +'/routes/reservations.js');
const selectedReservationsRoutes = require( __dirname +'/routes/selectedreservations.js');
const app = express();
//Server listening function
app.listen(3000, () => console.log('Listening at 3000'));
//Middlewares call appropriate router to use based on the request route
app.use('/meals', mealsRoutes);
app.use('/cheap-meals', cheapMealsRoutes);
app.use('/large-meals',largeMealsRoutes);
app.use('/meal',selectedMealsRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/reservation/', selectedReservationsRoutes);
