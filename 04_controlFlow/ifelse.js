if (true) {
    console.log("hii");    
}
if (false) {
    console.log("hello");
}
//&& , ||

const islogged = true
const payment = false

if (islogged && payment) {
    console.log("all done ")
}

if (islogged || payment) {
    console.log("all done ")
}

// <= , => , != , < , >

const temp = 45
if(temp > 40){
    console.log("temp high");
}

const temp1 = 38
if(temp1 < 50 ){
    const value = "fly"
    console.log(`${value} , temp`)
}

const temp2 = 50 
if (temp != 41) {
    console.log("temp very high")
}

if (2<5) {
    console.log("value low")
}
if(10>5){
    console.log("value high")
}

// ===, !== 

const temp5 = "45" 
if(temp5 === 45){
    console.log("temp high")
}

if(temp5 == 45){
    console.log("temp high")
}

if(temp5 !== 50){
    console.log("temp medium")
}
