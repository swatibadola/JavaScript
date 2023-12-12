// FOR-IN LOOP used for OBJECTS

const myObject = {
    Js : 'JavaScript', 
    Py : 'Python',
    C : 'C Language',
    Sw : 'Swift',
    rb : 'Ruby'
}

for (const key in myObject) {
    // console.log(key)  //To find key in object
    // console.log(myObject[key])   //To find value of the key in object
    // console.log(key, ':', myObject[key])
}


//--------------------------------------------------------------------


// checking if we can use FOR-IN loop in arrays
const programming = ["js", "sw", "C", "rb", "Py"]
for (const key in programming) {
    // console.log(key)
    // console.log(programming[key])
    // console.log(key, ':', programming[key])
}


//--------------------------------------------------------------------


// checking if we can use FOR-IN loop in maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States OF America")
map.set('KY', "Kenya")

for (const key in map) {
    console.log(map[key])
}