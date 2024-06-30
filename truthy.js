const userEmail="h@hitesh.ai"
if(userEmail){
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}
//o/p-  Got user email

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// falsy values =>   false, 0, -0, bigInt 0n, "", null, undefined, NaN
// truthy values =>  true, 1, "0", "false", " ", [], {}, function(){}

if(userEmail.length===0){
    console.log("Array is empty");
}

const emptyObj={}
if(Object.keys(emptyObj)){
    console.log("object is empty");
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Nullish Coalescing Operator(??): null undefined
let val1;
val1=5 ?? 10 
console.log(val1);
//o/p- 5

val2=null ?? 10
console.log(val2);  //10

val3=undefined ?? 33
console.log(val3);// 33

val=null ?? 10 ?? 20
console.log(val); // 10

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Ternary operator 
//condition ? true : false
const iceteaPrice = 100
iceteaPrice>=80 ? console.log("less than 80") : console.log("more than 80");
//o/p-  less than 80
