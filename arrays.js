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
// console.log("A", myArr)
const myN1 = myArr.slice(1, 3)
// console.log(myN1)


//SPLICE => It manipulates the original array
// console.log("B", myArr)
const myN2 = myArr.splice(1, 3)
// console.log(myN2)
// console.log("C", myArr)



// console.log(myArr)
// console.log(newArr)
// console.log(myArr2)



// ------------------------------------------------------------

const marvel_heros = ["Ironman", "Thor", "Spiderman"]
const dc_heros = ["Shinchan", "Mickey Mouse", "Doreamon"]


//PUSH
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)

// console.log(marvel_heros[2][3])


//CONCAT
// const all_heros = marvel_heros.concat(dc_heros)   //concat returns a new array
// console.log(all_heros)


//SPREAD
const allHeros = [...marvel_heros, ...dc_heros]
// console.log(allHeros)


//flat => Concatinates the array upto a specific depth
const anotherArray = [1, 8, 6, 3, [8, 2, 0, 1, 7], 5, [2, 7, 5, 0, 4, [6, 3, 7, 9]]]
// const real_anotherArray = anotherArray.flat(Infinity)
const real_anotherArray = anotherArray.flat(1)

console.log(real_anotherArray)

console.log(Array.isArray("Swati"))
console.log(Array.from("Swati"))
console.log(Array.from({name: "swati"}))     //Will give an empty string


let score1 = 200
let score2 = 800
let score3 = 450
console.log(Array.of(score1, score2, score3))
