// When you don't know how many paramters the user is going to give For Ex; in an ecommerce website(shopping app)

function calculateCartPrice(num1){
    return num1
}
// console.log(calculateCartPrice(200, 700))

// Now after passing many values O/P would be 200. So, to access all the values we use REST OPERATOR denoted by
// function functionname(...num1)
// Same syntax is used for SPREAD OPERATOR but it depends on the use case of the operators

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200, 700, 2000, 500))

// Sometimes function also written as below
// 200 and 700 are stored as val1 and val2 respc and the rest of the arguments are stored as array 
function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200, 700, 60, 2000, 500))


const user = {
    username: "Swati",
    price: "200"
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price for the product is ${anyObject.price}`)
}
handleObject(user)

// Above can also be written directly as 
// handleObject({
//     username: "Swati",
//     price: "500"
// })




