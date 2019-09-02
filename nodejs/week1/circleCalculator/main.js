/*Circle class
 * It consists of constructor , getdiameter, getCircumference and getArea methods
 * @param radius 
 */
class Circle{
    //constructor for circle class
    constructor(radius){
        this.radius = radius;
        //getDiameter method returens diameter of the circle with given radius
        this.getDiameter= function(){
            const diameter = 2*this.radius;
            console.log('Diameter: ' + diameter);
            return diameter;
        }
        //getCircumference method returens circumference of the circle with given radius
        this.getCircumference = function(){
            const circumference = 2*  Math.PI * this.radius;
            console.log('Circumference: '+ circumference);
            return circumference;
        }
        //getArea method returens area of the circle with given radius
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