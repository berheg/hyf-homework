let lat;
let long;
function geoFindMe() {

    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const li = document.querySelector('li.currentTmp')
    const h2 = document.querySelector('h2');
  
    mapLink.href = '';
    mapLink.textContent = '';
    //li.textContent = 'Current Temperature:'   
    function success(position) {
        const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        lat = latitude;
        long = longitude;
        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
       mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`; 
       const map = L.map('map').setView([latitude, longitude], 15);
        const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = L.tileLayer(tileUrl, { attribution });
        tiles.addTo(map);
        const marker = L.marker([latitude, longitude]).addTo(map);          
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const api = `${proxy}https://api.darksky.net/forecast/9040d04db71bf14480d96f775d1d58da/${lat},${long}`;
        fetch(api)
        .then(response => response.json())            
        .then(json =>{ temp = json.currently.temperature//console.log(json.currently.temperature))
        //.then(json =>{
            console.log(json);
            //const temperature = json.currently.Temperature;
            h2.innerText = 'Current Temperature';
            li.textContent = temp;
            console.log(temp);
        });
        console.log(lat, long); 
    };  
    function error() {
        status.textContent = 'Unable to retrieve your location';
    }
    
    if (!navigator.geolocation) {
    status.textContent = 'Geolocation is not supported by your browser';
    } else {
    status.textContent = 'Locating…';
    navigator.geolocation.getCurrentPosition(success, error);
    }
    
}  
document.querySelector('#find-me').addEventListener('click', geoFindMe); 
  
