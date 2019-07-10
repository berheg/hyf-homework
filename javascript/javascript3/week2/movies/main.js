const moviesApi = "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/";

fetch(moviesApi)
    .then(response => response.json())
    .then(json =>{
        console.log(json);
        //getBadMovies(json);
        const badMovies = json.
        filter(obj => obj.rating < 4);
        return badMovies;
    })
    .then(result =>{
        console.log(result);
        const movies = result.filter(obj => obj.year >= 2000);
        console.log(movies);
        return movies;
    })
    .then(result =>{
        console.log(result);
        const badMoviesTitle = result.map(result.title);
        return badMoviesTitle;
    })
    .then(result => console.log(result))
    .catch(err => console.log(err)); 
 
/*function getBadMovies(arrayOfMovies){
        
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
}*/   
