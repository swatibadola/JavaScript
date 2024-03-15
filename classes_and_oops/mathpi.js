// Object.getOwnPropertyDescriptor() returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain).

// console.log(Math.PI);
// Math.PI = 4;
// console.log(Math.PI); 

const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);


// ---------------------------------------------------------------------------------------------------------------

// How to create an Object
// SYNTAX:  const myNewObject = Object.create(null)

const pastry = {
    name: "Black Forest",
    price: "300",
    isAvailable: true
}
// console.log(pastry);


// ---------------------------------------------------------------------------------------------------------------


// Now how to get descripter of a property

// console.log(Object.getOwnPropertyDescriptor(pastry));    //RESULT : undefined. Because pastry is an object & we can get the description of a property. So, we need to mention which property.


// console.log(Object.getOwnPropertyDescriptor(pastry, "price"));


// ---------------------------------------------------------------------------------------------------------------


// How to define properties of an Object

// console.log(Object.getOwnPropertyDescriptor(pastry, "name"));

// Object.defineProperty(pastry, 'name', {
//     writable: false,
//     configurable: false
// })
// console.log(Object.getOwnPropertyDescriptor(pastry, "name"));


// ---------------------------------------------------------------------------------------------------------------


// Running a loop on the object

// To iterate an object use Object.entries(pastry)

for (let [key, value] of Object.entries(pastry)) {
    if(typeof value !== 'function'){
        // console.log(`${key} : ${value}`);
    }
}


// ---------------------------------------------------------------------------------------------------------------


//If enumerable is set to false then that property will not be iterable in the loop. Hence that particular property willl not be printed. THIS STATEMENT IS ONLY TRUE FOR ENUMERABLE.
//BELOW IS THE EXAMPLE:

Object.defineProperty(pastry, 'name', {
    enumerable: false
})

for (let [key, value] of Object.entries(pastry)) {
    if(typeof value !== 'function'){
        console.log(`${key} : ${value}`);
    }
}