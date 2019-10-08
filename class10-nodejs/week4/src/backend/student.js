const validator = require('validator');
class Student{
    constructor({ name, grade, favorite}){
        if(!name || !grade){
            throw ('name or grade is undefined');
            return;
        }
        this.name = name;
        this.grade = grade;
        this.favorite = favorite;
    }
}
module.exports = Student;