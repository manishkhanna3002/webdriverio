//var marks1 = Array6()
//var marks1 = new Array (1,2,3,4,5,6)

let marks = [1,2,3,4,5,6]
console.log(marks)
console.log(marks[2])
marks[3] = 10
console.log(marks)
console.log(marks.length)
marks.push (100)
console.log(marks)
marks.unshift (200)
console.log(marks)
marks.pop()
console.log(marks)
console.log(marks.indexOf(1))

let submarks = marks.slice(0,5)
console.log(submarks)

console.log(marks.includes(0))
//Whether 0 is in the Array or not
var sum = 0

for (let i=0;i<marks.length;i++)
{
    console.log(marks[i])
    sum = sum + marks[i]
}

console.log(sum)

let total = marks.reduce((sum, mark)=>(sum+mark))
console.log(total)

var evenscores = []

var scores = [1,2,3,4]

for (let k=0;k<scores.length;k++)
{
    if (scores[k]%2 == 0)
    {
        console.log(scores[k])
        evenscores.push (scores[k])
    }
}

console.log(evenscores)

var newfilterscores = scores.filter(score=>score%2==0)

console.log(newfilterscores)

let multipliedscores = newfilterscores.map(score=>score*3)
console.log(multipliedscores)

let totalval = multipliedscores.reduce((sum,val)=>(sum+val))
console.log(totalval)

let scores1 = [1,2,3,4]

let finalscore = scores1.filter(score=>score%2==0).map(score=>score*3).reduce((sum,val)=>(sum+val))
console.log(finalscore)

let fruits = ["banana", "mango", "apple", "pomegranate"]
console.log(fruits.sort())
console.log(fruits.reverse())

//sort failed in the following scenario, it works well for array of strings

let numbers = [2,1,5,100]
numbers.sort()
console.log(numbers)

//The following is Bubble sort i.e. sorting the array by finding the smallest difference between 2 elements of an array

numbers.sort(function(a,b)
{
    return a-b
}
)

console.log(numbers)

//console.log(numbers.sort(a,b)=>(a-b))

numbers.sort(function(a,b)
{
    return b-a
}
)

console.log(numbers)