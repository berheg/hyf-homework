const express = require('express');
const app = express();
const router = app.router();
//RESTfull api HTTP methods:
//GET get data 
//POST add new object
//PUT edit existing object
//DELETE delete object

//GET /Customers
//GET: Customers with f?newrThan=30&olderThan = 15
//GRT /Customer/1234
//+ body:
//{}
//Post //Customers/Email/
//PUT 
// + body:​
// { "email": "rame2@trustpilot.com" }
router.use(function(req,res,next){
    const secret = req.query;
    if(secret!=='radex'){
        res.status(403).send('No access, nice trying Hackers!');
        return;
    }
    next();
});
router.get("/users", function(req, res) {
  console.log(req.query);​
  res.send(`test OK! olderThan =${req.query.olderThan}, else = ${req.query.else}`);
})
router.get("/users/:userId", function(req, res) {
  console.log(req.params);​
  const userId = req.params;​
  res.send(`userId: ${userId}`);
});​
router.post("/users", function(req, res) {
  res.send("POST ok!");
});
router.listen(3000, function() {
  console.log("Server started");
});
