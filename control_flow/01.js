

const temp = 41

if(temp === 41){
    // console.log("less than 50")
}
else{
    // console.log("temp is greater than 50")
}

const score = 500
if(score > 200){
    let power = "typing"
    // console.log(`User power is ${power}`)
}


// const balance = 1000

// if(balance < 500){
//     console.log("less than")
// }
// else if(balance < 800){
//     console.log("less than 800")
// }
// else if(balance < 5000){
//     console.log("less than 5000")
// }
// else if(balance < 8000){
//     console.log("less than 8000")
// }
// else{
//     console.log("less than 15000")
// }



const userLoggedIn = true
const debitcard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitcard){
    console.log("Access to the courses")
}
if(loggedInFromEmail || loggedInFromGoogle){
    console.log("You are signed in")
}