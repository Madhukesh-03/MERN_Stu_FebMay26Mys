function renderProjects() {

    const projectsContainer = document.getElementById("projects-container");

    if(!projectsContainer){
        console.log("Projects container not found");
        return;
    }

    projectsContainer.innerHTML = "";

    projectsData.forEach(function(project){

       
        const card = document.createElement("div");
        card.className = "p-8 bg-white rounded-3xl shadow-lg flex flex-col";

     
        const projectName = document.createElement("h3");
        projectName.className = "text-xl font-bold mb-2";
        projectName.textContent = project.name;

      
        const projectDescription = document.createElement("p");
        projectDescription.className = "text-sm mb-4";
        projectDescription.textContent = project.description;

     
        const tech = document.createElement("p");
        tech.className = "text-sm font-semibold mb-4";
        tech.textContent = "Tech: " + project.technologies

        
       
        card.appendChild(projectName);
        card.appendChild(projectDescription);
        card.appendChild(tech);
        

        projectsContainer.appendChild(card);

    });

    console.log("Projects rendered successfully");
}