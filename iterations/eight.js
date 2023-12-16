const nums = [1, 2, 3]

//REDUCE - Used in shopping carts
// const initialVal = 3
// const myTotal = nums.reduce(function (accum, currval) {
//     console.log(`acc: ${accum} and currval: ${currval}`);
//     return accum + currval
// }, initialVal)
// console.log(myTotal);

// const myTotal = nums.reduce((accum, currval) => accum+currval, initialVal)
// console.log(myTotal);



const shoppingCart = [
    {
        courseName: 'JavaScript',
        Price: 2999
    },
    {
        courseName: 'Data Science',
        Price: 13999
    },
    {
        courseName: 'Blockchain',
        Price: 10999
    },
    {
        courseName: 'Machine Learning',
        Price: 21999
    }
]

initialVal = 0
const totalPurchase = shoppingCart.reduce( (accum, item) => accum+item.Price, initialVal)
console.log(totalPurchase);