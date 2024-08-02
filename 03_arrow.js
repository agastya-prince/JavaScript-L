const user = {
    username : "agastya",
    price : 999,

    welcomeMessage : function() {
        console.log( `${this.username}, welcome to website`);
        console.log(this) // prints the object -> username, price, welcomeMessage
    }
}
user.welcomeMessage() // agastya, welcome to website
user.username = "sam"
user.welcomeMessage() // sam, welcome to website

console.log(this) // {} , since out of context/ scope

function chai() {
    let username = "agastya"
    console.log(this.username) // undefined
    // this -> only works for objects
}
const chai = function() {
    let username = "agastya"
    console.log(this.username) // undefined
    // this -> only works for objects
}
// arrow function
const chai = () => {
    let username = "agastya"
    console.log(this);
}
chai() // output is undefined

const addTwo = (num1, num2) => {
    return num1 + num2;
}
// one more way
addTwo = (num1, num2) => (num1 + num2)

// to return object in parent function
addTwo = (num1, num2) => ({username : "agastya"})
console.log(addTwo(3, 4))