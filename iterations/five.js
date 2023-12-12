// FOR-EACH loop
// Some loops are added directly to the properties of array


const coding = ["JS", "Ruby", "Java", "Python", "cpp"]

//Here forEach is a callback function and its syntax does not have a 'function name'. So, the SYNTAX becomes: variable.forEach(function () {} )
coding.forEach(function (item) {
    // console.log(item);
})


//Writing ARROW FUNCTION for FOR-EACH LOOP
coding.forEach((item) => {
    // console.log(item);
})



//Can also be used after declaring the function
function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

coding.forEach((item, index, arr) => {
    // console.log(item, index, arr);
})


// Loops of object in an array
//Applying FOR-Each LOOP on the below array
const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "Java"
    },
    {
        languageName: "Python",
        languageFileName: "Py"
    },
    {
        languageName: "Swift",
        languageFileName: "Sw"
    }
]

myCoding.forEach((item) => {
    // console.log(item);
    // console.log(item.languageFileName);
    console.log(item.languageName);
});


