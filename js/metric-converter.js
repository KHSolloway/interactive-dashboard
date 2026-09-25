
//Original code from part A:
/*let value = parseFloat(prompt("Enter the value you want to convert:"));
let conversionChoice = prompt("Enter your conversion choice (e.g., 'inch to centimeter'):"); var result;
if (conversionChoice === "inch to centimeter") {
    result = value * 2.54;
} else if (conversionChoice === "foot to centimeter") {
    result = value * 30.48;
} else if (conversionChoice === "yard to meter") {
    result = value * 0.91;
} else if (conversionChoice === "mile to kilometer") {
    result = value * 1.61;
} else if (conversionChoice === "centimeter to inch") {
    result = value * 0.39;
} else if (conversionChoice === "centimeter to foot") {
    result = value * 0.0328;
} else if (conversionChoice === "meter to yard") {
    result = value * 1.09;
} else if (conversionChoice === "kilometer to mile") {
    result = value * 0.62;
}
alert(result.toFixed(2));
-----------------------------------------------------------------------*/


//M5 Assignment Pt. 2: Metric Converter


//BUTTON: Find the element with the ID conversion-btn. Listen for a "click". When that click happens, run the instructions inside this function.
document.getElementById("conversion-btn").addEventListener("click", function (event) {

    // 1. Prevent the browser from doing its normal/default behavior for this event.
    event.preventDefault();

    // 2. Get the number they entered and turn it into a number.
    let value = parseFloat(document.getElementById("conversionValue").value);

    // 3. Find out which dropdown position they selected.
    let choiceIndex = document.getElementById("conversionChoice").selectedIndex;

    // 4. Collect all the option elements.
    let conversionOptions = document.getElementsByTagName("option");

    // 5. Find the "value" of the conversionOptions that was selected.
    let conversionRate = parseFloat(conversionOptions[choiceIndex].value);

    // 6. Find the "text" of the conversionOptions that was selected.
    let conversionText = conversionOptions[choiceIndex].text;

    // 7. Split the conversionOptions "text" with " to " and assign [0] as the first unit, and [1] as the second unit.
    let fromUnit = conversionText.split(" to ")[0];
    let toUnit = conversionText.split(" to ")[1];

    // 8. define the result by multiplying the conversion rate by the value.
    let result = conversionRate * value;

    // 9. Find the HTML element with the ID conversion-message, change what's inside it to the value stored in "result" formatted to two decimal places.
    document.getElementById("conversion-message").innerHTML = value + " " + fromUnit + " is " + result.toFixed(2) + " " + toUnit;

});

// 10. When the reset button is clicked, make the conversion-message null
document.getElementById("converter-reset").addEventListener("click", function () {
    document.getElementById("conversion-message").innerHTML = "";
});