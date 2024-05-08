// Example project data (replace with your own)
const projectsData = [
    {
        name: "Artist Website",
        website: "https://brnmrs.cyclic.app/",
        image: "images/Bruno Mars.png",
        description: "A website dedicated to Bruno Mars, my favorite artist. It contains a homepage, an about page, and a store page.",
        gitRepo: "https://github.com/rogincodes/Artist-Website"
    },
    {
        name: "My First Web Portfolio",
        website: "https://rogincodes.github.io/WSAT-Final-Project_Web-Portfolio/",
        image: "images/Web Portfolio.png",
        description: "This web portfolio served as our final project. It is the compilation of activities we have completed in our Web Systems and Technologies course. Note: It was my first experience with web development. So my codes are as messy as they can get, and the design is not very modern and aesthetic.",
        gitRepo: "https://github.com/rogincodes/WSAT-Final-Project_Web-Portfolio"
    },
    {
        name: "WSAT Activities",
        website: "",
        image: "images/Acts Thumbnail.jpg",
        description: "These are the activities we have done during our Web Systems and Technologies course. We only learned HTML and CSS from this course.",
        gitRepo: "https://github.com/rogincodes/WSAT-Activities"
    }
];

// Function to dynamically populate projects
function populateProjects() {
    const projectsContainer = document.querySelector(".projects");

    projectsData.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("project");        

        const websiteElement = document.createElement("a");
        websiteElement.href = project.website;

        const imageElement = document.createElement("img");
        imageElement.src = project.image;
        imageElement.alt = project.name;

        const headingElement = document.createElement("h3");
        headingElement.textContent = project.name;

        const descriptionElement = document.createElement("p");
        descriptionElement.textContent = project.description;

        const gitRepoElement = document.createElement("a");
        gitRepoElement.href = project.gitRepo;
        gitRepoElement.target = "blank";
        gitRepoElement.textContent = " (Git)";

        websiteElement.append(imageElement);
        descriptionElement.append(gitRepoElement);

        projectElement.appendChild(websiteElement);
        projectElement.appendChild(headingElement);
        projectElement.appendChild(descriptionElement);

        projectsContainer.appendChild(projectElement);
    });
}

// Call the function to populate projects when the page loads
document.addEventListener("DOMContentLoaded", populateProjects);

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form submission handling
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Add your logic for form submission (e.g., sending an email or saving to a database)
    alert("Form submitted! (This is just a placeholder)");

    // Clear the form fields
    this.reset();
});