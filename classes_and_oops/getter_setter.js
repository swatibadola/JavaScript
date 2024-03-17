//GETTER & SETTER
//get -> binds an object property to a function that will be called when that property is looked up.
// set -> binds an object property to a function to be called when there is an attempt to set that property.

class User{
    constructor(username, password, email){
        this.username = username,
        this.password = password,
        this.email = email
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value.toUpperCase()
    }

    get password(){
        return `${this._password}cutie`
    }
    set password(value){
        this._password = value.toUpperCase()
    }

}

const swati = new User("swati", "246sb", "swati@gmail.com");
console.log(swati.password);
console.log(swati.email);