//exercise 2
//function for generating an array
function generateRandomArray(arrayLength) {
    const aRandomArray = [];
    for (i = 0; i < arrayLength; i++) {
        aRandomArray.push(Math.floor(Math.random() * 100) + 1);
    }
    return aRandomArray;
} 
//using the function in order to create an array
let yourArrayLength = parseFloat(prompt("How many numbers would you like in your array?"));
const yourRandomArray = generateRandomArray(yourArrayLength);
console.log(yourRandomArray);
