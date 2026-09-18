
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

// 1. Create a variable called value and put into it whatever the user typed into the HTML element with the ID conversionValue.
let value = parseFloat(document.getElementById("conversionValue").value);

// 2. Find the select object AND find all of the child <option> elements in the document.
document.getElementById('conversionChoice');
document.getElementsByTagName('option');

// 3. Create a variable called choiceIndex, find conversionChoice, and store the selectedIndex of each option.
let choiceIndex = document.getElementById("conversionChoice").selectedIndex;

// 4. Create a variable called conversionOptions and store all of the <option> elements in it.
let conversionOptions = document.getElementsByTagName("option");

// 5. From the collection of <option> elements, find the option the user selected and convert it fromtext to a number.
parseFloat(conversionOptions[choiceIndex].value);

// 6.Create a variable named conversionRate and store the option "value" inside it.
let conversionRate = parseFloat(conversionOptions[choiceIndex].value)

// 7. Output - Take the number the user entered and multiply it by the conversion rate associated with the option they selected. Store the answer in result.
let result = value * conversionRate;

// 8. Find the HTML element whose ID is conversion-message and put the contents of the result variable inside it.
document.getElementById("conversion-message").innerHTML = result;

// 9. BUTTON: Find the element with the ID conversion-btn. Listen for a "click". When that click happens, run the instructions inside this function.
document.getElementById("conversion-btn").addEventListener("click", function (event) {

    // 9a. Prevent the browser from doing its normal/default behavior for this event.
    event.preventDefault();

    // 9b. Get the number they entered and turn it into a number.
    let value = parseFloat(document.getElementById("conversionValue").value);

    // 9c. Find out which dropdown position they selected.
    let choiceIndex = document.getElementById("conversionChoice").selectedIndex;

    // 9d. Collect all the option elements.
    let conversionOptions = document.getElementsByTagName("option");

    // 9e. Find the "value" of the conversionOptions that was selected.
    let conversionRate = parseFloat(conversionOptions[choiceIndex].value);

    // 9f. Find the "text" of the conversionOptions that was selected.
    let conversionText = conversionOptions[choiceIndex].text;

    // 9g. Split the conversionOptions "text" with " to " and assign [0] as the first unit, and [1] as the second unit.
    let fromUnit = conversionText.split(" to ")[0];
    let toUnit = conversionText.split(" to ")[1];

    // 9h. define the result by multiplying the conversion rate by the value.
    let result = conversionRate * value;

    // 9i. Find the HTML element with the ID conversion-message, change what's inside it to the value stored in "result" formatted to two decimal places.
    document.getElementById("conversion-message").innerHTML = value + " " + fromUnit + " is " + result.toFixed(2) + " " + toUnit;

});

// 10. When the reset button is clicked, make the conversion-message null
document.getElementById("reset").addEventListener("click", function () {
    document.getElementById("conversion-message").innerHTML = "";
});