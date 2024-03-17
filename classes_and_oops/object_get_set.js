
//OBJECT BASED GETTERS & SETTERS


const User = {
    _email : "sed@google.com",
    _password: "hunbf",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

//Here we use FACTORY FUNCTION -> This function creates an object and returns it. Similar to constructor functions, but it does not use 'this' keyword or 'new' keyword to create a JavaScript Object.

const tea = Object.create(User)
console.log(tea.email);