let myDate = new Date()

console.log(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toLocaleString())
console.log(typeof myDate)  // object

let myCreatedDate = new Date(2023, 0, 23) 
console.log(myCreatedDate.toDateString()) // Mon Jan 23 2023

let myCreatedDate2 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate2.toLocaleString()) // 1/23/2023, 5:03:00 AM

let myCreatedDate3 = new Date("2023-01-14")
console.log(myCreatedDate3.toLocaleString()) // 1/14/2023, 12:00:00 AM

let myCreatedDate4 = new Date("01-14-2023")
console.log(myCreatedDate4.toLocaleString()) // 1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now() 
console.log(myTimeStamp) // returns in milliseconds compared to 1/1/1970
console.log(myCreatedDate4.getTime()) // we can also divide by 1000 to get in seconds

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())