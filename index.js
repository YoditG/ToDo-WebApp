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




    let userToDos= [];

    const createNewTask = () => {
      const taskId = Date.now().toString()
      userToDos.push({id:taskId, content: inputField.value })

     const task = document.createElement('p');
     task.dataset.taskId = taskId;
    task.classList.add('task-styling');
    task.innerText = inputField.value;
    toDoContainer.appendChild(task);
    inputField.value= "";
    
    }
   

   
    
    
   addTaskButton.addEventListener('click', createNewTask);

    
inputField.addEventListener('keydown', (event) => {
        console.log(event.key)
        if (event.key === 'Enter') {
          createNewTask()
        }
      }); 

//-------------------------- JSON STORAGE SECION -----------------------------------------------





