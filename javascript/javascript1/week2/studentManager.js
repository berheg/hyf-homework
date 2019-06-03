
//constant array variable to be accessed by all functions(scope global)
const class07Students = [];
//addStudentToClass add students to class07Students array
function addStudentToClass(studentName) {
    if(getNumberOfStudents(class07Students)<6){
        if(studentName == ' '){
            outPutString = 'You need to give a name to be registared!';
            return outPutString;
        }else{
            for(let i=0;i< getNumberOfStudents(class07Students);i++){
                if(studentName == class07Students[i]){
                    let outPutString= 'Student ' + studentName + ' is already in the class'
                    return outPutString;
                }
            }        
        }        
    }else if(studentName== 'Queen'){
            console.log('We add her because she is ' + studentName)
            //class07Students.push(studentName); 
            }else{
            outPutString= "Cannot add more students to class 07";
            return outPutString;
        }
    class07Students.push(studentName);           
    return 'Sucessfully added!'
};
//returns the number of students in the class07Students array
function getNumberOfStudents(class07Students) {
    const arrayLength = class07Students.length;
    return arrayLength;
};
//astrixOutPut function to print astrix when it is called 
function astrixOutPut(){
    console.log('****************************************');
};
//log out the lists in the given array to see who are added or not
function showListsInClass(studentName){
    for(let i=0;i<studentName.length;i++){
        console.log(studentName[i]);
        console.log(addStudentToClass(studentName[i]));
    }    
    return;
}
astrixOutPut();
//Testing sample input array that fulfills all conditions
let name= ['Girmay','Maria','Maria',' ','Nuru','Christofer','Benjamin','Rasmusun','Jon','Queen']
showListsInClass(name);
console.log('Number of Students: ' + getNumberOfStudents(class07Students));
astrixOutPut();
function showStudentNameList(studentName){
    for(let i=0;i<studentName.length;i++)
    console.log(studentName[i]);
    return;
}
console.log('The list of students name in the class07:');
showStudentNameList(class07Students);
astrixOutPut();
