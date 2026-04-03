// exercise-30

function oparate(x,y, handler){
    return handler(x,y)
}

function add(x,y){
    return x+y
}

function sub(x,y){
    return x-y
}

function mult(x,y){
    return x*y
}

function dev(x,y){
    return x/y
}

console.log("Addition", oparate(10,20, add))
console.log("Subtraction", oparate(10,5, sub))
console.log("Multiplication", oparate(5,6, mult))
console.log("Division", oparate(30,15, dev))