function createCards() { 
    const cardContainerDiv = document.createElement("div");
    cardContainerDiv.classList.add("cardContainerDiv");

    const toDoCardDiv = document.createElement("div");
    toDoCardDiv.classList.add("toDoCardDiv");
    const doingCardDiv = document.createElement("div");
    doingCardDiv.classList.add("doingCardDiv");
    const doneCardDiv = document.createElement("div");
    doneCardDiv.classList.add("doneCardDiv");

    toDoCardDiv.textContent = "to do";
    doingCardDiv.textContent = "doing";
    doneCardDiv.textContent = "done";

    cardContainerDiv.appendChild(toDoCardDiv);
    cardContainerDiv.appendChild(doingCardDiv);
    cardContainerDiv.appendChild(doneCardDiv);

    return cardContainerDiv;
}

function loadCards() {
    const mainContainer = document.getElementById("mainContainer");
    mainContainer.appendChild(createCards());
}

export default loadCards;