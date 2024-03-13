const user = {
    username: "Swati",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this); // this as local variable will give the details of the user
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());

// console.log(this); // this as global variable will give {} as no current context is defined. Whereas, when used in console of any browser it would provide the details of the window by default.

// this -> an object

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this
}

// const userOne = User("Swati", 5, true)
// const userTwo = User("Boring", 10, false)

const userOne = new User("Swati", 5, true)
const userTwo = new User("Boring", 10, false)

// console.log(userOne); //Details of userTwo will overwrite userOne. Therefore, using 'new' keyword is necessary while defining objects to avoid overwriting issues.
console.log(userOne.constructor);


// Process after using 'new' as keyword:
// STEP-1 An empty object is created known as instance.
// STEP-2 Constructor function is callled due to this   'new' keyword.
// STEP-3 All arguments are injected to the 'new' keyword.
// STEP-4 finally, can be accessed in the function.