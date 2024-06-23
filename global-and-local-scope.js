let a=10
const b=20
var c=30
console.log(a);
console.log(b);
console.log(c);

// {} is a scope in every programming language.
//var k=300
let x=300
if(true){
     let x=10
     const y=20
     console.log("INNER:",x);  //INNER: 10
     
}
    //console.log(x);  //ReferenceError: x is not defined 
    //console.log(y);    //ReferenceError: y is not defined
    //console.log(z);   //o/p-  30
    console.log(x);   //300

function one(){
     const username="aachal"
     function two(){
          const website="youtube"
          console.log(username);
     }
    // console.log(website);
     two()
}
//one()

if(true){
     const username="aachal"
     if(username==="aachal"){
          const website="youtube"
          //console.log(username+website);   //o/p-  aachalyoutube
     }
     //console.log(website);
}
//console.log(username);



//+++++++++++++++++++++ INTRESTING  +++++++++++++++++++++++++++++++++++
function addone(num){
     return num+1
}
addtwo(5)
const addtwo=function(num){
     return num+2
}
//ReferenceError: Cannot access 'addtwo' before initialization