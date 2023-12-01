// datatypes of the operands should be same


//SAME DATATYPES
// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)


//DIFF DATATYPES
// console.log("2">1)
// console.log("02">1)



//AVOID THESE TYPES OF COMPARISONS
// console.log(null > 0)  //false
// console.log(null == 0) //false
// console.log(null >= 0) //true
//The reason is that an equality check == and comparison > < >= <= work differently. Comparisons convert null to a number, treating it as 0. That's why null >= 0 is true and null > 0 is false. 
// console.log(undefined > 0)  
// console.log(undefined == 0) 
// console.log(undefined > 0)



//STRICT CHECK - Checks the value strictly by also checking its datatype
//===
console.log("5" === 5)
console.log("5" == 5)
console.log("5" == 5)

