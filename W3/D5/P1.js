//Basics of click event 

const button = document.getElementById("clickBtn");

button.addEventListener("click", function() {
    console.log("Button is clicked");
});

button.addEventListener("dblclick", function() {
    console.log("Seccond event listener:Button is clicked");
});