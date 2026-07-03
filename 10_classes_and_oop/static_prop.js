class user{
    constructor(username){
        this.name = username;
    }
    logMe(){
        console.log(`name is :${this.name}`)
    }

    //'static' keyword access rokne ke liye

    static creatId(){
        this.id = `123`
        return this.id
    }
}


const ui = new user("akash")
console.log(ui.creatId())


class joy extends  user{
    constructor(username,email){
    super(username)
    this.email = email    
    }
}

const done = new joy("akash", "akash@fb.com")
console.log(done)