//PRIMITIVE
// 7 types : String, Number, Boolean, null, undefined, symbol, bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false     
console.log(typeof(isLoggedIn))    // Boolean => typeof - boolean

const outsideTemp = null
console.log(typeof(outsideTemp))    // null => typeof - object


let userEmail 

//Symbols
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId) 
// INPUT VALUES of both the ids are SAME but their RETURN VALUES are DIFFERENT
console.log(id)
console.log(anotherId)

//bigInt
const bigNumber = 16541326498746546n
console.log(typeof(bigNumber))    // number => typeof - number
console.log(bigNumber)


//REFERENCE(NON PRIMITIVE)
//ARRAY

const fruits = ["Mango", "Apple", "Papaya"]

//OBJECTS
let myObj = {
    name: "Swati",
    age: 20
}

//FUNCTIONS
const myFunc = function(){
    console.log("Hello Swati");
}
console.log(typeof(myFunc))