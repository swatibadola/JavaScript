//THIS FUNCTION

// THIS keyword refers to current context. Used to access all the variables in the given scope.

const user = {
    username: "Swati",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to our website`)
        // console.log(this)
    }
}
// user.welcomeMessage()

// user.username = "Nandu"
// user.welcomeMessage()


//When we are in node enviornment the context refers to the global scope and gives an empty object when only the below statement is executed.
// console.log(this)


// When THIS keyword in the below function is executed gives some information regarding global object in a node enviornment
// function biscuit(){
//     console.log(this)
// }
// biscuit()


// Adding some variable and then executing 0 the THIS keyword inside the function will give the O/P undefined
// function biscuit(){
//     let username = "Swati"
//     console.log(this.username)
// }
// biscuit()


const biscuit = () => {
    let username = "Swati"
    // console.log(this)
}
biscuit()

//----------------------------------------------------------------

//ARROW FUNCTION
//SYNTAX: () => {} 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return form of arrow function => Remove the {} from the basic syntax
// When {} are used return is written 

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => (num1 + num2)
const addTwo = (num1, num2) => ({username: "swati"})

console.log(addTwo(5, 7))