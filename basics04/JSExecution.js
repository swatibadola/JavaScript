// JS CODE EXECUTION CONTEXT
// STEP1:   {}    =>  Global Execution Context - Allocated in THIS operator
//                =>  Function Execution Context
//                =>  Eval Execution Context
//                => Runs in 2 phases  1) Memory Creation Phase(Declared variables are given some space)
//                                     2) Execution Phase

let val1 = 5
let val2 = 8
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(15, 10)

// Execution Process of the above code:
//STEP1:  Global Execution => this operator
//STEP2:  Memory Phase 
// Memory Phase(Cycle 1): Line1 =>   val1 - undefined 
//               Line2 =>   val2 - undefined
//               Line3 to Line6 =>   addNum - definition
//               Line7 => result1 - undefined
//               Line8 => result2 - undefined
//Execution Phase(Cycle 2):Line1 =>   val1 - 5
//               Line2 =>   val2 - 8
//               Line3 to Line6 =>   Nothing to be executed
//               Line7 => result1 - addNum - new variable enviornment + execution thread
//                                  addNum => As many times we cross through the addNum Line its Memory phase and Execution phase are to be done
//                                  addNum  => Memory Phase: val1 - undefined
//                                                           val2 - undefined
//                                                           total - undefined
//                                          => Execution Context: val1 - 5
//                                                                val2 - 8
//                                                                total - 13
//                                  The above addNum Execution is deleted after it is done.
//              Line8 => result2 - addNum - again the above process done in Line7 is repeated


//------------------------------------------------------------------------------------------------------------------------------------------------------------


// CALL STACK
// Step1: Global Execution
// LIFO Concept used


function one(){
    console.log("one")
    two()
}
function two(){
    console.log("two")
    three()
}
function three(){
    console.log("three")
}

one()
two()
three()


