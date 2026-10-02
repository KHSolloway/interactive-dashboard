

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