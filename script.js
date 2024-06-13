let areasOfDrop = Array.from(document.querySelectorAll(".image"));
let ct = 1;

areasOfDrop.forEach(div => {
    div.id = `div${ct++}`;
});

areasOfDrop.forEach(div => {
    div.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("div", div.id);
    });

    div.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    div.addEventListener("drop", (event) => {
        event.preventDefault();
        let perID = event.dataTransfer.getData("div");
        let selectDiv = document.getElementById(perID);
        let droparea = event.target;

        let temp = selectDiv.style.backgroundImage;
        selectDiv.style.backgroundImage = droparea.style.backgroundImage;
        droparea.style.backgroundImage = temp;
    });
});