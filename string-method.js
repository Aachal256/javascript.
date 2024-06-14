//STRING METHOD..         ....1]indexof

const gameName=new String('aachalth')
console.log(gameName.indexOf('t'));
//  o/p-  6


//  2]charAt
console.log(gameName.charAt(2));   
//o/p-   c


// 3]length
console.log(gameName.length);   
//o/p-  8


// 4]toupperCase
console.log(gameName.toUpperCase());   
// o/p-  AACHALTH

// 5]split
console.log(gameName.split('-')); 
//o/p-  [ 'aachalth' ]

//6]concate
const name="aachal";
const repo=60;
//console.log('hello my nane is '${name} and my repo count ${repo}');
//o/p-  hello my nane is aachal and my repo count 60


//7] startsWith()
const str1='saturday night';
console.log(str1.startsWith('sat'));
console.log(str1.startsWith('sat',90));
// o/p-  true  false

//8] endsWith
const str2='saturday night';
console.log(str1.endsWith('night'));
console.log(str1.endsWith('sat',90));
// o/p--    true  false


//9] slice
console.log(gameName.slice(1,4));
//o/p-  ach

//10] replace $ replaceAll
const update=gameName.replace("anamika","anaya");
console.log(update);
console.log(gameName);