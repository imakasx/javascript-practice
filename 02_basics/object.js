const govtData ={
    id : "123abc",
    name : "akash",
    islogged : true
}
// console.log(Object.keys(govtData));
// console.log(Object.values(govtData));
// console.log(Object.entries(govtData));

const dataFile ={
    username:{
        fullname:{
            firstname: "akash",
            lastname : "vishwakarma"
        }
    }
}

// console.log(dataFile.username.fullname.firstname);

const val1 = {
    a:"1",
    b:"2"
}
const val2 ={
    c:"1",
    d:"2"
}
// const val3 ={val1 , val2}
// const val3 =Object.assign(val1,val2);
const val3 ={...val1, ...val2
}
console.log(val3);

console.log(govtData.hasOwnProperty('islogged'))
