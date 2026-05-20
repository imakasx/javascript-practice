function myName(){
    console.log("A");
    console.log("K");
    console.log("A");
    console.log("S");
    console.log("H");
}
// myName();

function addNumber(num1,num2){
    console.log(num1+num2);
}

// addNumber(2,5);
// addNumber(2,"a");
// addNumber(2, null);
// const result = addNumber(5,3);
// console.log("result :",result)

function addTwoNumber(num1,num2){
    // let result = num1 + num2
    // return result

    return num1+num2
    
}
const result = addTwoNumber(3,2)
// console.log("result :",result)

function loginmessage(username){
    if(!username){
        console.log("please enter the name ")
        return 
    }
    return `${username} is logged in`
}
// console.log(loginmessage())
// console.log(loginmessage("akash"))

const myList={
    id: "123",
    name: " akash",
    isloggedin : true,

}
function myFile(myList){
    console.log(myList.id)
}
myFile(myList);