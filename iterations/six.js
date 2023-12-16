// const coding = ["JS", "Ruby", "Java", "Python", "cpp"]


// const values = coding.forEach((item) => {
//     // console.log(item);
// })
// console.log(values);   //This will return the value for forEach loop as undefined
// forEach loop never returns a value


const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// //FILTER returns value whereas FOR-EACH does not. FILTER would print nothing but not undefined
//FILTER - Is jo true hoga woh hi pass hoga
// const newNums = myNums.filter((num) => num > 5)
// console.log(newNums);


// //If we use curlybraces then it becomes an explicit function so we need to write return 
// const newNums = myNums.filter((num) => {
//     return num > 5
// })
// console.log(newNums);


const newNums = []
myNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})
// console.log(newNums)


const books = [
    {title:'Book One', genre: 'Fiction', publish: 1981, edition:2004},
    {title:'Book Two', genre: 'Non-Fiction', publish: 1992, edition:2008},
    {title:'Book Three', genre: 'History', publish: 1999, edition:2007},
    {title:'Book Four', genre: 'Non-Fiction', publish: 1981, edition:2010},
    {title:'Book Five', genre: 'Science', publish: 1989, edition:2014},
    {title:'Book Six', genre: 'Fiction', publish: 2009, edition:2010},
]
// const userbooks = books.filter((books) => books.genre === 'Fiction')
// console.log(userbooks);

// const userbooks = books.filter((bk) => bk.publish > 1999)
// console.log(userbooks);


const userbooks = books.filter((bk) => {
    return (bk.publish > 1900) && (bk.genre === 'Science')
})
console.log(userbooks);