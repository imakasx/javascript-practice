function user(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this , "email", {
        get: function(){
            // return this._email.toUpperCase()
            return `Here is email is : ${this._email.toUpperCase()}`
        },
        set:function(value){
            this.email = value
        }
    })

    Object.defineProperty(this , "password", {
        get: function(){
            return ` password is :  ${this._password}erw`
        },
        set:function(value){
            this.password = value
        }
    })
}

const ui = new user ("ak@gmail.com", "6532")
console.log(ui.email)
console.log(ui.password)