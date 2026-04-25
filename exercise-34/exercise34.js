const set = document.querySelector('#items')

function addElement(){
    const newSet =document.createElement('li')

    newSet.textContent ='New Blog'

    set.appendChild(newSet)
}

function removeElement(){
    if(set.lastChild){
        set.removeChild(set.lastChild)
    }else{
        alert('Stop, brother, youre not getting anywhere here')
    }
}