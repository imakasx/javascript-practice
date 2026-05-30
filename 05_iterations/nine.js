const n = [1,2,3,4]
// const total = n.reduce((acc , curval)=>{
//     console.log(`${acc} is val ${curval}`);
    
//     return acc + curval;
// } , 0)
// console.log(total)

// const total = n.reduce((acc , curval) =>  acc + curval,0)
// console.log(total)

const superHeros =[
    {
        name : "ironman",
        priority : 1
    },
    {
        name : "superman",
        priority : 2
    },
    {
        name : "homelender",
        priority : 3
    },
    {
        name : "willim",
        priority : 4
    },
    {
        name : "spiderman",
        priority : 5
    },
]

const totalpriority = superHeros.reduce((acc , name)=> name.priority + acc , 0)
console.log(totalpriority)