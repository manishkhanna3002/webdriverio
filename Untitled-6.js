//Object is the collection of properties

let person = {
firstName:"Tim",
lastName:"Kim",
age:24,
fullName: function()
{
    console.log(this.firstName+this.lastName)
}
}

//fullname(): () brackets are required to indicate to Javascript that this is a function that you are calling
person.fullName()

console.log(person.lastName)
console.log(person['lastName'])
person.firstName = "Tim Dane"
console.log(person.firstName)

person.gender = "male"

console.log(person)

delete person.gender
console.log(person)

console.log("gender" in person)

//Print all the values of Javascript object

for(key in person)
{
    console.log(person[key])
}