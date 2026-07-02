class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

const use = new user("js")
use.logMe()