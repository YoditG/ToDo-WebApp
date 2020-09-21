// create tasks and then loop through the number of tasks (store dragged items in an)

//reference on the element to be dragged
const draggedItem = document.getElementById("task1");
//referece on the dropzone of the dragged item
const dropzone = document.getElementById("dropHere")

function drag(event){
    //reference on the dragged item
    event.dataTransfer.setData("text","task1")

}

function dragover(event) {
	event.preventDefault();
	event.currentTarget.style = "background-color:pink";
}

function drop(event) {
    console.log("hallo")
	event.preventDefault();
	const data = event.dataTransfer.getData ("text");
    test = event.target.appendChild ( document.getElementById (data) );
    event.currentTarget.style = "background-color:blue";
    
}
