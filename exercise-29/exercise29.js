// exercise-29

async function getQuantity(){
    const Requests = await fetch('info.json')
    const count = await Requests.json()
    console.log(count)
}

getQuantity()