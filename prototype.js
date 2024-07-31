let myName="aachal"
console.log(myName.length);  //6

let myname="aachal     "
console.log(myname.length);  // 11  - its wrong output

console.log(myname.truelength); 

let myHeros=["thor","spiderman"]
let heroPower={
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aachal=function(){
    console.log('aachal is present in all object');
}
//heroPower.aachal()
//myHeros.aachal()  //o/p-  aachal is present in all object

//myHeros.heyAachal()

//********************* INHERITANCE ********************** */

const user={
    name:"chai",
    email:"chai@google.com"
}
const Teacher={
    makeVideo:true
}
const TeachingSupport={
    isAvailable:false
}
const TASupport={
    makeAssignment:"js assignment",
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=user
// modern syntex
Object.setPrototypeOf(TeachingSupport,Teacher)  // ye hi use krna hai

let anotherUserName="chaiAurCode"
String.prototype.truelength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is :${this.trim().length}`);
}
anotherUserName.truelength()
/*
o/p- chaiAurCode
undefined
True length is :11
*/
"aachal".truelength()
"anaya".truelength()
"icetea".truelength()
/*
o/p- aachal
undefined
True length is :6
anaya
undefined
True length is :5
icetea
undefined
True length is :6
*/