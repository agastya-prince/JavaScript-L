let score = 33
console.log(typeof score)

score = "33"
console.log(typeof score)

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

// say score = "33abc" => this will get converted and show typeof as number
// but value of that variable will be NaN (Not A Number)

// score = null => 0
// score = true => 1
// score = undefined => NaN

//convert to boolean
let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)

// "" => false
// "hrhe" => true
// 1  => true

// convert to string
let someNumber = 33
let stringNumber = String(someNumber) // "33"

// ********************************** Operations **********************************************

let value = 3
let negValue = -value
console.log(negvalue) // -3

let str1 = "hello"
let str2 = " prince"

let str3 = str1 + str2
console.log(str3) // "hello prince"

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32
