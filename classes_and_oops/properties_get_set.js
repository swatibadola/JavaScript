//HOW GET SET WERE PREVIOUSLY USED 


//FUNCTION BASED GETTERS & SETTERS
function User(email, password){
    this._email = email,
    this._password = password

    Object.defineProperty(this, 'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}


const pastry = new User("swati@gmail.com", "246abc")
console.log(pastry.email);
console.log(pastry.password);


// ------------------------------------------------------------------------
