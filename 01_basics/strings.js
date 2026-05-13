const name = "akash";
const rollNo = 45;

console.log(`My name is ${name} 
    and My roll number is ${rollNo}`);

const newName =new String('Rahul');

console.log(newName);
console.log(newName.__proto__);

console.log(newName.length);
console.log(newName.toUpperCase());

console.log(newName.charAt(2));
console.log(newName.indexOf('h'));

const newString = newName.substring(0 , 3);
console.log(newString);

const newStringq = newName.slice(-1 , 4);
console.log(newStringq);

const newStringOne = "  zoy  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.linkedin.com/in/akash-vishwakarma-b9974532b/";
console.log(url.replace('b9', 'b5'));
console.log(url.includes('rahul'));

console.log(url.includes('akash'));

console.log(url.split('.'));
