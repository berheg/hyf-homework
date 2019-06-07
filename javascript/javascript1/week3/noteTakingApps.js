//Note taking app in case of emergency
//notes array is created to save the notes and id as object, scope global
let notes = [];
//addNotes adds an object with content and id keys to notes array
function addNote(content,id){
    const obj = {
        content: content,
        id: id,
    };
    notes.push(obj);
};
//returns the note taken from id given
function getNoteFromId(id){
    if(typeof(id)== 'number'){
        for(let i=0; i<notes.length; i++){
            if(id == notes[i].id){
                outPut = notes[i].content;
                return outPut;
            }
        };
        outPut = id + ' is not in the notes array';
        return outPut;
    }
    outPut = id + ' is not a number';
    return outPut;
};
//returns all content and id in the notes array
function getAllNotes(){
    return notes;
};
//Log out the array notes in specific format
function logoutNotesFormatted(){
    outPut = [];
    for(let i = 0; i < notes.length; i++){
       outPut = `The note with id: ${notes[i].id} has the following note text: " ${ notes[i].content} " `       
        console.log(outPut);
    };
    return;
};
addNote('i am reading about danish culture',1);
addNote('I have seen specticular view',2);
addNote('No one is perfect even the so called demokracy',3);
console.log(getNoteFromId(1));
console.log(getNoteFromId(2));
console.log(getAllNotes());
logoutNotesFormatted();