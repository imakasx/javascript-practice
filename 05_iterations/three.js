// for of
const arr =[1,2,3,4,5]
for (const val of arr) {
    // console.log(val);    
}

const name = "akash"
for (const user of name) {
    // console.log(`user is : ${user}`);   
}

const  map = new Map();
map.set('IN', "India")
map.set('Fr', "France")
map.set('USA', "United states of America")
map.set('Fr', "france")
// console.log(map);   

for (const val of map) {
    // console.log(val);   
}
for (const [key,val] of map) {
    console.log(key, ":-" ,val);   
}

//for of not work in object case
const lang={
    first : "Hindi",
    second : "English"
}
for (const [key, val] of lang) {
    console.log(key , ':-' , val)
}

