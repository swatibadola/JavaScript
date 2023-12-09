// FOR LOOP

for (let i = 0; i < 10; i++) {
    const element = i;
    if(element == 8){
        // console.log("8 is the multiple of 2")
    }
    // console.log(`${element} is the multiple of 1`)
}


for(let i = 0; i<=10; i++){
    // console.log(`Outer loop value: ${i}`)
    for(let j = 0; j<=10; j++){
        // console.log(`Inner loop value ${j} and inner loop ${i}`)
        // console.log(`${i} * ${j} = ${i*j}`)
    }
}


let myArray = ["ironman", "batman", "shaktiman"]
console.log(myArray.length)
for(let index = 0; index < myArray.length; index++){
    const element = myArray[index]
    console.log(element)
}