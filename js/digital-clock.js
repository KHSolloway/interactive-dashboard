function updateClock() {
    // Creates a Date object containing the current date and time
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM or PM
    let session = "AM";

    if (hours >= 12) {
        session = "PM";
    }

    // Convert 24-hour time to 12-hour time
    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros
    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    // Find the HTML elements where the results will be displayed
    document.getElementById("clock-face").innerHTML =
        `${hours}:${minutes}:${seconds} ${session}`;

    document.getElementById("calendar-date").innerHTML =
        now.toLocaleDateString();
}

// Display the clock immediately
updateClock();

// Runs the function every 1,000 milliseconds (one second)
setInterval(updateClock, 1000);