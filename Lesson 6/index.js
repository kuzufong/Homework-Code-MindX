// Câu 1
let length = 10;
let width = 20;
let area = length * width;
let perimeter = 2 * (length + width);
console.log('diện tích hình chữ nhật là ' + area );
console.log('chu vi hình chữ nhật là ' + perimeter );

// Câu 2
let S = 12345;
let hour = (S-S%3600)/3600;
let minute = ((S%3600)-(S%3600)%60)/60;
let second = S - minute*60 - hour*3600;
console.log(hour+ 'h ' + minute+ 'm ' +second + 's')

// Câu 3 

let power = 2;
let basenum = 10;
console.log('Đáp án của ' + basenum + ' luỹ thừa ' + power + ' là ' + Math.pow(basenum,power));

// Câu 4 

let num1 = 10;
let num2 = 20;
let num3 = 30;
let avg = (num1+num2+num3)/3;
console.log('Trung bình của 3 số là: ' + avg)

// Câu 5 

let x1 = 3;
let y1 = 3;
let x2 = 4;
let y2 = 4;

let horizontal_distance = Math.pow(Math.abs(x2-x1), 2);
let vertical_distance = Math.pow(Math.abs(y2-y1), 2);

let distance = horizontal_distance + vertical_distance;
console.log(Math.sqrt(distance));

// Câu 6 

let first_number = Math.random(); //em muốn thử xem nó có chạy được mọi khả năng không nên không assign specific values ạ!
let second_number = Math.random();
let third_number = Math.random();

console.log(first_number)
console.log(second_number)
console.log(third_number)

if (Math.max(first_number, second_number, third_number) == first_number) {
    console.log('True');
} else {
    console.log('False');
}


// Câu 7 
let input1 = '5' 
let input2 = 5
if (input1 === input2) {
    console.log('True')
} else {
    console.log('False')
}
// Câu 8 

let input8 = prompt('Vui lòng nhập một số bất kì (Câu 8)')
if (input8 < Math.floor(input8)) {
    console.log(input8 + ' false')
} else {
    console.log(input8 + ' true')
}

// Câu 9 

let input9 = prompt('Vui lòng nhập một năm bất kì (Câu 9)');
if (input9 % 4 == 0) {
    console.log('Năm ' + input9 + ' là năm nhuận');
} else {
    console.log('Năm ' + input9 + ' là năm không nhuận');
}

// Câu 10 
let hour1 = prompt('Vui lòng nhập giờ thứ 1');
let minute1 = prompt('Vui lòng nhập phút thứ 1');
let hour2 = prompt('Vui lòng nhập giờ thứ 2');
let minute2 = prompt('Vui lòng nhập giờ thứ 2');

if (hour1 > hour2) {
    console.log('Thời gian ' + hour1 + 'h' + minute1 + 'm lớn hơn' + hour2 + 'h' +minute2 + 'm');
} else if (minute1 > minute2) {
    console.log('Thời gian ' + hour1 + 'h' + minute1 + 'm lớn hơn' + hour2 + 'h' +minute2 + 'm');
} else {
    console.log('Thời gian ' + hour2 + 'h' + minute2 + 'm lớn hơn' + hour1 + 'h' +minute1 + 'm');
}

