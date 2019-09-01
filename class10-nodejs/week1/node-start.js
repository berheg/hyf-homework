const ckalk = require('chalk');
console.log(ckalk.green('h1 from node.js'));
class Person{
    constructor(name){
        this.name = name;
    }
}
const girmay = new Person('Girmay');
console.log(girmay);
/*const url = 'https://en1a923qg1w4k.x.pipedream.net/';
fetch(url)
.then(console.log);*/