const user ={
    username: "aachal",
    loginCount: 8,
    signdIn: true,

    getUserDetails :function(){
        //console.log("Got user details from database");
        console.log('username: ${this.username}');
        console.log(this);

    }
}
console.log(user.username);
console.log(user.getUserDetails());
/*
o/p-- aachal

//Got user details from database       

username: ${this.username}
{
  username: 'aachal',
  loginCount: 8,
  signdIn: true,
  getUserDetails: [Function: getUserDetails]
}
undefined

*/

const user2 ={
    username: "aachal",
    loginCount: 8,
    signdIn: true,

    getUserDetails :function(){
        //console.log("Got user details from database");
        //console.log('username: ${this.username}');
        console.log(this);

    }
}
console.log(user.username);

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn
    return this
}

const userOne = User("aachal",12,true)
console.log(userOne);
/*
o/p-  <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],     
  setImmediate: [Function: setImmediate] {        
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],       
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],     
  structuredClone: [Function: structuredClone],   
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: value],
  navigator: [Getter],
  crypto: [Getter],
  username: 'aachal',
  loginCount: 12,
  isLoggedIn: true
}
  */


const userone = User("aachal",12,true)
const usertwo = User("chai aur code",1002,false)
console.log(userOne.constructor); 
//o/p-  [Function: Object]
//console.log(usertwo);
/*
o/p-    username: 'chai aur code',
  loginCount: 1002,
  
  isLoggedIn: false

  */
