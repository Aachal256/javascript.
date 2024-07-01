// for loop

//for (let index = 0; index <= 10; index++) {
   // const element =  index;
   // console.log(index);

/*
0
1
2
3
4
5
6
7
8
9
10
*/
//console.log(index); // ReferenceError: index is not defined

for (let index = 0; index <= 10; index++) {
    const element=index;
    if(element==5){
        console.log("5 is best number");
    }
    console.log(element);
}
/*
0
1
2
3
4
5 is best number
5
6
7
8
9
10
*/

for (let i=0;i<=10;i++){
    console.log("outer loop value: {i}"); 
    for(let j=0; j<=10; j++){
        //console.log("Inner loop value ${j} and inner loop ${i}");
        console.log(i + '*' + j + '=' + i*j);
    }
}
/*
outer loop value: {i}
0*0=0
0*1=0
0*2=0
0*3=0
0*4=0
0*5=0
0*6=0
0*7=0
0*8=0
0*9=0
0*10=0
outer loop value: {i}
1*0=0
1*1=1
1*2=2
1*3=3
1*4=4
1*5=5
1*6=6
1*7=7
1*8=8
1*9=9
1*10=10
outer loop value: {i}
2*0=0
2*1=2
2*2=4
2*3=6
2*4=8
2*5=10
2*6=12
2*7=14
2*8=16
2*9=18
2*10=20
outer loop value: {i}
3*0=0
3*1=3
3*2=6
3*3=9
3*4=12
3*5=15
3*6=18
3*7=21
3*8=24
3*9=27
3*10=30
outer loop value: {i}
4*0=0
4*1=4
4*2=8
4*3=12
4*4=16
4*5=20
4*6=24
4*7=28
4*8=32
4*9=36
4*10=40
outer loop value: {i}
5*0=0
5*1=5
5*2=10
5*3=15
5*4=20
5*5=25
5*6=30
5*7=35
5*8=40
5*9=45
5*10=50
outer loop value: {i}
6*0=0
6*1=6
6*2=12
6*3=18
6*4=24
6*5=30
6*6=36
6*7=42
6*8=48
6*9=54
6*10=60
outer loop value: {i}
7*0=0
7*1=7
7*2=14
7*3=21
7*4=28
7*5=35
7*6=42
7*7=49
7*8=56
7*9=63
7*10=70
outer loop value: {i}
8*0=0
8*1=8
8*2=16
8*3=24
8*4=32
8*5=40
8*6=48
8*7=56
8*8=64
8*9=72
8*10=80
outer loop value: {i}
9*0=0
9*1=9
9*2=18
9*3=27
9*4=36
9*5=45
9*6=54
9*7=63
9*8=72
9*9=81
9*10=90
outer loop value: {i}
10*0=0
10*1=10
10*2=20
10*3=30
10*4=40
10*5=50
10*6=60
10*7=70
10*8=80
10*9=90
10*10=100
*/
//****************************************************************** */

//++++++++++++++ ARRAY +++++++++++++++
let myArray=["flash","batman","superman"]
console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}
/*o/p-  
3
flash
batman
superman
*/

//******************************************************************** */


//+++++++++++++++++ BREAK AND CONTINUE  +++++++++++++++
for (let index = 0; index <= 20; index++) {
    if(index==5){
        console.log('Detected 5');
        break;
    }
    console.log('value of i is ${index}');
}
/*
value of i is ${index}        
value of i is ${index}        
value of i is ${index}        
value of i is ${index}        
value of i is ${index}        
Detected 5
*/

for (let index = 0; index <= 20; index++) {
    if(index==5){
        console.log('Detected 5');
        continue;
    }
    console.log('value of i is ${index}');
}