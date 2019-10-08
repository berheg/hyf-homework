const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const reservationsJson = fs.readFileSync (
    __dirname + '/../data/reservations.json',
    'utf8'
  );
  const reservationsObject = JSON.parse (reservationsJson);
//Router for reservations request
router.get('/', (req, res) => {    
    res.send(reservationsObject);
}
);
module.exports=router;