//Câu 1
const A = 3
const B = 4;
const x = 5;
function calculate(A, B, x) {
    return A * x + B;
}
console.log(calculate(A, B, x));

//Câu 2
const width = 10;
const length = 15;
function calculatePerimeter(width, length) {
    return 2 * (width + length);
}
console.log("Perimeter = " + calculatePerimeter(width, length));

//Câu 3

function calculateCircleArea(radius) {  
    return Math.PI * radius * radius;
}
function roundtoTwoDecimalPlaces(number) {
    return Math.round(number * 100) / 100;
}
console.log("Area = "+ roundtoTwoDecimalPlaces(calculateCircleArea(5)));

//Câu 4
function checkPrimeNumber(number) {
    if (number < 2) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}
console.log(checkPrimeNumber(17));

//Câu 5
function sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}
console.log(sum([1, 2, 3, 4, 5]));

//Câu 6

function calculateSumOfDigits(Start, End) {
    let sum = 0;
    for (let i = Start; i <= End; i++) {
        sum += i;
    }
    return sum;
}
console.log(calculateSumOfDigits(5, 10));

//Câu 7
function checkPalindrome (string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        } else {
            return true;
        }
    }
}
console.log(checkPalindrome("madam"));

//Câu 8
function checkEvenNumber(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            return false;
        }
    }
    return true;
}
console.log(checkEvenNumber([2, 4, 6, 8, 10]));

//Câu 9
function SumOfPositiveNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) {
            sum += array[i];
        }
    }
    return sum;
}
console.log(SumOfPositiveNumbers([3, -1, 4, -2, 5]));

//Câu 10
function max(...numbers) {
    return Math.max(...numbers);
}
console.log(max(1, 3, 7, 0, -2));

//Câu 11

function rearrangeArray(array) {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                sorted = false;
            }
        }
    }
    return array;
}
console.log(rearrangeArray([12, 33, 45, 7, 89]));

//Câu 12
function findNumberInArray(array, number) {
    if (number > array.length - 1) {
        return false;
    } else {
        OrderedArray = rearrangeArray(array);
        return OrderedArray[number];
    }
}
console.log(findNumberInArray([2,5,2,7,9,10], 3));

//Câu 13
function findMostFrequentNumber(array) {
    const OrderedArray = rearrangeArray(array);
    let mostFrequent = OrderedArray[0];
    let highestFrequency = 1;
    let currentCount = 1;
    for (let i = 1; i < OrderedArray.length; i++) {
        if (OrderedArray[i] === OrderedArray[i - 1]) {
            currentCount++
        } else {
            if (currentCount > highestFrequency) {
                highestFrequency = currentCount;
                mostFrequent = OrderedArray[i-1] 
            }
            currentCount = 1;
        }
    }

    return mostFrequent
}
console.log(findMostFrequentNumber([1, 2, 3, 2, 1, 1, 4, 5, 10]));

//Câu 14
function splitWord(string) {
    const arr = string.split('');
    let newWord = ""
    let output = []
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== " ") {
            newWord += arr[i];
        } else {
            if (newWord.length > 0) {
                output.push(newWord);
                newWord = "";
            }
        }
    }
    
    if (newWord.length > 0) {
        output.push(newWord);
    }

    return output;
}

console.log(splitWord("This is a test"));

//Câu 15
function calcNumberData(object) {
    let sum = 0;
    for (key in object) {
        if (typeof object[key] === "number") {
            sum += object[key]
        }
    }
    return sum;
}
console.log(calcNumberData({ a: 1, b: 'hello', c: 3, d: 'world' }))