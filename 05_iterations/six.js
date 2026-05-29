const lang =["js","py","cpp","java"]
//create variable
// const neW = lang.forEach( (item) => {
//     // console.log(item)
// })
// console.log(neW);

const myNums = [1,2,3,4,5,6,7,8,9,10]
// const nums = myNums.filter( (num) => num < 4)
// console.log(nums)       

// {}<- using  'return' keyword

// const nums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(nums)       

//this situation using if/else loop
const newNums = []
// myNums.forEach((num)=>{
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

let Book = books.filter( (bs) => bs.genre === 'Fiction' )
Book = books.filter( (bs) => { return bs.publish >= 2000} )
Book = books.filter( (bs) => { return bs.publish <= 2000 && bs.genre == "History"} )
Book = books.filter((bs) => {
    return bs.title === 'Book Four'
})

Book = books.filter((bs) => {
    return bs.edition <= 2000
})

Book = books.filter ((bs)=> {
    return bs.title === 'Book Four' && bs.edition <= 2020
})

console.log(Book);