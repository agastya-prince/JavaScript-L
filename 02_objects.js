// singleton - > one object of a kind
// constructor will make singleton, literal will not make singleton

// Objects Literal

const mySym = Symbol("key1")

const JsUser = {
    name : "Agastya", // name considered string type key
    "full name" : "Prince Agastya Jaiswal", // this cannot be accessed by .full name
    [mySym] : "mykey1", // to access a value as a symbol, we need to use square bracket 
    age : 18,
    location : "Rampurhat",
    email : "agastya@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}

// to  access data -> JsUser.email
// better way -> 
console.log(JsUser["email"])

console.log(JsUser[mySym]) // to get value as symbol

// to change data
JsUser["email"] = "agastya@chatgpt.com";

// to not allow changing data
Object.freeze(JsUser);
JsUser.email = "agastya@microsoft.com"; // won't change as it has been freezed

// ***** CREATE FUNCTION within OBJECT

JsUser.greeting = function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting()); // Hello JS User
console.log(JsUser.greetingTwo()); // Hello JS User, agastya



// --------------------------------------------PART 2------------------------------------------

//const tinderUser = new Object(); // singleton

const tinderUser = {}; // non singleton

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

const regularUser = {
    email : "some@google.com",
    fullname : {
        userfullname : {
            firstname : "prince",
            lastname : "jaiswal"
        }
    }
}
console.log(regularUser.fullname) // returns the entire object within
console.log(regularUser.fullname.userfullname.firstname) // returns the string prince

// COMBINE OBJECTS

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "a", 4 : "b"};

const obj3 = { obj1, obj2}
console.log(obj3); // obj3 = { obj1 : {1 : "a", 2 : "b"},  obj2 : {3 : "a", 4 : "b"} }

obj3 = Object.assign({}, obj1, obj2); // {1 : "a", 2 : "b", 3 : "a", 4 : "b" }

Object.assign(obj1, obj2); // will make the obj1 = obj1 + obj2

// best way
obj3 = {...obj1, ...obj2};


//  ARRAY OF OBJECTS

const users = [
    {
        id: 1, email : "a@google.com"
    },
    {
        id: 2, email : "b@google.com"
    },
    {
        id: 3, email : "c@google.com"
    },
    {
        id: 4, email : "d@google.com"
    }
]
console.log(users[1].email); // b@google.com

console.log(Object.keys(tinderUser)); // returns array of keys
console.log(Object.values(tinderUser)); // returns array of values
console.log(Object.entries(tinderUser)); // array of array of key & value

console.log(tinderUser.hasOwnProperty('isLogged')); // false
console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true