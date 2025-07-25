// Câu 1
let sum = 0;
for (let i = 1; i<=100; i++) {
    sum = sum + i;
}
console.log(sum)

//Câu 2
for (let i = 1; i<=100;i++) {
    if (i%3 == 0 || i%5==0) {
        console.log(i)
    }
}

//Câu 3
let factorial = 5;
let total = 1;
for (let i =1;  i<=factorial; i++) {
    total = total * i
}
console.log(total)

//Câu 4
let num = 9
for (let i = 0; i<=10; i++) {
    console.log(num * i)
}

//Câu 5
let binary_string = '';
let number = 35;
while (number > 0) {
    binary_string = (number % 2) + binary_string
    number = Math.floor(number/2)
}

console.log(binary_string)

//Câu 6
let n = 10;
let S = 0;
for (let i=1; i<=n-1; i++) {
    S = Math.sqrt(i+S);
}
console.log(S);

//Câu 7
let n2 = 10;
let S2 = 0;
for (let i=1; i<=n-1; i++) {
    S = Math.sqrt(n);
}
console.log(S);