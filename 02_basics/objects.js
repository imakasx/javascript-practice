
const mySym = Symbol("key1");
const myData ={
    "name" : "akash vishwakarma",
    age : 21,
    emailID : "akash@google.com" ,
    islogged : false ,
    lastDay : ["Mon","Sat"],
    [mySym] : "Key1"
    // mySym : "Key1"
}

// console.log(myData.name);
// console.log(myData["name"]);
// console.log(myData[mySym]);
// console.log(typeof myData.mySym);

myData.emailID ="akash.yaho.com"
// console.log(myData);
// Object.freeze(myData);
myData.emailID ="akash.chatgpt.com"

// console.log(myData);


myData.short = function(){
    console.log("hello user");
}
console.log(myData.short())

myData.short = function(){
    console.log(`hello user, ${this.name}`);
}
console.log(myData.short())