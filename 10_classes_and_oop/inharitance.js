class user {
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`username is ${this.username}`)
    }
}

class teacher extends user {
    constructor(username, email, password){
        super(username)
        this.email = email;
        this.password = password;
        // new calling keyword
    }

    addCourse(){
        console.log(`a new course added by ${this.username}`)
    }
}

const use = new teacher("js", "akash@fb.com","321")
use.addCourse()

const chai = new user("rahul")
// chai.addCourse()
chai.logMe()

// console.log(use === teacher)
console.log(use instanceof teacher)
