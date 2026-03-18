//Handling errors using try and catch block

function loadCustomerProfile(){
    return new Promise(function(resolve,reject){
        const isServiceAvailabe=true;

        if(isServiceAvailabe){
            resolve("success! customer profile loaded.")
        }
        else{
            reject("Unsuccessfull! customer profile unavailable.")
        }
    })
}
async function showCustomerProfile(){
    try{
    const message=await loadCustomerProfile();
    console.log(message);
    }
    catch(error){
        console.error("Error:",error)
        
    }
}
showCustomerProfile();