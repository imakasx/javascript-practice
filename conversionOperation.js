let x = 10;
console.log(typeof x);
let valueinnumber = String(x)
console.log(typeof valueinnumber);
// 10 -> string

let y = "10abc";
console.log(typeof y);
let valueinnumberx = Number(y);
console.log(typeof valueinnumberx);
// 10abc -> number

let isLoggedIn = 1;
let isvalueof = Boolean(isLoggedIn);
console.log(isvalueof);

// 1 -> true
// 0 -> false

//****operation****//

let str1 = "hello";
let str2 = "akash";
let str3 = str1 + str2;
console.log(str3);

console.log("1" + 4);
console.log("1" + 4 + 2);
console.log(4 + 2 + "1");
console.log("1" + (4+2)); 

let count = 500;
//count++;
++count;
console.log(count);