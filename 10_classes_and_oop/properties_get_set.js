function user(email, username){
    this._email = email
    this.username = username 

    Object.defineProperty(this , "email", {
        get: function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this.email = value
        }
    })
}

const ui = new user ("ak@gmail.com", "rahul")
console.log(ui.email)