class Order{
    constructor(type, id){
        const typeValue = ["pizza", "burger", "salad"]; 
        const bool = typeValue.includes(type);       
        if(bool){
            console.log(typeValue.includes(type));
            this.id = id;
            this.type = type;
            this.status = ['ordered'];
            this.created = new Date();
            this.modified = [];
        }else{
            throw (`${type} is not in the meal lists` );
            return;
        }        
   }
}
module.exports = Order;