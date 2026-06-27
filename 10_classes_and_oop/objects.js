const { useReducer } = require("react")

function multiplyObj(num){
    return num*10
}
multiplyObj.power = 2
console.log(multiplyObj(8))
console.log(multiplyObj.prototype)
console.log(multiplyObj.power)


function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.printMe =function(){
    console.log(`score is ${this.username}`)
}

const tea =  new createUser("tea", 25);
const coffe = new createUser("coffe" , 125);

tea.printMe();

