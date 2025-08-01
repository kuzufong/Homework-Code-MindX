//Câu 1
let names = ["John", "Alice"];
names[names.length] = "Tom";
//names.push("Tom")
console.log(names);

//Câu 2
let array = [1,2,3,4]
// let newArr = array.map((num)=> {
//     return Math.pow(num,2);
// });
// console.log(newArr);
let newArr = []
for (let i = 0; i < array.length; i++) {
    newArr[i] = Math.pow(array[i],2)
}
console.log(newArr)

//Câu 3

let array3 = [5,10,15,20,25]
// let evenNum = array3.filter((item) => {
//     return item % 2 === 0;
// });
let evenNum = []
console.log(evenNum)
for (let i = 0; i < array3.length; i++) {
    if (array3[i]%2 === 0) {
        evenNum.push(array3[i])
    }
}
console.log(evenNum)

//Câu 4
let data4 = [
    {name: 'John', score: 7}, 
    {name: 'Alice', score: 9}, 
    {name: 'Tom', score: 8}
]
// for (let i = 0; i < data4.length; i++) {
//     if (data4[i].score >= 8) {
//         console.log(data4[i].score) 
//         break 
//     }
// }
const result = data4.find(data4 => data4.score >=8)
console.log(result)

//Câu 5
const array5 = [3, 5, 8, 12, 15]
// for (let i = 0; i < array5.length; i++) {
//     if (array5[i] >= 10) {
//         console.log(array5[i])
//         break 
//     }
// }
console.log(array5.findIndex(i => i >= 10))
  
//Câu 6
let array6 = ['a', 'b', 'c', 'd', 'e']

// for (let i = 0; i < array6.length; i++) {
//     if (array6[i] === 'd') {
//         array6[i] = 'f';
//     }
// }
array6.splice(3,1,'f')
console.log(array6)


//Câu 7

const data7 = { name: 'Tom', age: 21, major: 'Computer Science' }
console.log(Object.keys(data7))

//Câu 8
console.log(Object.values(data7))

//Câu 9
const objA = { a: 1, b: 2}
const objB = {c:3,d:4}
console.log(Object.assign(objA, objB))

//Câu 10
const array10 = [1,2,3];
const newArray = [...array10, 4]
console.log(newArray)

//Câu 11
const obj11A = {
    name: 'Alice',
    age: 25
} 
const obj11B = {
    job: 'Developer'
}

let objTotal = {...obj11A, ...obj11B};
console.log(objTotal)

//Câu 12
const name12 = ['john', 'alice', 'tom']
const newName12 = name12.map(name => name.toUpperCase())
console.log(newName12)

//Câu 13
function getSum(total, num) {
  return total + Math.round(num);
}

const number13 = [1,2,3,4,5,6]
const evenNum13 = number13.filter(number => number%2 ==0)
const sumEvenNum13 = evenNum13.reduce(getSum, 0)

console.log(sumEvenNum13)

//Câu 14
const number14 = [1,2,2,3,4,4,5]
const uniqueNumber14 = [...new Set(number14)] //em dùng W3School để tham khảo, + spread operator dể nó set hết
console.log(uniqueNumber14)

//Câu 15
array15 = ['a', 'b', 'a', 'c', 'b', 'a']
const count = {}
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
array15.forEach(item => {
  if (count[item]) {
    count[item]++;
  } else {
    count[item] = 1;
  }
});
console.log(count)