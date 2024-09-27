const car = document.getElementById("car");
let carPosition = { x: 275, y: 150 };
const moveDistance = 20; // Distance the car will move with each keypress
const gameArea = document.getElementById("game-area");

// Function to move the car
function moveCar(event) {
    switch (event.key) {
        case "w":
            if (carPosition.y > 0) {
                carPosition.y -= moveDistance;
            }
            break;
        case "W":
            if (carPosition.y > moveDistance) {
                carPosition.y -= 2*moveDistance;
            }
            else if (carPosition.y > 0){
                carPosition.y -= moveDistance;
            }
            break;
        case "s":
            if (carPosition.y < gameArea.clientHeight - car.clientHeight) {
                carPosition.y += moveDistance;
            }
            break;
        case "S":
            if (carPosition.y < gameArea.clientHeight - car.clientHeight - moveDistance) {
                carPosition.y += 2*moveDistance;
            }
            else if (carPosition.y < gameArea.clientHeight - car.clientHeight) {
                carPosition.y += moveDistance;
            }
            break;
        case "a":
            if (carPosition.x > 0) {
                carPosition.x -= moveDistance;
            }
            break;
        case "A":
            if (carPosition.x > moveDistance) {
                carPosition.x -= 2*moveDistance;
            }
            else if (carPosition.x > 0) {
                carPosition.x -= moveDistance;
            }
            break;
        case "d":
            if (carPosition.x < gameArea.clientWidth - car.clientWidth) {
                carPosition.x += moveDistance;
            }
        case "D":
            if (carPosition.x < gameArea.clientWidth - car.clientWidth - moveDistance) {
                carPosition.x += 2*moveDistance;
            }
            else if (carPosition.x < gameArea.clientWidth - car.clientWidth) {
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
