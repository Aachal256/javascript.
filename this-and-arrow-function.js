const user={
    username:"aachal",
    price:999,

    welcomeMessage :function(){
        console.log('${this.username} , welcome to website');
        console.log(this);
    }
}
//************this current context ko refer krta hai..

//user.welcomeMessage()  //o/p- ${} , welcome to website
//user.username="sam"
//user.welcomeMessage()

//************************************************************** */
/*
function chai(){
    let username="aachal"
    console.log(this);
    console.log(this.username);
}
chai()  //undefined
*/
//************************************************************** */
//function ko arrow function ke throw  declare krte hai..
const chai= () => {  // declare arrow function
    let username="anaya"
    console.log(this.username);

}
chai()   //o/p =undefined

//************************************************************ */
//explicit
const addtwo=(num1,num2) =>  (num1+num2) //parenthesis me return keyword nhi likhna pdega

console.log(addtwo(3,4))  // 7

//**************************************************************** */
const addTwo=(num1,num2) =>  ({username:"aachal"})
console.log(addTwo(4,4))  //o/p- { username: 'aachal' }

