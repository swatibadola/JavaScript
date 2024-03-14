class User{
    constructor(username){
        this.username = username
    }

    logIn(){
        console.log(`USERNAME is ${this.username}`);
    }
    // Static properties cannot be directly accessed on instances of the class. Instead, they're accessed on the class itself.
    static createId(){
        return "159"
    }
}

const swati = new User("Swati")
// console.log(swati.createId());


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const narzo = new Teacher("Narzo", "narzo@meta.com")
narzo.logIn()
console.log(narzo.createId());

