const express = require('express');
const app = express;
const router = express.Router();
//assuming app is express Object.
router.get('/',function(req,res) {
    res.sendFile('index.html');
  });
module.exports = router;