//Import required Routers in the given directory
const express = require('express');
const mealsRoutes = require( __dirname +'/routes/meals.js');
const bodyParser = require('body-parser');

const selectedMealRoutes = require (__dirname +'/routes/selectedMeal.js');
const reservationsRoutes = require( __dirname +'/routes/reservations.js');
const selectedReservationRoutes = require( __dirname +'/routes/selectedReservation.js');
const reviewsRoutes = require( __dirname +'/routes/reviews.js');
const selectedReviewRoutes = require( __dirname +'/routes/selectedReview.js');
const mealspostRoute = require( __dirname +'/routes/mealspost.js');
const reservationspostRoute = require( __dirname +'/routes/reservationspost.js');
const reviewspostRoute = require( __dirname +'/routes/reviewspost.js');
const app = express();
app.use(bodyParser());

//Middlewares call appropriate router to use based on the request route
app.use((req,query,next) =>{
    console.log(`${new Date()} request received for path: ${req.url}`);
    next();
})
app.use('/meals', mealsRoutes);
app.use('/meals/',selectedMealRoutes);
app.use('/reservations', reservationsRoutes);
app.use('/reservationS/', selectedReservationRoutes);
app.use('/reviews', reviewsRoutes);
app.use('/reviews/', selectedReviewRoutes);
app.use('/mealspost', mealspostRoute);
app.use('/reservationspost', reservationspostRoute);
app.use('/reviewspost', reviewspostRoute);
//Server listening function
app.listen(3000, () => console.log('Listening at 3000'));