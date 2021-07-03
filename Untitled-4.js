var greet = "Morning"
let greet1 = "Hello"
const greet2 = "Studip"
greet = "Re=Morning"
//greet1 = "Re=Hello"
//greet2 = "Re=Stupid"

if (1 == 1)
{
    var greet = "Night"
    let greet1 = "Hi"
    const greet2 = "Bastard"
}

function add(a,b)
{
    return a+b
    var greet  = "Evening"
    let greet1 = "Namaste"
    const greet2 = "Non-sense"
}
let sum = add (4,5)
console.log(sum)

//Anonymous functions do not have name, they are function expressions

let sumofintegers1=function(a,b)
{
    return a+b
}

console.log(sumofintegers1(3,2))

//=> is called fat pipe

let sumofintegers2 = (a,b)=>a+b
console.log(sumofintegers2(100,200))

console.log(greet)
console.log(greet1)
console.log(greet2)



