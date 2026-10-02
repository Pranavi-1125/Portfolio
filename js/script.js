/* =========================================================
   PERSONAL PORTFOLIO - JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. DATA USING ARRAYS AND OBJECTS
   ========================================================= */

// Skills stored as an object containing arrays
const skills = {
    programming: ["Java", "Python", "SQL"],

    web: [
        "HTML/CSS",
        "JavaScript",
        "React",
        "Flask/FastAPI"
    ],

    database: [
        "MySQL",
        "PostgreSQL"
    ],

    tools: [
        "Git/GitHub",
        "VS Code",
        "OOP"
    ]
};


// Projects stored as an array of objects
const projects = [
    {
        title: "CheckYourGPA",
        icon: "bi-calculator",
        description:
            "A simple web application that helps college students calculate SGPA and CGPA without manual calculations. Users can dynamically add or delete subjects and semesters.",
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "Cloudflare"
        ],
        link: "https://checkyourgpa.mpranavi1125.workers.dev/"
    },

    {
        title: "AI Election Campaigning System",
        icon: "bi-telephone",
        description:
            "Contributed to an AI-powered election campaigning platform during a software development internship, primarily working on the PostgreSQL database, AI integration, and Twilio-based voice telephony.",
        technologies: [
            "React.js",
            "FastAPI",
            "PostgreSQL",
            "Python",
            "Tailwind CSS",
            "Groq API",
            "Twilio"
        ],
        link: "https://github.com/Pranavi-1125/Election_Campaigning"
    }

    /*
        Add your third project here later.

        Example:

        {
            title: "Project Name",
            icon: "bi-code-slash",
            description: "Project description.",
            technologies: ["Java", "HTML", "CSS"],
            link: "#"
        }
    */
];


/* =========================================================
   2. DISPLAY SKILLS USING DOM MANIPULATION
   ========================================================= */

function displaySkills(skillArray, elementId) {

    const container = document.getElementById(elementId);

    // Check whether the element exists
    if (!container) {
        return;
    }

    container.innerHTML = "";

    // Loop through the array
    skillArray.forEach(function (skill) {

        const badge = document.createElement("span");

        badge.className = "skill-badge";
        badge.textContent = skill;

        container.appendChild(badge);
    });
}


// Display all skill categories
displaySkills(skills.programming, "programmingSkills");
displaySkills(skills.web, "webSkills");
displaySkills(skills.database, "databaseSkills");
displaySkills(skills.tools, "toolsSkills");


/* =========================================================
   3. DISPLAY PROJECTS USING DOM MANIPULATION
   ========================================================= */

function displayProjects() {

    const container = document.getElementById("projectsContainer");

    if (!container) {
        return;
    }

    container.innerHTML = "";

    // Loop through project objects
    projects.forEach(function (project) {

        // Create Bootstrap column
        const column = document.createElement("div");
        column.className = "col-md-6";

        // Create project card
        const card = document.createElement("div");
        card.className = "card project-card shadow-sm";

        // Create card body
        const cardBody = document.createElement("div");
        cardBody.className = "card-body p-4";

        // Project icon
        const icon = document.createElement("div");
        icon.className = "project-icon";

        icon.innerHTML = `<i class="bi ${project.icon}"></i>`;

        // Project title
        const title = document.createElement("h3");
        title.className = "card-title";
        title.textContent = project.title;

        // Description
        const description = document.createElement("p");
        description.className = "card-text text-muted";
        description.textContent = project.description;

        // Technology container
        const techContainer = document.createElement("div");
        techContainer.className = "project-tech";

        // Add technology badges
        project.technologies.forEach(function (technology) {

            const tech = document.createElement("span");

            tech.textContent = technology;

            techContainer.appendChild(tech);
        });


        // Buttons container
        const buttons = document.createElement("div");
        buttons.className = "project-buttons";

        // View Project button
        const projectLink = document.createElement("a");

        projectLink.href = project.link;
        projectLink.target = "_blank";
        projectLink.rel = "noopener noreferrer";
        projectLink.className = "btn btn-primary";

        projectLink.innerHTML =
            `<i class="bi bi-box-arrow-up-right"></i> View Project`;


        // Add everything to card
        buttons.appendChild(projectLink);

        cardBody.appendChild(icon);
        cardBody.appendChild(title);
        cardBody.appendChild(description);
        cardBody.appendChild(techContainer);
        cardBody.appendChild(buttons);

        card.appendChild(cardBody);
        column.appendChild(card);

        container.appendChild(column);
    });
}


// Call the function
displayProjects();


/* =========================================================
   4. DARK / LIGHT THEME TOGGLE
   ========================================================= */

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-theme");

        // Change icon depending on current theme
        const icon = themeToggle.querySelector("i");

        if (document.body.classList.contains("dark-theme")) {

            icon.className = "bi bi-sun-fill";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to light theme"
            );

        } else {

            icon.className = "bi bi-moon-fill";

            themeToggle.setAttribute(
                "aria-label",
                "Switch to dark theme"
            );
        }
    });
}

/* =========================================================
   5. CONTACT FORM
   ========================================================= */

const contactForm = document.getElementById("contactForm");

const myEmail = "mpranavi1125@gmail.com";

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Check whether all required fields are valid
        if (!contactForm.checkValidity()) {

            event.stopPropagation();

            contactForm.classList.add("was-validated");

            return;
        }

        // Get values entered by the visitor
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        // Create the email body
        const emailBody =
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `${message}`;

        // Create mailto URL
        const mailtoLink =
            `mailto:${myEmail}` +
            `?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(emailBody)}`;

        // Open the visitor's default email application
        window.location.href = mailtoLink;

        // Remove validation styling
        contactForm.classList.remove("was-validated");
    });
}


/* =========================================================
   6. CURRENT YEAR IN FOOTER
   ========================================================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();
}


/* =========================================================
   7. NAVBAR COLLAPSE AFTER CLICKING A LINK
   ========================================================= */

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        // Only needed on smaller screens
        if (
            window.innerWidth < 992 &&
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(navbarCollapse);

            if (bsCollapse) {
                bsCollapse.hide();
            }
        }
    });
});


/* =========================================================
   8. SIMPLE SCROLL EFFECT
   ========================================================= */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector(".navbar");

    if (!navbar) {
        return;
    }

    if (window.scrollY > 50) {

        navbar.classList.add("shadow");

    } else {

        navbar.classList.remove("shadow");
    }
});


/* =========================================================
   END OF SCRIPT
   ========================================================= */