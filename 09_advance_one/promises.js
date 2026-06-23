const promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async resolve");
        resolve();
    },1000)
})
promise.then(function(){
    console.log("promise consumed");
})


new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log("Async resolve 2");
        resolve()
    },1000)
}).then(()=>{
    console.log("promise consumed 2")
})

const promisethree = new Promise(function(resolve, reject){
    setTimeout(()=>{    
        resolve({
            username: 'Chai', 
            email: "Chai@example.com"
        });
    },1000)
})

promisethree.then((user)=>{
        console.log(user)
    })


const promisefour = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({
            username: "akash",
            password: "12345"
        })
        }else{
            reject('error: something went wrong ')
        }
        
    },1000)
})

promisefour
.then((user)=>{
    return user.username
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("All Done")
})




