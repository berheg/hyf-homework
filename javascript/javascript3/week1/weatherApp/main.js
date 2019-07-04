let lat;
let long;
function geoFindMe() {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');
    const li = document.querySelector('li.currentTmp')
    const h2 = document.querySelector('h2');
    const input = document.querySelector('input.city');
    const icon = document.querySelector('section.icon')
    mapLink.href = '';
    mapLink.textContent = '';   
    function success() {
        /*const latitude  = position.coords.latitude;
        const longitude = position.coords.longitude;
        lat = latitude;
        long = longitude;
        status.textContent = '';
        mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
        mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`; 
        const api =  http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=b6907d289e10d714a6e88b30761fae22*/
        input.addEventListener('keyup',()=>{
            h2.innerText = 'Locating…';
            li.textContent = '';
        })
        const city = input.value;   
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f1a35cc23798d7dcbfd21e71968ac4d6&units=metric`;
        fetch(api)
        .then(response => response.json())            
        .then(json =>{ temp = json.main.temp
            console.log(json);            
            h2.innerText = 'Current Temperature';
            li.textContent = temp;
            weatherIcon = json.weather[0].icon;
            icon.innerHTML = `<img src="icons/${weatherIcon}.png"/>`;
            console.log(temp);
            console.log(weatherIcon);
        });

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
  
/*function initMap() {
    const location = {
        lat: 55.76,
        long: 12.58
    }
    const map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 8
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    })
}*/  