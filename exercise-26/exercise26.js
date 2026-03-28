function processStudent(callback){
    // synchronous part
    console.log("first line")
    alert("fetch data")

    const studentSync = {id: 201, name: "moha", class:"CA2271"}
    console.log(studentSync)

    // asynchronous part
    setTimeout(()=>{
        const studentAsync = {id: 201, name: "mohamett", class:"cA2122"}
        callback(studentAsync)
    }, 2000)
}

// call the function
console.log("first line of the code")

processStudent(function(student){
    console.log(student)
})

console.log("last line of the code")