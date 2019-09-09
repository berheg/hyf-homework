const express = require('express');
const app = express();

/*app.use('/',function(req,res,next){
    const secret = req.query.secret;
    if(secret!='radex'){
        res.status(403).send('No access, nice trying Hackers!');
        return;
    }
    next();
});​*/
//Router for meals request
app.get('/', (req, res) => {    
     const object ={
         title:'Fullstack Developer',
         subTitle:'Team coordinator'
     }; 
    res.json(object);
  }
  );
  app.get('/contact', (req, res) => {    
    const object ={
        Email:'asbc123@yahoo.com',
        Tele:'24536788'
    }; 
   res.json(object);
 }
 );
 app.get('/educations', (req, res) => {       
    const object =[{
        Subject:'Computer Engineering',
        Degree:'MSc',
        University:'KTH',
        attended: '2015'
    },
    {
        Subject:'Process Engineer',
        Degree:'MSc',
        University:'DTU',
        attended: '2013'
    }
];
//if(object.attended == req.query.attended) 
res.json(object);
 });
app.get('/skills', (req, res) => {    
    const object =[{
        area:'HTML',
        Level:'6'
    },
    {
        area:'CSS',
        Level:'6'
    }
]; 

   res.json(object);
 }
 ); 
 app.use(function(err,req,res,next){
     console.log('Error Middleware caught an error',err);
     const errorResponse = {
         err: err.toString(),
         url: req.originalUrl
     }
     res.status(500).send(errorResponse);
 });
 app.use('*',(req,res)=> res.status(404).send('Not found'));
  //Router will go here
 // module.exports=router;
app.listen(3000, () => console.log('Listening at 3000'));