//++++++++++++++   NUMBERS    ++++++++++++++
const num=55;
console.log(typeof num); //O/P- number

const balance=new Number(699)
console.log(balance);   //O/P- [Number: 699]

const hundreds=100000
console.log(hundreds.toLocaleString('en-IN'));  //O/P-  1,00,000

const otherNumber=123.8966
console.log(otherNumber.toPrecision(4));    //O/P-  123.90




// ++++++++++++++   MATHS   +++++++++++++++
console.log(Math);
console.log(Math.abs(-4));  //negative to positive o/p 4

console.log(Math.round(4.6));  //o/p- 5

console.log(Math.ceil(4.2));     //o/p- 5

console.log(Math.floor(4.9));    //o/p- 4

console.log(Math.min(4,3,6,8));    //o/p- 3

console.log(Math.max(4,6,3,8));     //o/p- 8

console.log(Math.random());        //o/p- 0.9244130291127715

console.log(Math.random()*10);      //o/p- 6.564637929950865

console.log(Math.random()*10 + 1);       //o/p- 4.926055581136576




