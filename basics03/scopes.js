// let a = 5
// const b = 6
// var c = 9


let a = 300

// {} are scopes => When {} are used with functions and loops

if(true){
    let a = 5
    const b = 6
    // console.log("Inner value: ", a)
    // var c = 9    //var is avoided as it goes out of the block scope
}

// console.log(a)
// console.log(b)
// console.log(c)



//NESTED SCOPES

function one(){
    const username = "Swati"

    function two(){
        const channel = "Code with Swati"
        // console.log(username)
    }
    // console.log(channel)
    two()
}
one() 


if(true){
    const username = "Swati"
    if(username === "Swati"){
        const channel = " On youtube!!"
        // console.log(...username, ...channel)
    }
    // console.log(channel)
}
// console.log(username) 



// In 2 ways function can be executed

// 1st WAY
// This will not give an error as the function is directly executed
console.log(addOne(6))

function addOne(num){
    return num + 1
}

// 2nd WAY
// Here error will occur if we execute console.log(addTwo(10)) before the initialization as the function is first stored in a variable and then it is executed. This is called HOISTING. Later on will be continued in detail(HOISTING)
console.log(addTwo(10))

const addTwo = function(num){
    return num + 2
}


