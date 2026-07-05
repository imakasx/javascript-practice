class user{

    constructor(email, password){
        this.email = email
        this.password = password
    }

// password ke liye getter and setter...

    get password(){
        // return this._password.toUpperCase()
        return `321@${this._password}op`
    }

    set password(value){
        this._password = value
    }

// email ke liye getter and setter...

    get email(){
        return this._email.toUpperCase()
    }

    set email(str){
        this._email = str
    }

}


const akash = new user("ak@fb.com", "abc")

console.log(akash.password)
console.log(akash.email)

