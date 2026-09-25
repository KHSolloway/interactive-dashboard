// Put your JavaScript code in this file
//1. Create an array containing the Magic Eight Ball Answers.
let answers = ["Don't count on it", "My reply is no", "Ask again later", "Better not tell you now", "Yes, definitely", "Most likely"];
//1a. Create the displayAnswer() function to select and display a random answer.
function displayAnswer() {

    //1b. Generate a random index (0-5) in the answers array.
    let index = Math.floor(Math.random() * answers.length);

    //1c. Use the random index to select an answer from the array and display it inside the circle.
    document.getElementById("circle").innerHTML = answers[index];

    //1d. Change the circle from display:none to display:flex so the answer becomes visible and remains centered.
    document.getElementById("circle").style.display = "flex";
}


//2. Find the ball image and listen for a mousedown event.
document.getElementById("ball").addEventListener("mousedown", function (event) {

    //2a. Check to see if a question field is empty.
    if (document.getElementById("question").value === "") {

        //2b. IF the question field is empty, display an alert asking user to enter a question.
        alert("Do you have a question for me?");

    } else {
        //2c. ELSE call displayAnswer() to select and display a random answer.
        displayAnswer();
    }

});


//3. Find the reset button and listen for a click event.
document.getElementById("reset").addEventListener("click", function (event) {

    //3a. When the reset button is clicked, hide the answer circle again.
    document.getElementById("circle").style.display = "none";

});