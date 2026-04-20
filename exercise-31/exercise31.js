// exercise-31

async function patchData(){
    try{
        console.log("fetching user data")
        const request = await fetch('https://jsonplaceholder.typicode.com/users')
        if(!request.ok){
            throw new Error (`HTTP error status: ${request.status}`)
        }
        const info = await request.json()
        console.log(info)
    }catch(error){
        console.log(error)
    }
}
patchData()