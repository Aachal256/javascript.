// FUNCTIONS WITH OBJECT..

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200,400,500))  //200 print first price 200 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//rest operator ,sprit operator = (...num1)  <-
function calculateCartprice(...num1){
    return num1
}
console.log(calculateCartprice(200,400,500))  //o/p-  [ 200, 400, 500 ] 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const user={
    username:"hitesh",
    prince:199
}
function handleobject(anyobject){
    console.log('username is $(anyobject.ussername) and price is $ {anyobject.price}');
}
// handleobject(user)  //o/p-username is $(anyobject.ussername) and price is $ {anyobject.price}
handleobject({
    username:"aachal",
    price:399
})
//o/p-  username is $(anyobject.ussername) and price is $ {anyobject.price}

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const myNewarray=[200,400,100,600]
function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(myNewarray));  //400

