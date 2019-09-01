//console.log('Hello again!');
const http = require('http');
//console.log(http);
const server = http.createServer((req,res) =>{
    //console.log(req);
    const {url}=req;
    console.log(`${url}`);
    if(`${url}` ===('/add')){
        res.end(`${2+3}`);
    }        
    //res.end(`Hello from ${url}`);
    else{
        res.end('Hello');
    }       

});

server.listen(3000);
