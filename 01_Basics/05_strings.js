const name = "agastya"
const repoCount = 50

// old way // console.log(name + repoCount + " Value") // "agastya50 Value"

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`) // "Hello my name is agastya and my repo count is 50" // string interpolation

const gameName = new String('pr-ag-jai')
// this way allows us a lot of functions to use

console.log(gameName[0]) // {p}
console.log(gameName.__proto__) // {}

console.log(gameName.length) // 9
console.log(gameName.toUpperCase()) // PRAGJAI // this doesn't change OG string
console.log(gameName.charAt(2)) // -
console.log(gameName.indexOf('j')) // 6

const newString = gameName.substring(0, 4)
console.log(newString) // pr-a

const anotherString = gameName.substring(-9, 4)
console.log(anotherString) // pr-a

// str.trim() - removes whitespace & line terminators from beginning & end

// str.replace('to_replace', 'with')

// str.includes('str2')

// str.split('-') // splits string into array of strings based on parameter