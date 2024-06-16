//*************    ARRAY  ***************/

let Arrr=[2,3,4,5,6]
console.log(Arrr);     //[ 2, 3, 4, 5, 6 ]
console.log(typeof Arrr);   //object
console.log(Arrr[1]);  //3

//#########################################################################

//+++++++++  ARRAY METHOD    ++++++++++++++

//1] PUSH
Arrr.push(10)
console.log(Arrr);    //[ 2, 3, 4, 5, 6, 10 ] ADD VALUE IN LAST

//2] POP
Arrr.pop()
console.log(Arrr);    //[ 2, 3, 4, 5, 6 ] DELETE VALUE IN LAST

//3] UNSHIFT
Arrr.unshift(8)
console.log(Arrr);   //[ 8, 2, 3, 4, 5, 6 ] ADD VALUE IN FIRST

//4] SHIFT
Arrr.shift()
console.log(Arrr);  //[ 2, 3, 4, 5, 6 ] DELETE VALUE IN FIRST

//5] INCLUDES
console.log(Arrr.includes(7));   //false  O/P RETURN TRUE OR FALSE

//6] INDEXOF
console.log(Arrr.indexOf(3));   //1 FIND INDEX NUMBER

//7] JOIN
console.log(Arrr.join());   //2,3,4,5,6  saparet in comma ,

//8] SLICE,SPLICE
console.log("AAchal",Arrr);   //AAchal [ 2, 3, 4, 5, 6 ]

console.log("Anaya",Arrr);   //Anaya [ 2, 3, 4, 5, 6 ]

console.log(Arrr.slice(1,3));   //[ 3, 4 ]

console.log(Arrr.splice(1,3));   //[ 3, 4, 5 

//###################################################################################################

//*********                STRING ARRAY     ***********/

const marvel_heros=["thor","ironman","spiderman"]
const dc_heros=["spiderman","flash","batman"]
marvel_heros.push(dc_heros);
console.log(marvel_heros);   //[ 'thor', 'ironman', 'spiderman', [ 'spiderman', 'flash', 'batman' ] ]

marvel_heros.concat(dc_heros)
console.log(marvel_heros);  //[ 'thor', 'ironman', 'spiderman', [ 'spiderman', 'flash', 'batman' ] ]

const all_new_heros=[...marvel_heros, ...dc_heros]
console.log(all_new_heros);
/*o/p-[
  'thor',
  'ironman',
  'spiderman',
  [ 'spiderman', 'flash', 'batman' ],
  'spiderman',

  'flash',
  'batman'
]
  */

//###########################################################################################
//---------------------isArrray,rom,of very imp methods.

let score1=100;
let score2=200;
let score3=300;
console.log(Arrr.of(score1,score2,score3));   //[100,200,300]






