let myName = "Akash   ";
let myUser = "uiAkash  ";

// console.log(myName.trueLength)  

let myHero = ["spider","thor"]

let heroPower ={
    thor : "hammer",
    spider : "sling",

    getspiderPower : function () {
        console.log(`spider power is ${this.spider}`)
    }
}

Object.prototype.akash = function(){
    console.log(`akash is present in all objects`)
}

Array.prototype.heyakash = function(){
    console.log(`say hello`);
}

// heroPower.akash()
// myHero.akash()
// heroPower.heyakash()// not run bcz power only array

// myHero.heyakash()

// Inheritance 

const user = {
    name : "akash",
    email : "akash@gmail.com",  
}

const teacher = {
    makevideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TAsupport= {
    makeAssigment : 'js assignment',
    fullTime: true, 
    __proto__: teachingSupport
}


teacher.__proto__ = user

// modern syntax


Object.setPrototypeOf(teachingSupport , teacher)

let anotherName = "akash vishwakarma"

String.prototype.truelength = function(){
    console.log(this)
    console.log(this.trim().length)
    console.log(`True length is ${this.length}`)

}

anotherName.truelength();

"iceTea".truelength();