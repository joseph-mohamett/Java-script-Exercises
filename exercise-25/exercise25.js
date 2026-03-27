// exercise-25

// spread operators
const number = [1,2,3]
const numbers = [...number,4,5,6]
console.log(numbers)

// rest operators
function multiply(...number){
    return number.reduce((total, num)=> total*num)
}
console.log(multiply(2,4,6,8,10))