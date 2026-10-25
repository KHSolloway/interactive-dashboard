

function weeklyGoal(userName, dailyGoal, bonusTasks) {

    //FIXED added back in
    console.log("Checking status for: " + userName);

    let weeklyTotal = dailyGoal * 5;
    //FIXED changed weeklyGoal to WeeklyTotal
    let totalGoal = weeklyTotal + bonusTasks;

    let output = userName + " has a weekly goal of " + totalGoal + " tasks.";

    document.getElementById("goal-message").innerHTML = output;


}

document.getElementById("goal-btn").addEventListener("click", function (event) {

    event.preventDefault();

    let userName = document.getElementById("userName").value;
    let dailyGoal = Number(document.getElementById("dailyGoal").value);
    //FIXED getElementsByID to getElementByID
    let bonusTasks = Number(document.getElementById("bonusTasks").value);


    weeklyGoal(userName, dailyGoal, bonusTasks);
})



/*

//MOD 7 Assignment

//WHEN THE PAGE LOADS

// 1.	Create the List Element: Use document.createElement("ul") to create a new unordered list element.
let taskList = document.createElement("ul");

// 2a.	Assign an ID and Append: Give this new <ul> a unique ID (e.g., id="user-tasks") 
taskList.id = "user-tasks";

//2b. and use appendChild() to add it as a child of the "task-list" div you created in Step 2.
let taskListDiv = document.getElementById("task-list");
taskListDiv.appendChild(taskList);

//3. Declare a global array at the top of your script to track tasks: let myTasks = [];.
let myTasks = [];

//4a. Declare addTaskButton 
let addTaskButton = document.getElementById("add-task");

//4b. Add Task Logic: Attach a "click" event listener to the "Add Task" button:
addTaskButton.addEventListener("click", function () {

    //WHEN USER CLICKS THE BUTTON

    //5. Capture and Store: Get the string from the input field and use the .push() method to add it to your myTasks array.
    let taskInput = document.getElementById("task-name");
    myTasks.push(taskInput.value);

    //6. Create List Item: Use document.createElement("li") for the task.
    let taskItem = document.createElement("li");

    //7. Assemble: Create the task text, append the text to the <li>, then append the <li> to the <ul>.
    let taskText = document.createTextNode(taskInput.value);
    taskItem.appendChild(taskText);
    taskList.appendChild(taskItem);


});
*/

// ======================================
// MOD 9 - TASK MANAGER WITH OBJECTS
// ======================================

let tasks = []; //stores all task objects, including their updates.
let nextTaskId = 1; //keeps track of the next available ID.
let editingTaskId = null; //Tracks which task is being edited; null means we're adding a new task.

