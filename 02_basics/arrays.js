const newArray = [1,2,3,4,5];
const myHero = ["Tom" , "venom" , "ironman"];
// console.log(newArray[5]);
// console.log(myHero);

// newArray.push(7);
// newArray.pop();

// newArray.unshift(5);
// console.log(newArray);

// console.log(newArray.includes(3));
// console.log(newArray.indexOf(2));

//slice, splice

console.log("A" , newArray);
const my1 = newArray.slice(1,3);
console.log(my1)

console.log("b" , newArray);
const my2 = newArray.splice(1,3);
console.log("C" , newArray);
console.log(my2);