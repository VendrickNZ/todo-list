
function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    
    const todoListHeader = document.createElement("h1");
    todoListHeader.textContent = "Todo List";
    todoListHeader.classList.add("todoListHeader");

    const hamburgerButton = document.createElement("button");
    hamburgerButton.classList.add("hamburgerButton");
    hamburgerButton.innerHTML = '<img src=./static/images/hamburgerButton.png />';
    
    header.appendChild(hamburgerButton)
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

    const homeBtn = document.createElement("button");
    homeBtn.classList.add("navBtn");
    homeBtn.innerHTML = "<img src=./static/images/homeButton.svg /> Home";
    homeBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(homeBtn);
        // loadHome();
    });
    
    const todayBtn = document.createElement("button");
    todayBtn.classList.add("navBtn");
    todayBtn.innerHTML = "<img src=./static/images/todayButton.svg /> Today";
    todayBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(todayBtn);
        // loadToday();
    });
    
    const thisWeekBtn = document.createElement("button");
    thisWeekBtn.classList.add("navBtn");
    thisWeekBtn.innerHTML = "<img src=./static/images/thisWeekButton.svg /> This week";
    thisWeekBtn.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveBtn(thisWeekBtn);
        // loadThisWeek();
    });
    
    nav.appendChild(homeBtn);
    nav.appendChild(todayBtn);
    nav.appendChild(thisWeekBtn);
    
    return nav;
}

function createMain() {    
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");
    main.appendChild(createNavBar());
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
    // loadHome();
}

export default initializeWebsite;


