// Immediately Invoked Function Expressions (IIFE)
// To protect the code from global scope pollution & immediately executes the function



//--------------------------------------------------------------
// NAMED IIFE

// function biscuit(){
//     console.log("DB Connected")
// }
// biscuit()



//--------------------------------------------------------
// 2 IIFEs together

// Now to immediately invoke the function we use()
// Below is a NAMED IIFE function as it is named as biscuit
// (function biscuit(){
//     console.log("DB Connected")
// })();

// Wrap the function in () then do the execution call. Execution call means ().
//SYNTAX:
// (  () => {
//      console.log(`DB Connected Two`)
//  })()

//When 2 IIFEs are written together then we use the ; in the first IIFE function. As shown in above example



//-----------------------------------------------------------
//SIMPLE IIFE

// Below is SIMPLE IIFE function as it is not named
 (  (name) => {
    console.log(`DB Connected Two ${name}`)
})("Swati")