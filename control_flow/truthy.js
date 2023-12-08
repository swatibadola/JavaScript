//When you assume the string has a true value => truthy
const username = "Swati"
if(username){
    // console.log("Got user name")
}
else{
    // console.log("Don't have a user name")
}


//--------------------------------------------------------------------


//When nothing is given in the string it is considered as false statement
const username1 = ""
if(username1){
    // console.log("Got user name")
}
else{
    // console.log("Don't have a user name")
}


//--------------------------------------------------------------------


//When an empty array is given it is considered as a true statement
const username2 = [1, 2]
if(username2){
    // console.log("Got user name")
}
else{
    // console.log("Don't have a user name")
}


//--------------------------------------------------------------------


// falsy values:
// false, 0, -0, BigInt - 0n, "", null, undefined, NaN

//truthy values:
// "0", 'false', " ", [], {}, function(){}


//------------------------------------------------------------------


//How to check arrays
if(username2.length === 0){
    console.log("Array is empty")
}
else{
    console.log("Array is not empty")
}


//------------------------------------------------------------------


//How to check objects
const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty")
}
else{
    console.log("Object is not empty")
}