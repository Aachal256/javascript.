// for of loop

//["", "", ""]
const arr=[1,2,3,4,5]
//for(const iterator of object){
for(const num of arr){
    console.log(num);
}
/*
1
2
3
4
5
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const greetings="hello world"
for(const greet of greetings){
    console.log('Each char is',greet);
}
/*
Each char is h
Each char is e
Each char is l
Each char is l
Each char is o
Each char is
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ */
// map hold key pair values, map is object

// +++++++++++++++++++++++   MAP   +++++++++++++++++++++++++++++
const map=new Map()
map.set('IN',"india")
map.set('USA',"united states of america")
map.set('Fr',"france")
map.set('IN',"india")
console.log(map)
/*
'IN' => 'india',
  'USA' => 'united states of america',
  'Fr' => 'france'
}
  */
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


for(const key of map){
    console.log(key);
}
/*
[ 'IN', 'india' ]
[ 'USA', 'united states of america' ]
[ 'Fr', 'france' ]
*/

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
for(const[key,value] of map){
    console.log(key, ':-',value)
}
/*
IN :- india
USA :- united states of america
Fr :- france
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
const myObject={
    'game1':'NFS',
    'game2':'spiderman',
}
for(const[key,value] of myObject){
    console.log(key, ':-',value)
}
//o/p-   TypeError: myObject is not iterable
*/
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const myobject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:'swit by apple'
}
for (const key in myobject){
    //console.log(key);
     

/*
js
cpp
rb
swift
*/

console.log(key, 'shortcut is for ' , myobject[key]);
}
/*
js shortcut is for  javascript
cpp shortcut is for  c++
rb shortcut is for  ruby
swift shortcut is for  swit by apple
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//*****************  FOR IN LOOP  ****************************** */
const programming=["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(key);
}
/*
0
1
2
3
4
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//***************** FOReACH LOOP  ************************************ */
const coding=["js","c++","ruby","python","java"]
coding.forEach(function(val){
    console.log(val);
})
/*
js
c++
ruby
python
java
*/

/****************    USING ARROW FUNCTION IN FOREACH LOOP  ********************** */
coding.forEach((item)=>{
    console.log(item);
})
/*
js
c++
ruby
python
java
*/

function printMe(item){
    console.log(item);
}
coding.forEach(printMe)   
/*
js
c++
ruby
python
java
*/


coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})
/*
js 0 [ 'js', 'c++', 'ruby', 'python', 'java' ]        
c++ 1 [ 'js', 'c++', 'ruby', 'python', 'java' ]       
ruby 2 [ 'js', 'c++', 'ruby', 'python', 'java' ]      
python 3 [ 'js', 'c++', 'ruby', 'python', 'java' ]    
java 4 [ 'js', 'c++', 'ruby', 'python', 'java' ]   
*/


const myCoding=[
    {
    languageName:"javascript",
    languageFile:"java",
},
{
    languageName:"python",
    languagefile:"py",
},
]
myCoding.forEach(()=>{
    console.log(item.languageName);
})

















