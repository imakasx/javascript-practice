function setUsername(username){
    this.username = username
}

function createUser(email, password, username){
    this.email = email
    this.password = password
    setUsername.call(this , username)
}


const io = new createUser("akash@fb.com", "123", "akash")

console.log(io)