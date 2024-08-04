class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email;
        this.password=password

    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);

    }
    
}
const chai=new Teacher("chai","chai@gmail.com","123")
chai.addCourse()
//o/p- A new course was added by chai

chai.logMe()
const greenTea=new User("GreenTea")
greenTea.logMe()

console.log(chai==greenTea);  //false
console.log(chai==Teacher);  //false

console.log(chai instanceof User); //true
/*
USERNAME is chai
USERNAME is GreenTea
*/
