const refs = {
    downloadButton: document.querySelector("#download"),
    divElementWithData: document.querySelector("#data"),
    statusElement: document.querySelector("p.status"),
};

refs.downloadButton.addEventListener("click", async () => {
    try {
        const response = await fetch("https://randomuser.me/api");
        const { results } = await response.json();
        const result = results[0];

        const userImageElement = createUserElement("img", { src: result.picture.large });
        const userCellElement = createUserElement("p", { text: `Cell: ${result.cell}` });
        const userCityElement = createUserElement("p", { text: `City: ${result.location.city}` });
        const userEmailElement = createUserElement("p", { text: `Email: ${result.email}` });
        const userCoordinatesElement = createUserElement("p", 
            { text: `Coordinates: latitude - ${result.location.coordinates.latitude}, 
                                  longitude - ${result.location.coordinates.longitude}` });

        const divWrapperElement = createDivWrapper(
            userImageElement,
            userEmailElement,
            userCellElement,
            userCityElement,
            userCoordinatesElement
        );

        refs.divElementWithData.insertAdjacentHTML("afterbegin", divWrapperElement);
    } catch (error) {
        refs.statusElement.innerText = `Failed: ${error}`;
        refs.statusElement.classList.add("bg-danger");
    }
});

function createUserElement(elementType, { src = "", text = "" } = {}) {
    return `<${elementType} src="${src}">${text}</${elementType}>`;
}

function createDivWrapper(...children) {
    return `<div class="card">${children.join("")}</div>`;
}