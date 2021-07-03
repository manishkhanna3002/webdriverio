const person = require("./Untitled-7")
let day = "Tuesday "

console.log(day.length)
console.log(day[1])
let subday = day.slice(0,4)
console.log(subday)

//split splits the staring in 2 parts on the basis of a character

let splitday = day.split("s")
console.log(splitday[1].length)
console.log(splitday[1].trim().length)

let a = "27"
let b = "26"

let c = parseInt(a) - parseInt(b)
console.log(c)

console.log(c.toString())

let newquote = day + "is Funday day"
console.log(newquote)
let val = newquote.indexOf("day") //If indexof is not able to find any match then it returns -1
console.log(val)
let val1 = newquote.indexOf("day",5)
console.log(val1)

let count = 0
let value = newquote.indexOf("day")

while (value !== -1)
{
    count++
    value = newquote.indexOf("day",value+1)
}
console.log(count)

let person1 = new person("Christopher","Jonas")

console.group(person1.fullName())
