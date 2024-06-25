const score = 400
console.log(score)

const balance = new Number(100)
console.log(balance)

console.log(balance.toString().length) // converts Num to string to calculate no. of digits
console.log(balance.toFixed(2)) // will provide 2 decimal places, 100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) //23.9
// 123.8966 -> precision(3) -> 124
// 1123.8966 -> precision(3) -> 1.12e + 3

const hundreds = 1000000
console.log(hundreds.toLocaleString()) // 1,000,000
console.log(hundreds.toLocaleString('en-IN')) //10,00,000

//+++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++++++++++++++

console.log(Math.abs(-4)) // 4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.2)) // 5
console.log(Math.floor(4.9)) // 4

console.log(Math.min(4, 3, 6, 8)) // 3

console.log(Math.random()) // between 0 & 1
console.log((Math.random()*10) + 1) // between 1 & 10

// to get random numbers within some range
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min)