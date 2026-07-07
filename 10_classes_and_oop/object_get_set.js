const user ={
    _name : "akash",
    _password : "321",

    get name(){
        return this._name.toUpperCase()
    },

    set name(str){
        this.name = str
    },

    get password(){
        return this._password
    },

    set password(value){
        this.password = value
    }
}

// console.log(Object.create(user).name)
// console.log(Object.create(user).password)

const ui = Object.create(user)

console.log(ui.name)
console.log(ui.password)