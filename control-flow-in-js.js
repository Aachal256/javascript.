//if
const isUserloggedIn=true
if(true){
}

// <,>,<=,>=,==,!=,===,!==   (=== triple equals),(!== not equal value or type)
const temprature = 51
if(temprature===51){
    console.log("less than 50");
}
console.log("temperature is greater than 50");
/* less than 50
temperature is greater than 50
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//if,else
const temp=40;
if(temp==41){
    console.log("equal");

}else{
    console.log("not equal");
} 
console.log("Execute");
//o/p-  not equal
//Execute

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const bal=10000
if(bal>500) console.log("test1"),console.log("test2");
/* test1
test2
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//NESTED IF,ELSE
const balance=1000
if(balance<500){
    console.log("less tthan 500");
}else if(balance<700){
    console.log("less thann 700");
}else if(balance<900){
    console.log("less than 900");
}else{
    console.log("less than 1200");
}
//less than 1200
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// &&(and operator)  , ||(or operator)
const userloggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userloggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle||loggedInFromEmail){
    console.log("user logged in");
}
//user logged in

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// SWITCH CASE SYNTEX
/*
switch(key){
    case value:
        break;
    default:
        break;
}
*/
const month="march"
switch(month){
    case "jan":
        console.log("january");
        break;
    case "feb":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;
    default:
        console.log("exit");
        break;
}
//o/p-  march
