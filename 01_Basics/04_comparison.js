console.log(2>1)
console.log(2>=1)
console.log(2 == 1)
console.log(2 != 1)


console.log("2" > 1) // true
console.log("02" > 1) // true


console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >=0) // true
// the reason : comparisons convert null to a number, treating it as 0

console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined>=0) // false
 // avoid these kinds of comparisons 

// === triple check => checks value as well as dataType