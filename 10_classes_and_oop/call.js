function setUsername(username){
    this.username = username
    console.log(this.username)
}

function createUser(email, password, username){
    this.email = email
    this.password = password
    setUsername()
}


const io = new createUser("akash@fb.com", "123", "akash")

console.log(io)