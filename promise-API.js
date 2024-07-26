let p1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1");
    },1000);    //p1 , 1 second me resolve ho rhi h
});

let p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 2");
    },2000);   // p2 , 2second me resolve ho rhi h
});

let p3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3");
    },3000);
});

p1.then((value)=>{
    console.log(value)
})

p2.then((value)=>{
    console.log(value)
})

p3.then((value)=>{
    console.log(value)
})
/*
o/p--value 1
value 2
value 3
*/
// jb thino value ko ak sath dekhna ho , bcoz value 1 jo ki 1 minut me , value2 ,2 minut me print ho rhi


let promise_all=promise.all([p1,p2,p3])
promise_all.then((value) =>{
    console.log(value)
})