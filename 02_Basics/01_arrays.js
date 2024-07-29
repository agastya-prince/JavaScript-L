// array

const myArr = [0, 1, 2, 3, 4, 5]
// are resizaable
// can have data of multiple datatypes

console.log(myArr[0]) // 0
// array elements cannnot be accessed using arbitrary string
//array copies are shallow copies, so they have same memory accessed

const myArr2 = new Array(1, 2, 3, 4)

// array methods

myArr.push(6) // 0, 1, 2, 3, 4, 5, 6
myArr.pop() // 0, 1, 2, 3, 4, 5

myArr.unshift(9) // 9, 0, 1, 2, 3, 4, 5
myArr.shift() // 0, 1, 2, 3, 4, 5

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(9)); // -1
console.log(myArr.indexOf(5)); // 5

const newArr = myArr.join() // 0,1,2,3,4,5 
// newArr is now a comma separated string instead of array

// slice & splice
const myn1 = myArr.slice(1, 3) // [1, 2] from index1 to before 3
const myn2 = myArr.splice(1, 3) // [1, 2, 3]. this also removes these elements from myArr = [0, 4, 5]

// part 2
const marvel_heroes = ["thor", "ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

marvel_heroes.push(dc_heroes);
// ["thor", "ironman", "spiderman", ["superman", "flash", "batman"] ]
const allHeroes = marvel_heroes.concat(dc_heroes);
//["thor", "ironman", "spiderman", "superman", "flash", "batman"] concate returns new arr

// ... -> spreads array into its elements
const all_new_heros = [...marvel_heroes, ...dc_heroes]; // ["thor", "ironman", "spiderman", "superman", "flash", "batman"]

// convert multi-dimentional array to flattened array
const another_array = [ 1, 2, 3, [ 4, 5, 6] , 7, [ 6, 7, [ 4, 5]]]; 
const real_another_array = another_array.flat(Infinity); // infinity = dimension

console.log(Array.isArray("Hitesh")); // returns boolean
console.log(Array.from("Hitesh")); // converts string to char array

console.log(Array.from({name: "hitesh"})) // interesting
// it returns empty array as we need to specify key or value

// make array from var
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));