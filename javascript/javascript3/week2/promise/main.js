//Promise that resolves after  resolveAfter seconds
function setTimeoutPromise(resolveAfter){
    return new Promise(resolve => {
        setTimeout(() => { resolve(`I am called asynchronously after ${resolveAfter} seconds`);
    },resolveAfter*1000)        
    })
};
setTimeoutPromise(3).then(console.log);
setTimeoutPromise(6).then(console.log);
//getCurrentLocation as promise
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          const currentLocation = {
            longitude: position.coords.longitude,
            latitude: position.coords.latitude
          };
          resolve(currentLocation);
        },
        err => {
          error = {
            code: err.code,
            message: err.message
          };
          reject(error);
        }
      );
    });
  }
  getCurrentLocation()
  .then(position => {
    // called when the users position is found
    console.log(position);
  })
  .catch(error => {
    // called if there was an error getting the users location
    console.log(error.message);
  });