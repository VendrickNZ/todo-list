function createThisWeek() {
    const thisWeek = document.createElement("div");
    thisWeek.classList.add("thisWeek");

    const a = document.createElement("h1");
    a.textContent = "This Week";

    thisWeek.appendChild(a);
    return thisWeek;
}

function loadThisWeek() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.textContent = ''
    mainContainer.appendChild(createThisWeek());
}

export default loadThisWeek;