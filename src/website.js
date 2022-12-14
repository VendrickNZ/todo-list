import loadHome from "./home";
import loadToday from "./today";
import loadThisWeek from "./thisweek";
import loadCards from "./cards";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    
    const todoListHeader = document.createElement("h1");
    todoListHeader.textContent = "Todo List";
    todoListHeader.classList.add("todoListHeader");

    const hamburgerButton = document.createElement("button");
    hamburgerButton.classList.add("hamburgerButton");
    hamburgerButton.innerHTML = '<img src=./static/images/hamburgerButton.png />';
    
    header.appendChild(hamburgerButton);
    header.appendChild(todoListHeader);
    return header;
}


function setActiveBtn(button) {
    const buttons = document.querySelectorAll('.navBtn');
    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });

    button.classList.add("active");
}

function createNavBar() {
    const nav = document.createElement("nav");
    nav.classList.add("navbar");

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("navBtn");
    homeBtn.innerHTML = "<img src=./static/images/homeButton.svg /> Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(homeBtn);
        loadHome();
        loadCards();

    });
    
    const todayBtn = document.createElement("button");
    todayBtn.classList.add("navBtn");
    todayBtn.innerHTML = "<img src=./static/images/todayButton.svg /> Today";
    todayBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(todayBtn);
        loadToday();
        loadCards();

    });
    
    const thisWeekBtn = document.createElement("button");
    thisWeekBtn.classList.add("navBtn");
    thisWeekBtn.innerHTML = "<img src=./static/images/thisWeekButton.svg /> This week";
    thisWeekBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(thisWeekBtn);
        loadThisWeek();
        loadCards();

    });

    const projectsHeader = document.createElement("h1");
    projectsHeader.classList.add("projectsHeader");
    projectsHeader.textContent = "Projects";

    const addProjectsBtn = document.createElement("button");
    addProjectsBtn.classList.add("addProjectsBtn");
    addProjectsBtn.classList.add("navBtn");
    addProjectsBtn.innerHTML = "<img src=./static/images/addButton.svg /> Add Project";
    addProjectsBtn.addEventListener("click", () => {
        const newProjectDiv = document.createElement("div");
        newProjectDiv.classList.add("newProjectDiv");
        const newProjectBtn = document.createElement("button");
        newProjectBtn.classList.add("navBtn");
        newProjectBtn.classList.add("newProjectBtn");
        newProjectBtn.innerHTML = "<img src=./static/images/newProjectButton.svg /> New Project";
        newProjectBtn.addEventListener("click", (e) => {
            if (e.target.classList.contains("active")) return;
            setActiveBtn(newProjectBtn);
            // load the project
        })
        let currentProjectName = "New Project";
        const editBtn = document.createElement("button");
        editBtn.classList.add("navBtn");
        editBtn.classList.add("editBtn");
        editBtn.innerHTML = "<img src=./static/images/editButton.svg />";
        editBtn.addEventListener("click", () => {
            // attempt to make modal component without hurting myself irl
            newProjectBtn.innerHTML = `<div class="projectNameTextBox">
                <input type="text" id="projectName"
            </div>
            <div class="confirmProjectNameBtn">
                <button id="submitButton">Submit</button>
                <button id="cancelButton">Cancel</button>
            </div>
            `
            const submitButton = document.getElementById("submitButton");
            submitButton.addEventListener("click", () => {
                let newProjectName = document.getElementById('projectName').value;
                newProjectBtn.innerHTML = `<img src=./static/images/newProjectButton.svg /> ${newProjectName}`;
                currentProjectName = newProjectName;
            })

            const cancelButton = document.getElementById("cancelButton");
            cancelButton.addEventListener("click", () => {
                newProjectBtn.innerHTML = `<img src=./static/images/newProjectButton.svg /> ${currentProjectName}`;
            })
        })
        newProjectDiv.append(newProjectBtn);
        newProjectDiv.append(editBtn);
        nav.appendChild(newProjectDiv);
    })
    nav.appendChild(homeBtn);
    nav.appendChild(todayBtn);
    nav.appendChild(thisWeekBtn);
    nav.appendChild(projectsHeader);
    nav.appendChild(addProjectsBtn);

    return nav;
}

function createMain() {    
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    main.appendChild(createNavBar());

    const mainContainer = document.createElement("div");
    mainContainer.classList.add("mainContainer");
    mainContainer.setAttribute("id", "mainContainer");
    main.appendChild(mainContainer);    
    
    return main;
}

function createFooter() {
    const footer = document.createElement("footer");
    footer.classList.add("footer");

    const githubProfile = document.createElement("a");
    githubProfile.textContent = "VendrickNZ"
    githubProfile.href = "https://github.com/VendrickNZ"
    githubProfile.classList.add("profileLink");

    const githubIcon = document.createElement("i");
    githubIcon.classList.add("fa");
    githubIcon.classList.add("fa-github");
    githubIcon.style = "font-size:30px;color:#4e0ba1";
    footer.appendChild(githubProfile);
    footer.appendChild(githubIcon);

    return footer;
}

function initializeWebsite() {
    const container = document.getElementById("content");
    
    container.appendChild(createHeader());
    container.appendChild(createMain());
    container.appendChild(createFooter());

    setActiveBtn(document.querySelector(".navBtn"));
    loadHome();
    loadCards();
    
}
export default initializeWebsite;
