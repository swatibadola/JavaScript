//ARRAY PROPERTIES => Resizable, are not associative arrays, are zero indexed, copy operations create shallow copies

const myArr = [2, 5, 4, 0, 1]
const fruits = ["apple", "mango", "orange"]

const myArr2 = new Array(2, 4, 0, 1)
// console.log(myArr2[2])

//Array Methods => PUSH, POP, UNSHIFT, SHIFT, JOIN, SLICE, SPLICE

// myArr.push(6)
// myArr2.push(11)
// myArr.pop(5)

// myArr.unshift(8)   // Unshift => Adds the element to the beginning of the array
// myArr2.shift()    // Shift => Removes the first element from the array

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(6))

// const newArr = myArr.join()


//SLICE => Returns new array start to end ( end not included )
console.log("A", myArr)
const myN1 = myArr.slice(1, 3)
console.log(myN1)


//SPLICE => It manipulates the original array
console.log("B", myArr)
const myN2 = myArr.splice(1, 3)
console.log(myN2)
console.log("C", myArr)



// console.log(myArr)
// console.log(newArr)
// console.log(myArr2)

