const lang =["js","py","cpp","java"]

// lang.forEach(function (lng){
//     console.log(lng);
// })

// lang.forEach((lng)=>{
//     console.log(lng);
// })

// function lng(item) {
//     console.log(item);    
// }

// lang.forEach(lng)

// lang.forEach((item, array, index)=>{
//     console.log(item, array, index)
// })

// [{},{},{}]

const myCoding = [
    {
        languageName :"Java",
        languageFileName : "java"
    },
    {
        languageName :"Python",
        languageFileName : "py"
    },
    {
        languageName :"javascript",
        languageFileName : "js"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);
})
