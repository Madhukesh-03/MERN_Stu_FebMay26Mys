function initThemeToggle(){
    const toggleToggle = document.getElementById("theme-toggle");
    const body=document.body;

    const savedTheme=localStorage.getItem("portfolio-theme");

    if(savedTheme==="dark"){
        body.classList.add("dark-mode");
    }
    toggleToggle.addEventListener("click",function(){
        body.classList.toggle("dark-mode");
        if(body.classList.contains("dark-mode")){
            localStorage.setItem("portfolio-theme","dark");
            console.log("Dark mode enable");
        }else{
            localStorage.setItem("portfolio-theme","light");
            console.log("light mode enable");
        }
    });
}