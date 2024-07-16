// ************** PPROMISE ********************
//PROMISES ARE USED TO SIMPLIFY MANAGING MULTIPLE ASYNCHRNNOUS OPERATIONS, PREVENTING CALLBACK HELL UNMANAGEABLE CODE

const promiseOne=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network

    setTimeout(function(){
        console.log('Async task is complete');
    },1000)

})
promiseOne.then(function(){
    console.log("promise consumed");
})
//o/p-  Async task is complete


//promise is a object
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const PromiseOne=new Promise(function(resolve,reject){
    //do an async task
    //DB calls,cryptography,network
    
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)

})
PromiseOne.then(function(){
    console.log("promise consumed");
})
/*o/p-  Async task is complete
promise consumed
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    },1000)

        
    }).then(function(){
        console.log("Async 2 resolved");
    })
/*
o/p- Async task 2
Async 2 resolved
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai", email:"chai@example.com"})
    },1000)
    })

promiseThree.then(function(user){
    console.log(user);
})
/*
o/p- 
 { username: 'chai', email: 'chai@example.com' }
  */

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false //ydi yha true krte to o/p-ERROR: something went wrong
        if(!error){
            resolve({username:"aachal",password:"123"})

        }else{
            reject('ERROR: something went wrong')
        }
    },1000)
    })
promiseFour.then((user)=>{
    console.log(user);
    return user.username

}).then((username)=>{

console.log(username);
}).catch(function(error){
    console.log(error);
})
//aachal


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true 
        if(!error){
            resolve({username:"aachal",password:"123"})

        }else{
            reject('ERROR: JS went wrong')
        }
    },1000)
 
})
async function consumePromiseFive(){
    try{
        const response=await promiseFive
        console.log(response);
    }catch (error){
        console.log(error);
    }
}
consumePromiseFive()
/*o/p-  
{ username: 'aachal', password: '123' }       
aachal
ERROR: JS went wrong
*/

// = async means kuch response aane wala hai..
// async makes a function return a promise
// await makes a function wait for a promise.

