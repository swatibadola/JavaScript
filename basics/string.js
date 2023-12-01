const name = "swati"
const repoCount = 43

// Using `` is called STRING INTERPOLATION
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const conman = new String('swati-ghj-kajol')

console.log(conman[0])
console.log(conman.__proto__)

console.log(conman.length)
console.log(conman.toUpperCase())

console.log(conman.charAt(5))
console.log(conman.indexOf('g'))

const newString = conman.substring(0, 6)
console.log(newString)

const anotherString = conman.slice(-2, 8)
console.log(anotherString)


const newStringOne = "    Swati    "
console.log(newStringOne)
console.log(newStringOne.trim())



const url = "https//swati.com/swati%60badola"
console.log(url.replace('%60', '-'))


console.log(url.includes('swati'))
console.log(url.includes('break'))


console.log(conman.split('-'))


