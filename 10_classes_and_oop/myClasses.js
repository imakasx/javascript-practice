    // ES6

class user{
    constructor(email, password, username){
        this.username = username;
        this.email = email;
        this.password = password;
        
    }
    
    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}
const good = new user("akash@fb.com","1234", "rahul")

console.log(good.encryptPassword())
console.log(good.changeUsername())