//your code here

 let dragEvents = ["dragover","dragenter", "drop"];

    dragEvents.forEach((eventOfDrag)=>{
        let areasOfDrop=document.querySelectorAll(".image");
        for(let i=0; i<areasOfDrop.length; i++){
			for(let j=0; j<areasOfDrop.length; j++){
				area.addEventListener(eventOfDrag, (event)=>{
                event.preventDefault();
                if(eventOfDrag=="drop"){

					t=areasOfDrop[j];
					areasOfDrop[j]=areasOfDrop[i];
					areasOfDrop[i]=t;
                   
                }
			}
		}
            
            })