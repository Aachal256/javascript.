
class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){
        return `123`
    }
}

const aachal=new User("aachal")
//console.log(aachal.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email

    }
}
const iPhone=new Teacher("phone","i@phone.com")
console.log(iPhone.createId());
// jyse hi static krte hai o ,class ko bhi inherit nhi krne de rha and child ko bhi acces nhi kr rha