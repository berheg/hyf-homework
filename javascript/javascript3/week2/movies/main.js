const moviesApi = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/";

fetch(moviesApi)
    .then(response => response.json())
    .then(json =>{
        console.log(json);
        getBadMovies(json);
        
    }); 
 
function getBadMovies(arrayOfMovies){
        
    const badMovies = arrayOfMovies.
        filter(obj => obj.rating < 4);    
    console.log(badMovies);
    getTitlesBadMovies(badMovies);
    return badMovies; 
} 
function getTitlesBadMovies(arrayMovies){
    const titlesBadMovies = arrayMovies.
        map(obj => obj.title);
    console.log(titlesBadMovies);
    return titlesBadMovies;
}   
