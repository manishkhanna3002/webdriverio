//Inheritance: Inheriting the methods and properties of one class in another. The class whose methods and propertied
//are inherited is called sub class and the class in which those methods and properties are inherited
//is called super class/paremt class

const person = require("./Untitled-7")
class pet extends person
{
    /*get location()
    {
        return "Bluecross"
    }*/
    constructor(firstName, lastName)
    {
        //Call parent class constructor
        super(firstName, lastName)
    }
}

let Pet = new pet("sam","sam")
Pet.fullName()
console.log(Pet.location)