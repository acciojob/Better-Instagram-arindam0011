//your code here
 let dragEvents = ["dragStart","dragover","dragenter", "drop"];

    dragEvents.forEach((eventOfDrag)=>{
        let areasOfDrop= Array.from(document.querySelectorAll(".image"));
		let ct=1;
		areasOfDrop.forEach(div=> {div.id=`div${ct++}`;});

		for (let t of areasOfDrop){
			t.addEventListener(eventOfDrag, (event)=>{
				if(eventOfDrag=="dragStart"){
				event.dataTransfer.setData("div", t.id);
				event.dataTransfer.setData("text", t.innerText);
				}
				
				if(eventOfDrag=="drop"){
				let perID= event.dataTransfer.getData("div");
				let perText=event.dataTransfer.getData("text");
				let droparea=event.terget;
					event.dataTransfer.setData("dragid", droparea.id);
					event.dataTransfer.setData("dragtext", droparea.innerText);
				droparea.id=perID;
				droparea.innerText=perText;
			}
			})
			
		}
            
            })