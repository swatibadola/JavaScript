//OBJECT LITERALS

const mySym = Symbol("key1")


const User = {
    name: "Swati",
    "full name": "Swati Badola",
    // How to use Symbol as a key
    // mySym: "key1",//Incorrect way as its datatype would not be symbol
    [mySym]: "key1", //Correct syntax for symbol
    Age: 20,
    Location: "Delhi", 
    email: "swati@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday", "Friday"]
}

// How to access the object
// console.log(User.email)
// console.log(User["email"]) //More correct way to access the object
// console.log(User["full name"])

// console.log(User[mySym])
// console.log(typeof[mySym])

//How to change values
User.email = "swati12@bard.com"
// Object.freeze(User)
User.email = "swati236@outlook.com"
// console.log(User["email"])


//Functions
User.greeting = function(){
    // console.log("Good Morning cutie!!")
}

User.greetingTwo = function(){
    // console.log(`Hello VS Code, my name is ${this.name}`)  //To convert name to reference we use backticks with ${}
}


// console.log(User.greetingTwo())
// console.log(User.greeting)
// console.log(User.greeting())



//SINGLETON 

//There is no internal difference betw the below two statements
const bumbleUser = new Object()   //SINGLETON OBJECT
// const bumbleUser = {}         //NON SINGLETON OBJECT
// console.log(bumbleUser)


bumbleUser.id = "seenu678"
bumbleUser.name = "Seenu"
bumbleUser.isLoggedIn = false

// console.log(bumbleUser) 


//NESTED OBJECTS
const regularUser = {
    email: "urban@gmail.com",
    fullname: {
        userFullName: {
            firstname: "Swati",
            lastname: "Badola"
        }
    }
}

// console.log(regularUser)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userFullName)


//Optional Chaining (?.)

//Combining Objects
const obj1 = {1: "ab", 2: "bc", 3: "ac"}
const obj2 = {4: "cd", 5: "de", 6: "ce"}

// const main = {...obj1, ...obj2}
//Syntax is: Object.assign(target, source)
const main = Object.assign({}, obj1, obj2)  //target => {} , source => obj1, obj2
// console.log(main) 



console.log(bumbleUser)
console.log(Object.keys(bumbleUser))
console.log(Object.values(bumbleUser))
console.log(Object.entries(bumbleUser))

console.log(bumbleUser.hasOwnProperty('name'))  // Gives output in boolean
