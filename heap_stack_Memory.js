// Stack => used in PRIMITIVE
// Heap => used in NON-PRIMITIVE

let myBookName = "Do or Die"

let anotherName = myBookName
anotherName = "Dying is not the solution"

console.log(myBookName)
console.log(anotherName)


let userOne = {
    email: "swati@gmail.com",
    upi: "swati@ybl"
}

let userTwo = userOne
console.log(userOne)
console.log(userTwo)


userTwo.email = "jhanvi@gmail.com"
console.log(userOne)
console.log(userTwo)