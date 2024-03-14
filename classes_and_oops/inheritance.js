class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const tea = new Teacher("tea", "tea@maatea.com", "357")
tea.logMe()

const yeti = new User("yeti")
yeti.logMe()

console.log(tea === yeti);
console.log(tea === Teacher);

console.log(tea instanceof Teacher);
console.log(tea instanceof User);
console.log(Teacher instanceof User);