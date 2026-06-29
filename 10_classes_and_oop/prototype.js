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

myHero.heyakash()



