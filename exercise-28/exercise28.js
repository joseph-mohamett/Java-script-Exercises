// exercise-28

function getUserInfo(){
    return new Promise((success,failure)=>{
        setTimeout(()=>{
            const isSuccessful = true;
            if (isSuccessful){
                success({id: "c12002", name:"mohamett", class:"ca2213"})
            }else{
                failure("fialed the getUser data")
            }
        },2000)
    })
}

async function loadUserData() {
    try{
        const getUser = await getUserInfo ()
        console.log(getUser)
    } catch(err){
        console.log(err)
    }
}

loadUserData()

