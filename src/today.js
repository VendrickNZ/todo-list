function createToday() {
    const today = document.createElement("div");
    today.classList.add("today");

    const a = document.createElement("h1");
    a.textContent = "Today";

    today.appendChild(a);
    return today;
}

function loadToday() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.textContent = ''
    mainContainer.appendChild(createToday());
}

export default loadToday;