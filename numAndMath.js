const score = 400
// console.log(score)

const balance = new Number(50)
// console.log(balance)

// console.log(balance.toString())
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))  //used in ecommerce platforms


const otherNumber = 56.2395
// console.log(otherNumber.toPrecision(3))
// console.log(otherNumber.toPrecision(2))
// console.log(otherNumber.toPrecision(1))

  
const hundreds = 10000000
// console.log(hundreds.toLocaleString())  //Acc to US system based
// console.log(hundreds.toLocaleString('en-IN'))  //Acc to Indian standard system based
 



//MATHS
// console.log(Math)
// console.log(Math.abs(-569))  // abs means absolute => It changes negative value to positive
// console.log(Math.round(5.2))
// console.log(Math.ceil(5.2)) //ceil => provides the high value of the given number
// console.log(Math.floor(5.2)) //floor => provides low value of the given number
// console.log(Math.min(4, 8, 6, 2, 7))
// console.log(Math.max(4, 7, 5, 3, 6))


console.log(Math.random())    //Will give any random value whenever it runs on the terminal and the value remains betw 0 and 1 always



console.log(Math.random()*10) 
console.log(Math.random()*10 + 1) 
console.log(Math.floor(Math.random()*10) + 1) 


const min = 10
const max = 20
//FORMULA
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
