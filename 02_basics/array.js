// const myArr = [1,2,3,4]
const myHeros =["Ironman" , "spiderman" , "Thor"];
const dcHeros =["Flash" , "Batman", "superman"];
// myHeros.push(dcHeros);
// console.log(myHeros);

const another_array =[1,2,3,[4,5,6],7,3,[6,5,7,[4,2,2,2,5]]];
const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("akash"));
console.log(Array.from("akash"))

let score1=100;
let score2=200;
let score3=300;
let score4=400;
console.log(Array.of(score1,score2,score3,score4));
