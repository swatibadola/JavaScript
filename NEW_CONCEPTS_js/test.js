// const myArr = []
// %DebugPrint(myArr)

//continuous, Holey

//SMI (small integer)
//Packed element
//Double (float, string, function)


// const arr = [1, 5, , 3, 4]; //Holey array - Array where some index are not having any elements (Have a hole)

// const arrTwo = [1, 5, 2, 3, 4]; //Array with Continuous elements(array with elements on each index)

const arrTwo = [1, 5, 2, 3, 4];
//PACKED_SMI_ELEMENTS

arrTwo.push(9.0);
//PACKED_DOUBLE_ELEMENTS

arrTwo.push('Swatu');
//PACKED_ELEMENTS

arrTwo[10] = 11
//HOLEY_ELEMENTS


console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);