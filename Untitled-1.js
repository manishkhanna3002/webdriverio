const flag = true

if (!flag)
{ 

    console.log("Condition satisfied")
}
else
{

    console.log("Condiiton not satisfied")
}

let i = 1

while(i<10)
{
    i++
    console.log(i)
}

let j = 1
do 
{
    j++
    console.log(j)
}
while (j<10)

console.log("*********************************************************")

for (let k=0;k<100;k++)
{
    if(k%2 == 0)
    {
        console.log(k)
    }
}

let n = 0
for (let k=1;k<100;k++)
{
    
    if(k%2 == 0 && k%5 == 0)
    {
        n++
        console.log(k)
    }
    if (n == 3)
        break;    
}

let required = true

while (required)
{
    console.log(required)
    required = false
}