const express = require ('express');
const router = express.Router ();
const fs = require ('fs');
const reviewsJson = fs.readFileSync (
    __dirname + '/../data/reviews.json',
    'utf8'
  );
  const reviewsObject = JSON.parse (reviewsJson);
//Router for meal with selected id request
router.get('/:id', (req, res) => {    
    const selectedReview = reviewsObject.filter(review => {
        if(review.id ==parseInt(req.params.id))
         return true;                
    });
    if(selectedReview.length == 1)    
        res.send(selectedReview[0]);
    else{
        res.status(404)//Set status to 404 as movie was not found
        res.send({message: "Not Found"});
    }

});
//Router will go here
module.exports=router;