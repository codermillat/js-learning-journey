let score = 103
console.log(score);
console.log(typeof score);
// console.log(typeof (score));

score = "102"
console.log(typeof score);
let valueInNumber = Number(score)
console.log(typeof valueInNumber);

score = null
console.log(typeof score);
valueInNumber = Number(score)
console.log(typeof valueInNumber);

score = undefined
console.log(typeof score);
valueInNumber = Number(score)
console.log(typeof valueInNumber);

score = true
console.log(typeof score);
valueInNumber = Number(score)
console.log(typeof valueInNumber);

score = "12aa"
console.log(typeof score);
valueInNumber = Number(score)
console.log(typeof valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "MILLAT"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "MILLAT" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " MILLAT"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// 1:42 am Tuesday, 24 September 2024 (IST)