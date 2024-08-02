console.log("A");
console.log("G");
console.log("A");
console.log("S");
console.log("T");
console.log("Y");
console.log("A");

function sayMyName() {
    console.log("A");
    console.log("G");
    console.log("A");
    console.log("S");
    console.log("T");
    console.log("Y");
    console.log("A");
}
sayMyName()

function addTwoNumbers (num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers(3, 4); // 7
addTwoNumbers(3, "4"); // 34
addTwoNumbers(3, "A"); // 3A

function addTwoNumbers (num1, num2){
    return num1 + num2;
}
const result = addTwoNumbers(3, 4);
console.log("Result : ", result);

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("hitesh")); // hitesh just logged in
console.log(loginUserMessage("")) // just logged in
console.log(loginUserMessage()) // undefined just logged in

function loginUserMessage(username){
    if (!username){
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()) // Please enter a username // undefined

// Functions with objects and arrays

function calculateCartPrice(...num1){ // ... triple dots mean the items are bundled together in array
    return num1;
}
console.log(calculateCartPrice(200, 300, 500)) // 200, normally. [200, 300, 500], with ...

function calculateCartPrice(val1, val2, ...num1){
    return num1;
}
console.log(calculateCartPrice(200, 300, 500, 700)) // [500, 700]

// -------------------------handling objects
const user = {
    username : "hitesh",
    price : 199
}

function handleObjects(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObjects(user);
// to directly pass object
handleObjects({
    username : "sam",
    price : 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1];
}
console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));