const user ={
    username : "akash",
    loginCount: 8,
    signIN : true,

    getUserDetails : function(){
        // console.log(this.username)
        console.log(`hello:${this.username}`)
    }
}

// console.log(this)
// console.log(user.getUserDetails())

// const promiseOne = new Promise()
// const date = new Date()


function User(username, loginCount , isloggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;
    this.language =function(){
        console.log(`welcome${this.username}`);
        
    }

    // return this
}
// console.log(User("akash",5,true))
// const userOne = User("akash", 5, true);
// const usertwo = User("Rahul", 56, false);
// console.log(userOne)
// this fun override so used "new" keyword than acctual rigth.
const userOne =  new User("akash", 5, true);
const usertwo = new User("Rahul", 56, false);
// console.log(userOne)
// console.log(usertwo)

// console.log(user.constructor)

// console.log(userOne instanceof User)
console.log(userOne instanceof Object)



