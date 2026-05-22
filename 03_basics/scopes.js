let c = 45
if (true) {
    let c = 450
    // console.log("value", c)
}

var a = 30
if (true) {
    var a = 300
    // console.log("value", a)
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "akash"
    function two(){
        const website = "Google"
        console.log(username)
    }
    // console.log(website)
    two()
}
// console.log(one.username);

// one()

if (true) {
    const username = "Rahul"
    if (username === "Rahul") {
        const website = " youtube"
        // console.log(username + website)
    }
   // console.log(website); 
}
// console.log(username); 


addone(4)
function addone(num){
    return num+1
}
// console.log(addone(4))

// console.log(addtwo(4))
const addtwo = function(num){
    return num +2
}
// console.log(addtwo(4))
addtwo(3)