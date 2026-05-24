const user= {
    username : "akash",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username} ,welcome to website `);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="rahul"
// user.welcomeMessage()

// console.log(this)

// function chai(){
//     let user = "akash"
//     console.log(this.user);
// }
// chai();

// const chai = function(){
//     let user = "akash"
//     console.log(this.user)
// }
// chai()

// const chai = () => {
//     let user = "akash"
//     console.log(this)
// }
// chai()

// const addtwo = (n1, n2) =>{
//     return(n1+n2);
// }

// const addtwo =(n1 , n2) => n1+n2

// const addtwo =(n1 , n2) => (n1+n2 )

const addtwo=(n1 , n2) =>({username : "akash"})


console.log(addtwo(2,3));