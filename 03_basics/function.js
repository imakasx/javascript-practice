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
// myFile(myList);

function calculatePrice(v1, v2, ...n1){
    return n1
}
// console.log(calculatePrice(99, 200, 100, 300));


// const thevlaueofcar={
//     name : "TATA",
//     price : "10 Lac"
// }
function carVist(customer){
    console.log(`${customer.name} price only ${customer.price}`)
}
// carVist(thevlaueofcar)

// carVist({
//     name : "TATA",
//     price : "10 Lac"
// })

const myArray =[100,200,300]
function myArrayis(array){
    return array[1]
}
// console.log(myArrayis(myArray))
console.log(myArrayis([350,400,200]))