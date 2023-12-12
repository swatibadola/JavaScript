
//FOR-OF LOOP 
const arr = [8, 6, 10, 45, 19]
for (const num of arr) {
    // console.log(num);
}


const greetings = "Good Morning"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
}


// MAPS : key, value  => Are unique values and remain int he order provided by the user
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States OF America")
map.set('KY', "Kenya")
// console.log(map)



// FOR-OF LOOP used in MAPS

//The below syntax is not used as its output will give the key and values both in arrays.
for (const key of map) {
    console.log(key)
}


// Correct syntax is below
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}


const myObject = {
    'game1' : 'FreeFire',
    'game2' : 'PS5'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }


