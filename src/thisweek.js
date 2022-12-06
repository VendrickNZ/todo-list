function createThisWeek() {
    const thisWeek = document.createElement("div");
    thisWeek.classList.add("thisWeek");

    const title = document.createElement("h1");
    title.textContent = "This Week";

    thisWeek.appendChild(title);
    return thisWeek;
}

function loadThisWeek() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.textContent = ''
    mainContainer.appendChild(createThisWeek());
}

export default loadThisWeek;