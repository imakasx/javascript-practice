const myNum = [1,2,3,4,5,6,7,8,9,10]
// const myNums = myNum.map((i)=> i+10)
// console.log(myNums);

//use scope

// const myNums = myNum.map((n)=>{return n+10})
// console.log(myNums);

const myNums = myNum    
            .map((n) => n*10)
            .map((n) => n+1)
            .filter((n) => n>=40)
            
console .log(myNums)