//DATES

// let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getTimezoneOffset())

// console.log(typeof myDate)   //object

let myNewDate = new Date(2023, 0, 15)
// console.log(myNewDate.toDateString())   // Months in JS starts from index 0

let myCreatedDate = new Date(2023, 0, 15, 13, 56)
// console.log(myCreatedDate.toLocaleString())

let myDate = new Date("2023-01-25")  //  yyyy-mm-dd
// console.log(myDate.toLocaleString())

let newDate = new Date("10-18-2023")  // mm-dd-yyyy => In India
// console.log(newDate.toLocaleString())
// console.log(newDate.toDateString())


//TIMESTAMPS IN DATES
//Time stamps used for quizes and polls
let myTimeStamp = Date.now()
console.log(myTimeStamp)   //The long number 1701364775028 is in milliseconds from the date 1stJan,1970
console.log(myDate.getTime())
// So, the above two timestamps can be compared easily


console.log(Date.now())  // In milisec

console.log(Date.now()/1000)
console.log(Math.floor(Date.now()/1000))  //Convert to sec 


