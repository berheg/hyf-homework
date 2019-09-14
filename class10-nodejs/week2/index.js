const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser());
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
app.use(function(req,res,next){
    const secret = req.query;
    if(secret!=='radex'){
        res.status(403).send('No access, nice trying Hackers!');
        return;
    }
    next();
});
app.get("/users", function(req, res) {
  //console.dir(req.query);​
  res.send(`test OK! olderThan =${req.query.olderThan}, else = ${req.query.else}`);
})
app.get("/users/:userId", (req, res) => {
  //console.log(req.params);​
  const userId = parseInt(req.params);​
  res.send(`userId: ${userId}`);
});​
app.post("/users", function(req, res) {
  res.send("POST ok!");
});
app.listen(3000, function() {
  console.log("Server started");
});
