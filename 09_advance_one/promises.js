const promise = new Promise(function(resole, reject){
    setTimeout(function(){
        console.log("Async resolve");
        resole();
    },1000)
})
promise.then(function(){
    console.log("promise consumed");
})