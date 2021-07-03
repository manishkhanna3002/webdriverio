module.exports = class person
{
    //The following properties like age, location are class properties
    age = 24
    // When you use get before a method name then that is treated as a property
    get location()
    {
        return "Canada"
    }



constructor (firstName, lastName)
{
    this.firstName = firstName //These are instance variables/instance properties
    this.lastName = lastName //These are instance variables/instance properties
    //All instance variables/instance properties are defined inside constructor
}

fullName()
{
    console.log(this.firstName + this.lastName)
}

}

/*let personobj = new person("Tim","Joseph")
let personobj1 = new person("Chris","Jones")
personobj.fullName()
personobj1.fullName()
console.log(personobj.age)
console.log(personobj.location) //You don't use () brackets at the end of location because when you use get then it is a property not a method/function*/

//Constructor is a method which excutes by default when you create an object of the class
