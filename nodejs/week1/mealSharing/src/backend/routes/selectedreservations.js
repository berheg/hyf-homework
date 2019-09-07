const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const reservationsJson = fs.readFileSync (
    __dirname + '/../data/reservation.json',
    'utf8'
  );
  const reservationsObject = JSON.parse (reservationsJson);
//Router for reservations with mealId request
router.get('/:id', (req, res) => {    
    const selectedReservation = reservationsObject.filter(reservation => 
        {if(reservation.mealId == parseInt(req.params.id)) 
            return true;
        });    
    if(selectedReservation.length == 1)    
        res.send(selectedReservation[0]);
    else{
        res.status(404)//Set status to 404 as movie was not found
        res.send({message: "Not Found"});
    }
}
);
//Router will go here
module.exports=router;