const asyncFetchBtn=document.getElementById("asyncFetchBtn");
const output=document.getElementById("output");
const postIdInput=document.getElementById("postIdInput");

asyncFetchBtn.addEventListener("click",
    async function(){
        const id=postIdInput.value.trim();
        if(id===""){
            output.textContent="Post ID is Required.";
            return;
        }
        const numericId=Number(id);
        if(numericId<1 || numericId>100)
        {
            output.textContent="ID between 1 and 100";
            output.style.color="green";
            return;
        }
    //  output.textContent="Loading User....";
     try{
        output.textContent="Fetching post...";
        const response= await 
        fetch("https://jsonplaceholder.typicode.com/posts/"+numericId);
        if(!response.ok) throw new Error("HTTP Error:"+response.status);
        const data=await response.json();
        output.textContent=JSON.stringify(data,null,2)
     }
     catch(error){
        output.textContent="Error:"+error.message;
     }
});