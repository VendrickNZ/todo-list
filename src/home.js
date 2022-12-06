function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");

    const title = document.createElement("h1");
    title.textContent = "Home";

    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "<img src=./static/images/deleteButton.svg />"

    home.appendChild(title);
    home.appendChild(deleteButton);
    return home;
}

function loadHome() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.textContent = ''
    mainContainer.appendChild(createHome());
}

export default loadHome;