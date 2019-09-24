const express = require("express");
const bodyParser = require("body-parser");
const { studentRouter } = require("./student-router");
const app = express();
const port = 3001;
// middleware
app.use(bodyParser.json());
app.use("*", (req, res, next) => {
    const { method, path } = req;
    console.log(`${method} ${path}`);
    next();
});
// mount the routers
app.use("/student", studentRouter);
//Error handler
app.use((err,req,res,next) =>{    
    res.json({err});
});
app.listen(port, () => {
    console.log(`App started at port ${port}`);
});