//Get the task name from the HTML input. Remove unnecessary whitespace.
function addTask() {
    let taskName = document.getElementById("task-name").value.trim();
    //if the task-name field is empty, display alert, end function.
    if (taskName === "") {
        window.alert("Enter a Task.");
        return;
    }

    //Get the priority selected by the user.
    let taskPriority = document.getElementById("priority").value;
    //Get the importance status (true or false). 
    let isImportant = document.getElementById("isImportant").checked;

    // Check whether the user is editing an existing task.
    if (editingTaskId !== null) {

        // Find the existing task by its ID.
        let taskToEdit = tasks.find(task => task.id === editingTaskId);

        // Update the task object's properties.
        taskToEdit.name = taskName;
        taskToEdit.priority = taskPriority;
        taskToEdit.isImportant = isImportant;

        // Find the existing list item.
        let taskItemToEdit = document.getElementById("task-" + editingTaskId);

        // Update the displayed task name.
        let taskTextToEdit = taskItemToEdit.childNodes[1];
        taskTextToEdit.nodeValue = taskToEdit.name;

        //Update the task's background color based on priority.
        if (taskToEdit.priority === "High") {
            taskItemToEdit.style.backgroundColor = "lightcoral";
        } else if (taskToEdit.priority === "Medium") {
            taskItemToEdit.style.backgroundColor = "moccasin";
        } else {
            taskItemToEdit.style.backgroundColor = "lightgreen";
        }

        // Update the task's text color based on importance.
        if (taskToEdit.isImportant === true) {
            taskItemToEdit.style.color = "red";
        } else {
            taskItemToEdit.style.color = "";
        }

        //Exit editing mode.
        editingTaskId = null;

        //Change the button back to Add Task.
        document.getElementById("add-task").textContent = "Add Task";

        //Clear the form and restore default values.
        document.getElementById("task-name").value = "";
        document.getElementById("priority").value = "Medium";
        document.getElementById("isImportant").checked = false;

        //Log the updated tasks array.
        console.log(JSON.stringify(tasks));

        // Stop the function so a duplicate task isn't created.
        return;
    }

    //Create a new task object with properties
    let newTask = {
        id: nextTaskId++,
        name: taskName,
        priority: taskPriority,
        isImportant: isImportant,
        isCompleted: false
    };

    //Add the new task object to the tasks array 
    tasks.push(newTask);

    //Create a new <li> element using the DOM.
    let taskItem = document.createElement("li");

    //Give each list item a unique ID so we can find it when editing.
    taskItem.id = "task-" + newTask.id;

    //Create a completion checkbox. 
    let taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";

    //attach the event listener. if checkbox is check taskItem is crossed out, else nothing happens.
    taskCheckbox.addEventListener("change", function () {

        newTask.isCompleted = taskCheckbox.checked;

        if (newTask.isCompleted === true) {
            taskItem.style.textDecoration = "line-through";
        } else {
            taskItem.style.textDecoration = "none";
        }

        //Update JSON.stringify
        console.log(JSON.stringify(tasks));
    });

    //Create a text node containing the task's name.
    let taskText = document.createTextNode(newTask.name);

    //Append checkbox and text node to the <li>.
    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskText);

    //Apply Styling based on priority.
    if (newTask.priority === "High") {
        taskItem.style.backgroundColor = "lightcoral";
    } else if (newTask.priority === "Medium") {
        taskItem.style.backgroundColor = "moccasin";
    } else {
        taskItem.style.backgroundColor = "lightgreen";
    }

    //Important status changes taskItem to red
    if (newTask.isImportant === true) {
        taskItem.style.color = "red";
    }

    //Create an Edit button for each task.
    let editButton = document.createElement("button");
    editButton.textContent = "Edit";

    //Append editButton to the <li>
    taskItem.appendChild(editButton);

    //attach the event listener. - .find locates that task in the array.
    editButton.addEventListener("click", function () {
        let taskToEdit = tasks.find(task => task.id === newTask.id);

        editingTaskId = taskToEdit.id; //remembers which task we're editing.

        // Load the selected task into the form for editing.
        document.getElementById("task-name").value = taskToEdit.name;
        document.getElementById("priority").value = taskToEdit.priority;
        document.getElementById("isImportant").checked = taskToEdit.isImportant;

        //change the Add Task button to Save Changes
        document.getElementById("add-task").textContent = "Save Changes";
    });

    //Create Delete Button for each taskItem. 
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    //Attach its event listener.
    deleteButton.addEventListener("click", function () {
        tasks = tasks.filter(task => task.id !== newTask.id);

        //remove that task's <li> from the webpage.
        taskItem.remove();

        //log and update the array.
        console.log(JSON.stringify(tasks));
    });

    //Append the button to the <li>
    taskItem.appendChild(deleteButton);

    //Append the <li> to the <ul> inside task-list.
    let taskList = document.getElementById("user-tasks");
    taskList.appendChild(taskItem);

    //Log the tasks array using JSON.stringify().
    console.log(JSON.stringify(tasks));

    //Reset the form after adding a task.
    document.getElementById("task-name").value = "";
    document.getElementById("priority").value = "Medium";
    document.getElementById("isImportant").checked = false;



}
//End Add Task Function

//Create Add Task button. Add event listener
document.getElementById("add-task")
    .addEventListener("click", addTask);

//delete all tasks
function deleteAllTasks() {
    tasks = []; //clears JavaScript data.
    document.getElementById("user-tasks").innerHTML = "";
    console.log(JSON.stringify(tasks));
}

// Connect the Delete Entire List button
document.getElementById("delete-list")
    .addEventListener("click", deleteAllTasks);

