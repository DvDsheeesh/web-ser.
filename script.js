const car = document.getElementById("car");
let carPosition = { x: 275, y: 150 };
const moveDistance = 10; // Distance the car will move with each keypress
const gameArea = document.getElementById("game-area");

// Function to move the car
function moveCar(event) {
    switch (event.key) {
        case "ArrowUp":
            if (carPosition.y > 0) {
                carPosition.y -= moveDistance;
            }
            break;
        case "ArrowDown":
            if (carPosition.y < gameArea.clientHeight - car.clientHeight) {
                carPosition.y += moveDistance;
            }
            break;
        case "ArrowLeft":
            if (carPosition.x > 0) {
                carPosition.x -= moveDistance;
            }
            break;
        case "ArrowRight":
            if (carPosition.x < gameArea.clientWidth - car.clientWidth) {
                carPosition.x += moveDistance;
            }
            break;
    }

    // Update car's position
    car.style.top = carPosition.y + "px";
    car.style.left = carPosition.x + "px";
}

// Listen for keydown events
window.addEventListener("keydown", moveCar);
