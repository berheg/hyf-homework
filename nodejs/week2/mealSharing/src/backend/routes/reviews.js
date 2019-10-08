const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const reviewsJson = fs.readFileSync (
    __dirname + '/../data/reviews.json',
    'utf8'
  );
  const reviewsObject = JSON.parse (reviewsJson);
//Router for reservations request
router.get('/', (req, res) => {    
    res.send(reviewsObject);
}
);
module.exports=router;