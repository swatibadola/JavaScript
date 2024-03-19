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


//bound check - to check if any holes exist in the array
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.prototype, 10)


// OPTIMIZATION ORDER
// SMI > DOUBLE > PACKED
// HOLEY_SMI > HOLEY_DOUBLE > H_PACKED


const arrThree = new Array(3)
// just 3 holes. HOLEY_SMI_ELEMENTS
arrThree[0] = '1' //HOLEY_ELEMENTS
arrThree[1] = '2' //HOLEY_ELEMENTS
arrThree[2] = '3' //HOLEY_ELEMENTS


const arrFour = []
arrFour.push('1') //PACKED_ELEMENTS
arrFour.push('2') //PACKED_ELEMENTS
arrFour.push('3') //PACKED_ELEMENTS


const arrFive = [1, 2, 3, 4, 5, 6, 7, 8, 9]
arrFive.push(infinity)