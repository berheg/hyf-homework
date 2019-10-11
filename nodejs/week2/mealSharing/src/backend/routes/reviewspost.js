const express = require ('express');
const router = express.Router ();
const bodyParser = require('body-parser');
const fs = require ('fs');
const reviewsJson = fs.readFileSync(
    __dirname + '/../data/reviews.json',
    'utf8'
  );
const reviewsObject = JSON.parse (reviewsJson);
const post = {
    "id": 4,
    "title":"Very special",
    "createdBy":"David Eriksson",
    "stars":6,
    "createdAt": "2019-02-22" 
}
router.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
router.use(bodyParser.json());
//Router for meal with selected id request
router.post('/', (req, res) => {    
    const review = req.body;
    reviewsObject.push(review);
    const reviewsNewJson = JSON.stringify(reviewsObject);
    fs.writeFileSync(
        __dirname + '/../data/reviews.json',
        reviewsNewJson, (err)=>{
          if(err) throw err;
        }
      ); 
      res.send('New review post added');             
    });
    
//Router will go here
module.exports=router;