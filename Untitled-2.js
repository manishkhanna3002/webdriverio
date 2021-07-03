console.log("Hello World")

let a=4
console.log(a)

console.log(typeof(a))

let b=1.26
console.log(typeof(b))

//Until ES5 verson of Javscript there used to be just one variable type i.e. var but since ES6 
/*there are other variable 
types instead of var and those are let and const*/

let c = "Rahul Shetty"
console.log(typeof(c))

let d=true
console.log(d)
console.log(!d)
console.log(typeof(d))

c = a + b
console.log(c)

/* With let you can't redeclare a variable but you can reassign whereas in var you can 
redeclare as well as reassign a variable */
//var c = a + b is also allowed

let e = null
console.log(typeof(e))

let f
console.log(typeof(f))

const g = 0
console.log(typeof(g))