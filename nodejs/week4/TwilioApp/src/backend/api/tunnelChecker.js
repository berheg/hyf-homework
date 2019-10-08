const express = require('express');
const router = express.Router();
const app = express;
const bodyParser = require('body-parser');

router.get("/", (request, response) => { 
    response.send(`This is my webpage!`);    
});
module.exports = router;