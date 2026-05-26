//true value
// {},[], " ", '',"false","0",function(){}
const str = {}
if(str){
    console.log("string")
}

const str1 = []
if(str1){
    console.log("string")
}

const val1 = []
if(val1.length == 0 ){
    console.log("value1")
}

const str2 = "akash"
if(str2){
    console.log(`${str2}, string`)
}

const str3 = 'akash'
if(str3){
    console.log(`${str3}, string`)
}

//false value
// false , 0, -0, BigInt 0n , "", null

const str4 = 0
if(str4){
    console.log("string")
}

const str5 = null
if(str5){
    console.log("string5")
}

const str6 = ""
if(str6){
    console.log("string6")
}
