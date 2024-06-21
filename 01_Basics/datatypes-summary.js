// two types of data on the basis of storing in memory and accessing it
// primitive && non-primitive

// Primitive 
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId) // false

const bigNumber = 3528173628913681n // becomes bigInt
// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj", "doga"] // array

let newObj = {                                // object
    name: "prince",
    age: "21",
}

const myFunction = function(){  // typeof myFunction => object function
    console.log("Hello World")
}