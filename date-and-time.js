//++++++++++++      DATE     ++++++++++++++

let myDate=new Date()
console.log(myDate.toString());    //o/p-  Sat Jun 15 2024 16:06:10 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString());  //o/p-  15/6/2024, 4:06:10 pm

console.log(myDate.toDateString());   //o/p-  Sat Jun 15 2024

console.log(typeof myDate);      //o/p-  object

//let myCreateDate=new Date(2023,0,23)
//let myCreateDate=new Date(2023,0,23,5,3)
let myCreateDate=new Date("2002-04-14")
console.log(myCreateDate.toLocaleString())

 
//  ++++++++++++++   TIME  ++++++++++++++

let myTimeStamp=Date.now()
console.log(myTimeStamp);      //1718448433835
console.log(myCreateDate.getTime());  //1018742400000
console.log(Date.now());   //1718448433838


let newDate=new Date()
console.log(newDate);   //2024-06-15T10:49:17.211Z

console.log(newDate.getMonth()+1);  //6

console.log(newDate.getDay() );  //6