// const coding = ["JS", "Ruby", "Java", "Python", "cpp"]


// const values = coding.forEach((item) => {
//     // console.log(item);
// })
// console.log(values);   //This will return the value for forEach loop as undefined
// forEach loop never returns a value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //FILTER returns value whereas FOR-EACH does not. FILTER would print nothing but not undefined
// const newNums = myNums.filter((num) => num > 5)
// console.log(newNums);


// //If we use curlybraces then it becomes an explicit function so we need to write return 
const newNums = myNums.filter((num) => {
    return num > 5
})
console.log(newNums);