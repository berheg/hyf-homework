class Circle{
    constructor(radius){
        this.radius = radius;
        this.getDiameter= function(){
            const diameter = 2*this.radius;
            console.log('Diameter: ' + diameter);
            return diameter;
        }
        this.getCircumference = function(){
            const circumference = 2*  Math.PI * this.radius;
            console.log('Circumference: '+ circumference);
            return circumference;
        }
        this.getArea = function(){
            const area =  Math.PI * this.radius*this.radius;
            console.log('Area: ' + area);
            return area;
        }
    }
}
const circle = new Circle(10);
circle.getDiameter();
circle.getCircumference();
circle.getArea();