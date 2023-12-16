const myNumbers = [2, 5, 1, 7, 8, 9, 10]
// const newNums = myNumbers.map((num) => num + 10)
// console.log(newNums);


//CHAINING - We can use many methids at a same time.
const newNums = myNumbers
                .map((num) => num * 10)
                .map((num) => num + 1)
                .filter((num) => num >= 50)
console.log(newNums);
