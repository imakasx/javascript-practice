class user{
    constructor(email, password){
        this.email = email
        this.password = password
    }
}


const akash = new user("ak@fb.com", "123")
console.log(akash.password)