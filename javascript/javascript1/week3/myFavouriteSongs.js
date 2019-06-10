//Lets create some js where you can add songs from a list of available songs to your own list of songs you like 
const songDatabase = [{
    songId: 1,
    title: 'My baby',
    artist: 'Soggy socks',
  },
  {
    songId: 2,
    title: '3 nails in wood',
    artist: 'The carpenters',
  },
  {
    songId: 3,
    title: 'Blacker than black',
    artist: 'Instant coffee',
  },
  {
    songId: 4,
    title: 'When is enough too little?',
    artist: 'The spies girls',
  },
];
//function returens the length of object array
function getArrayLength(obj){
    return obj.length;
};
//myPlaylist array is created empty to fill using a function
const myPlaylist = [];
//assign the length of the array plus 1 for new object to be added in to the array
let newId = getArrayLength(songDatabase) + 1;
const song = {
    songId: newId,
    title : 'Said I Loved You',
    artist :'Michael Bolton',
};
//Function add an object song to the existing songDatabase object array
function addSongToDatabase(song){
    songDatabase.push(song);
    return;
};
//calling the function to add the song object created 
addSongToDatabase(song);
//Log out the songDatabase array
console.log(songDatabase);
//function returns the index of the object in the array or null using string key
//Fuzzy search is included
function findObjectByKey(array, key, value) {
    const lengthOfString = value.length;
    for (let i = 0; i < array.length; i++) {        
        if (array[i][key] === value || (array[i][key].slice(0,lengthOfString) === value)) {
            return i;
        }
    };    
    return null;
};
//Function returns the object in the array using the title key
function getSongByTitle(title1){
    wantedIndex = findObjectByKey(songDatabase,'title',title1);
    return songDatabase[wantedIndex];
};
//Function adding a song to an array playlist 
function addSongToMyPlaylist(title){   
    myPlaylist.push(getSongByTitle(title));
    return;
};
const searchedSong = getSongByTitle('When is enough too little?');
console.log(searchedSong); 
let searchedSong3 = getSongByTitle('Black');
console.log(searchedSong3); 
searchedSong3 = getSongByTitle('Blackbone');
console.log(searchedSong3); 
const searchedSong2 = getSongByTitle('When is enough too');
console.log(searchedSong2); 

const searchedSong4 = getSongByTitle('3 nails in wood');
console.log(searchedSong4); 
addSongToMyPlaylist('Said I Loved You')
addSongToMyPlaylist('3 nails in wood');
console.log(myPlaylist);