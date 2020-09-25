// --------------------------------SELECTION OF HTML ID's------------------------------------------------


// 1. This refers to the button I will click when I move the task to the paragraph section:

const addTaskButton = document.getElementById('addTaskButton');


/* 2. This will be needed for the variable 'listOfTasks which will move my tasks from the input field
into the paragraph below */

const toDoContainer = document.getElementById('toDoContainer');



/* 3. This refers to the input field which I will set attach a value to so that the innerText of my 
tasks are equal to this inputField and the value the user assigns to it */

const inputField = document.getElementById('inputField');
// let inputFieldStorage = inputField.value; 


let userToDos = [];

const createNewTask = () => {
  if (inputField.value !== "") {
    const taskId = Date.now().toString()
    let userToDosObject = { id: taskId, content: inputField.value, description: "" };
    userToDos.push(userToDosObject);

    // Create a div to encapsulate each task 
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");

    // Create a pragraph for task names
    const task = document.createElement('p');
    task.dataset.taskId = taskId;
    task.classList.add('task-styling');
    task.innerText = inputField.value;
    taskContainer.appendChild(task);
    inputField.value = "";


    console.log(userToDos)

    // Create edit and delete buttons
    const editButton = document.createElement("button");
    editButton.classList.add("edit-button");
    //editButton.innerText = "Edit"; //*** OUT **//
    editButton.innerHTML = '<i class="fas fa-pencil-alt"></i>'; //*** IN **//

    // Add event listener for the edit button
    editButton.addEventListener("click", editTask);

    // function for edit button
    function editTask() {
      // Prevent user immediately from triggering edit button event while in edit mode
      editButton.removeEventListener("click", editTask);
      // Or use ---> editButton.disabled = true;

      // Make task name content editable
      task.contentEditable = true;

      // Create a div to encapsulate the text area and the save button
      const descriptionDiv = document.createElement("div");
      descriptionDiv.classList.add("description-div");

      // Display text area to add a description 
      const taskDescriptionTextArea = document.createElement("textarea");
      taskDescriptionTextArea.classList.add("task-description-text-area");

      taskDescriptionTextArea.value = userToDosObject.description

      // if the length of userTodosObject.descrcription is > 0 then take the existing content of
      // userTodosObject.descrcription and set the value of the textDescriptionTextArea.value = 
      // the content of userTodosObject.description

      // Add a save button together with its corresponding eventsto save changes
      const saveEditsButton = document.createElement("button");
      saveEditsButton.classList.add("save-edits-button");
      saveEditsButton.textContent = "Save";
      saveEditsButton.addEventListener("click", saveChanges);

      function saveChanges(e) {
        // Make task name content non-editable
        task.contentEditable = false;
        e.target.parentNode.remove();

        // Make edit button active after saving
        editButton.addEventListener("click", editTask);
        // Or use ---> editButton.disabled = false;

        // Save the user data as objects and push to an array ONLY when user adds a description


        userToDosObject.description = taskDescriptionTextArea.value;
        userToDosObject.content = task.innerText;
        console.log(userToDosObject.description)
        console.log(userToDosObject)
      }

      // Append task description area and save button elements to the DOM
      descriptionDiv.appendChild(taskDescriptionTextArea);
      descriptionDiv.appendChild(saveEditsButton);
      toDoContainer.appendChild(descriptionDiv);
    }

    const deleteButton = document.createElement("button");
    // deleteButton.innerText = "Delete";       //*** OUT **//
    deleteButton.innerHTML = '<i class="fas fa-trash-alt"></i>';  //*** IN **//
    deleteButton.classList.add("delete-button");

    // Add event listener to delete button
    deleteButton.addEventListener("click", deleteTask);
    function deleteTask(e) {
      e.currentTarget.parentNode.remove();
    }

    // append the paragraph delete and edit buttons to the div
    taskContainer.appendChild(editButton);
    taskContainer.appendChild(deleteButton);
    toDoContainer.appendChild(taskContainer);
  } else {
    alert("Ooops, you can't create an empty task.")
  }
}

// Add event listener to create new task
addTaskButton.addEventListener('click', createNewTask);

inputField.addEventListener('keydown', (event) => {
  console.log(event.key)
  if (event.key === 'Enter') {
    createNewTask()
  }
});


//-------------------------- JSON STORAGE SECION -----------------------------------------------





