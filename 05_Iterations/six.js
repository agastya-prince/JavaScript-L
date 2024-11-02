const coding = ["js", "ruby", "java", "python", "cpp"]

const values = coding.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values); //undefined


// --------------------------------------------------------

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 4 )
console.log(newNums); // [5, 6, 7, 8, 9, 10]

const newNums1 = myNums.filter( (num) => {
   return num > 4 
}) // SCOPE IS Changed so need to write return 
console.log(newNums1); // [5, 6, 7, 8, 9, 10]


/* suppose a object bk = [
{   title, genre, edition }
{   title, genre, edition }
] */

const userBooks = books.filter( (bk) => bk.genre === 'History')

console.log(userBooks)