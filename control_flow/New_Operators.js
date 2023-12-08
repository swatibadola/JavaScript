// NULLISH COALESCING OPERATOR (??) : null undefined
// Returns the left hand side of the operand if the right hand side contains a falsy, null, or undefined values and vice versa.
// This operator does a SAFETY CHECK

let val1
// val1 = 5 ?? 10
// val1 = null ?? 15
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 25    //The first value is assigned => Here 10

// console.log(val1)


//----------------------------------------------------------------------


//TERNARY OPERATOR
//Syntax       condition ? true : false

const icecreamPrice = 60
icecreamPrice >= 50 ? console.log("More than 50") : console.log("Less than 50")