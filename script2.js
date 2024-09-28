const car = document.getElementById("car"); // Selects the car element from the DOM
let carPosition = { x: 275, y: 150 }; // Initializes the car's starting position
const moveDistance = 10; // Defines how many pixels the car moves per keypress
const gameArea = document.getElementById("game-area"); // Selects the game area element from the DOM

// Function to move the car based on key presses
function moveCar(event) {
    switch (event.key) { // Checks which key was pressed
        case "ArrowUp": // If the Up arrow key is pressed
            if (carPosition.y > 0) { // Ensures the car doesn't move above the game area
                carPosition.y -= moveDistance; // Moves the car up by decreasing the y-coordinate
            }
            break; // Exits the switch statement
        case "ArrowDown": // If the Down arrow key is pressed
            if (carPosition.y < gameArea.clientHeight - car.clientHeight) { // Ensures the car doesn't move below the game area
                carPosition.y += moveDistance; // Moves the car down by increasing the y-coordinate
            }
            break; // Exits the switch statement
        case "ArrowLeft": // If the Left arrow key is pressed
            if (carPosition.x > 0) { // Ensures the car doesn't move beyond the left boundary
                carPosition.x -= moveDistance; // Moves the car left by decreasing the x-coordinate
            }
            break; // Exits the switch statement
        case "ArrowRight": // If the Right arrow key is pressed
            if (carPosition.x < gameArea.clientWidth - car.clientWidth) { // Ensures the car doesn't move beyond the right boundary
                carPosition.x += moveDistance; // Moves the car right by increasing the x-coordinate
            }
            break; // Exits the switch statement
    }

    // Updates the car's position on the screen
    car.style.top = carPosition.y + "px"; // Sets the new vertical position
    car.style.left = carPosition.x + "px"; // Sets the new horizontal position
}

// Adds an event listener to detect key presses and call the moveCar function
window.addEventListener("keydown", moveCar);
