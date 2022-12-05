function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const a = document.createElement("h1");
    a.textContent = "Home";

    home.appendChild(a)
    return home;
}

function loadHome() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.textContent = ''
    mainContainer.appendChild(createHome());
}

export default loadHome;