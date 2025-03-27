//exercise 2 - function for generating an array
function generateRandomArray(arrayLength) {
    const aRandomArray = [];
    for (i = 0; i < arrayLength; i++) {
        aRandomArray.push(Math.floor(Math.random() * 100) + 1);
    }
    return aRandomArray;
} 

//exercise 3 - function for calculating the sum of even numbers in an array
function sumEvenNumbers(array) {
    let sumOfEvenNumbers = null;
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sumOfEvenNumbers = sumOfEvenNumbers + array[i];
        } 
    }
    return sumOfEvenNumbers;
}

//using the function generateRandomArray in order to create an array
let yourArrayLength = parseFloat(prompt("How many values would you like in your array?"));
const yourRandomArray = generateRandomArray(yourArrayLength);
console.log(yourRandomArray);

//using the function sumEvenNumbers, with yourRandomArray as argument
console.log(`The sum of even numbers in your array is ${sumEvenNumbers(yourRandomArray)}`);
