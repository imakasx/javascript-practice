    // ES6

// class user{
//     constructor(email, password, username){
//         this.username = username;
//         this.email = email;
//         this.password = password;
        
//     }
    
//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// }
// const good = new user("akash@fb.com","1234", "rahul")

// console.log(good.encryptPassword())
// console.log(good.changeUsername())

// Behind the scene

function User1(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User1.prototype.encryptPassword = function(){
return `${this.password}abc`
} 

User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const ui = new User1("akash","akash@fb.com", "1234")

console.log(ui.encryptPassword())
console.log(ui.changeUsername())