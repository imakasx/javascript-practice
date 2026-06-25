const user ={
    username : "akash",
    loginCount: 8,
    signIN : true,

    getUserDetails : function(){
        // console.log(this.username)
        console.log(`hello:${this.username}`)
    }
}

console.log(user.getUserDetails())