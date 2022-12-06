function createToday() {
    const today = document.createElement("div");
    today.classList.add("today");

    const title = document.createElement("h1");
    title.textContent = "Today";

    today.appendChild(title);
    return today;
}

function loadToday() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.textContent = ''
    mainContainer.appendChild(createToday());
}

export default loadToday;