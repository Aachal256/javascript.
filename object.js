//const mySym=symbol("key1")
const jsUser={
    name:"aachal",
    age:22,
    gmail:"aachal@google.com",
    location:"bhopal",
    //[mySym]:"mykey1",
    isLoggedIn:false,
    lastLoginday:["monday","saturday"]

}
console.log(jsUser["name"]);
console.log(jsUser["age"]);
console.log(jsUser["gmail"]);
console.log(jsUser["location"]);
console.log(jsUser.mySym);

/* o/p- aachal
22
aachal@google.com
bhopal
*/

console.log(jsUser.gmail);
console.log(jsUser.name);
console.log(jsUser.age);
/*o/p-  aachal@google.com
aachal
22
*/




//Object.freeze(jsUser);
 /*
o/p-  {
  name: 'aachal',
  age: 22,
  gmail: 'aachal@google.com',
  location: 'bhopal'



jsUser.gmail="aachal@chatgpt.com"
object.freeze(jsUser);

console.log(jsUser.greeting());

jsUser.greeting=function(){
    console.log("hello js user");
}
console.log(jsUser.greeting());

*/
const tinderUser={}
tinderUser.id="1234abc",
tinderUser.name='aachal',
tinderUser.mail="chatGpt@gmail.com",
console.log(tinderUser);
//0/p-  { id: '1234abc', name: 'aachal', mail: 'chatGpt@gmail.com' }

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3={obj1,obj2}
//const obj3 = object.assign(obj1,obj2);
console.log(obj1,obj2);//{ id: '1234abc', name: 'aachal', mail: 'chatGpt@gmail.com' }

const obj4={...obj1, ...obj2}
console.log(obj4);/*{ '1': 'a', '2': 'b' } { '3': 'a', '4': 'b' }
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }*/


//console.log(object.keys(tinderUser)); // entries,key,value is very imp object..

console.log(tinderUser.hasOwnProperty('isLogged')); //o/p-  false


{
  {}
  {}
  {}
}   //it is JSON 