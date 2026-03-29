// exercise-27

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

getUserInfo()
.then((info)=>{
    console.log("successfully",info)
})
.catch((error)=> console.log(error))