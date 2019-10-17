class Order{
    constructor(type, id){        
        this.id = id;
        this.type = type;
        this.status = ['ordered'];
        this.created = new Date();
        this.modified = [];        
   }
}
module.exports = Order;