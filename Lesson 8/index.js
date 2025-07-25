//Câu 1
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve'];
const firstName = names[0];
const lastIndex = names.length - 1;
const lastName = names[lastIndex];
console.log(`First position name: ${firstName}`);
console.log(`Last position name: ${lastName}`);

//Câu 2
const names2 = ["John", "Jane", "Jim", "Jake"];
names2[1] = "Mary";
console.log(names2);

//Câu 3
const names3 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (i in names3) {
    console.log(`Name at index ${i}: ${names3[i]}`);
}

//Câu 4
const names4 = ["Alice", "Bob", "Charlie", "David"];
const newValue = "MindX";

names4[names4.length] = newValue;
console.log(names4);

//Câu 5
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const new_numbers = [];
let j = 0;
for (i in numbers) {
    if (numbers[i] % 2 === 0) {
        new_numbers.push(numbers[i]);
        
    }
}
console.log(new_numbers);


//Câu 6
const names6 = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
for (i in names6) {
    if (names6[i] == "David") {
        console.log(`The name David is at index ${i}`);
    }
}

//Câu 7
const numbers7 = [1, 2, 3, 4, 2, 1, 3, 2, 4, 2];
const targetCounting = 2;
let count=0;
for (i in numbers7) {
    if (numbers7[i] === targetCounting) {
        count++;
    }
}
console.log(`The number ${targetCounting} appears ${count} times in the array.`);


//Câu 8
const numbers8 = [5, 2, 9, 3, 7, 11, 8];
let temp = 0;
for (let i = 0; i < numbers8.length; i++) {
    if (i == 0) {
        continue
    } else if (numbers8[i] > numbers8[i - 1]) {
        max = numbers8[i];
    }  
}
console.log(max);


//Câu 9
const array9 = [1, 2, 3, 4, 5];
const newArray9 = [];
let k = 0;
for (let i = array9.length - 1; i >= 0; i--) {
    newArray9[k] = array9[i];
    k++;
}
console.log(newArray9);

//Câu 10
const duplicatesArray = [1, 2, 2, 3, 4, 4, 5];
for (let i = 0; i < duplicatesArray.length; i++) {
    for (let j = i + 1; j < duplicatesArray.length; j++) {
        if (duplicatesArray[i] === duplicatesArray[j]) {
            duplicatesArray.pop(j);
        }
    }
}
console.log(duplicatesArray);

//Câu 11
const numbers11 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;
for (let i = 0; i < numbers11.length; i++) {
    sum += numbers11[i];
}
console.log(`The sum of the array is: ${sum}`);