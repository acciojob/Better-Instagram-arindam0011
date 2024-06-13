let ct = 1;
let areasOfDrop = Array.from(document.querySelectorAll(".image"));
areasOfDrop.forEach(div => {
    div.id = `div${ct++}`;
	 div.addEventListener("dragstart", event => {
        event.dataTransfer.setData("div", event.target.id);
    });

    div.addEventListener("dragover", event => {
        event.preventDefault();
    });

    div.addEventListener("drop", event => {
        event.preventDefault();
        let preID = event.dataTransfer.getData("div");
        let selectedArea = document.getElementById(preID);
        let dropArea = event.target;
        let tempBackground = getComputedStyle(dropArea).backgroundImage;
        dropArea.style.backgroundImage = getComputedStyle(selectedArea).backgroundImage;
        selectedArea.style.backgroundImage = tempBackground;
		// let t=selectedArea.innerText;
		// selectedArea.innerText=dropArea.innerText;
		// dropArea.innerText=t;
    });
});
