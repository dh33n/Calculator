document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");

    // Handle button clicks
    document.querySelectorAll(".buttons button").forEach(function (button) {
        button.addEventListener("click", function () {
            if (button.id === "=") {
                calculate();
            } else if (button.id === "ac") {
                clearDisplay();
            } else if (button.id === "c") {
                backspace();
            } else {
                // Add the button's value to the display
                display.value += button.textContent;
            }
        });
    });

    // Perform calculations
    function calculate() {
        // Get the expression from the display
        let expression = display.value;

        // Evaluate the expression
        try {
            let result = eval(expression);

            // Display the result
            display.value = result;
        } catch (error) {
            // Handle errors (e.g., division by zero)
            display.value = "Error";
        }
    }

    // Clear the display
    function clearDisplay() {
        display.value = "";
    }

    // Backspace function
    function backspace() {
        display.value = display.value.slice(0, -1);
    }
});
