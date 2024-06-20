function myName(){
    console.log("A");
    console.log("A");
    console.log("C");
    console.log("H");
    console.log("A");
    console.log("L");
}
myName()  
/*O/P-  A
A
C
H
A
L
*/
//************************************************************************ */
function addTwonumbers(number1,number2){  //parameters
    console.log(number1+number2);
}
addTwonumbers(3,4);  //arguments  // 7
//********************************************************************** */

//after result no one print
function addtwo(num1,num2){
    let result=num1+num2
    console.log("Aachal");
    return result
}
const result=addtwo(10,10)
console.log("Result:",result);
/*o/p- Aachal
Result: 20
*/


//************************************************************************* */
function loginusermessage(username){
    return '${username} just logged in'
}
//console.log(loginusermessage("Anaya"))
console.log(loginusermessage())  //${username} just logged in

//********************************************************************* */

function loginuserMessage(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return '${username} just logged in'
}
console.log(loginuserMessage()) 
/*
o/p-  please enter a username
undefined*/
