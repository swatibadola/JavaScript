




//SYNTAX: 
//While passing value to the function
//  function functionname(parameters){


//  }

//While calling the function
// function functionname(arguments)

function sayMyName(){
    console.log("S")
    console.log("W")
    console.log("A")
    console.log("T")
    console.log("I")
}

// sayMyName()

function addTwoNumbers(num1, num2){
    console.log(num1 + num2)
}
// addTwoNumbers(2, 8)
// addTwoNumbers(2, "4")
// addTwoNumbers(2, "k")
// addTwoNumbers(2, null)

// const result = addTwoNumbers(5, 8)
// console.log("Result: ", result)  


function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}


//After result nothing is printed  ==>  O/P  - Result: 12
//Ex: function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     return result
//     console.log("Swati")
// }


//Before result console can be printed ==> O/P  - Result: 12, Swati
//Ex: function addTwoNumbers(num1, num2){
//     let result = num1 + num2
//     console.log("Swati")
//     return result
// }


const result = addTwoNumbers(5, 7)
// console.log("Result: ", result)

//Giving result as undefined beacuse : There is a difference between console.log() and a return statement. 
// Return statement => when a function is called the statement written in it will be executed.
// console.log() => It gives the log of information written in the console.


function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("Swati"))
// //If you don't pass any value it will give O/P as undefined
// console.log(loginUserMessage())



// Checking the statement with if else loop
// function loginUserMessage(username){
//     if(username === undefined){ //if(!username)
//         console.log("Please enter a username")
//         return //So that the below return cannot be executed
//     }
//     return `${username} just logged in`
// }


// If we give username in the parameter it will execute that, But if the argument is also given simultaneously then it will overwrite the parameter and execute the arguments instead
function loginUserMessage(username = "Riya"){
    if(username === undefined){ //if(!username)
        console.log("Please enter a username")
        return //So that the below return cannot be executed
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Swati")) //Overwrites Riya
// console.log(loginUserMessage())    //prints Riya


// console.log(loginUserMessage("Swati"))
// console.log(loginUserMessage())
