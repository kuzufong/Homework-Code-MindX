//Câu 1

const students = {
    name: "John",
    age: 20,
};
students.major = "Computer Science";
console.log(students);

//Câu 2
const person = {
    name: "Alice",
    age: 25,
    hobbies: ["Designer"]
};
delete person.hobbies;
console.log(person);

//Câu 3
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020,
}

console.log(Object.keys(car).length)

//Câu 4
const product = {
    name: "Laptop",
    price: 1000
};

for (let key in product) {
  console.log(key + ": " + product[key]);
}

//Câu 5
const products = {
    product1: {
        name: "Phone",
        price: 50
    },
    product2: {
        name: "Camera",
        price: 300
    },
    product3: {
        name: "Tablet", 
        price: 700
    }
}

for (let key in products) {
    if (products[key].name === "Camera") {
    console.log(products[key]);
    }
}
//Câu 6 (Dùng chung object với câu 5)

for (let key in products) {
    if (products[key].price > 100) {
        console.log(products[key]);
    }
}

//Câu 7
const person7 = {
    name: "Bob",
    age: 25,
    job: "Developer",
};

person7.age = 30;
console.log(person7);

//Câu 8
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergeObj = Object.assign({},obj1, obj2);
console.log(mergeObj);

//Câu 9
const animal = {
  type: "Dog",
  name: "Buddy",
  age: 3
};

for (let key in animal) {
  console.log(`${key}: ${animal[key]}`);
}

//Câu 10
const car10 = {
    brand: "BMW",
    model: "X5",
}
for (let key in car10) {
    if (key !== "color") {
        console.log("FALSE");
    }
}