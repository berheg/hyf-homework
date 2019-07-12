//Promise that resolves after  resolveAfter seconds
function resolveAfter(resolveAfter){
    new Promise(function(resolve,reject){
        setTimeout(() => { resolve(console.log('I am called asynchronously after 6 seconds'));
    },resolveAfter*1000)        
    })
}
resolveAfter(6);