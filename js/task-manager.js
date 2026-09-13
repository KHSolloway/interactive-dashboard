//FIXED added back in
console.log("Checking status for: " + userName);

function weeklyGoal(userName, dailyGoal, bonusTasks) {

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


