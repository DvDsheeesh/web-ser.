const car = document.getElementById("car");
let carPosition = { x: 0, y: 0 };
const moveDistance = 30; // Distance the car will move with each keypress
const gameArea = document.getElementById("game-area");

// Function to move the car
function moveCar(event) {
    switch (event.key) {
        case "w":
            if (carPosition.y > moveDistance) carPosition.y -= moveDistance;
            else carPosition.y -= carPosition.y;
            break;
        case "W":
            if (carPosition.y >= 2*moveDistance) carPosition.y -= 2*moveDistance;
            else carPosition.y -= carPosition.y;
            break;

        case "s":
            if (carPosition.y < gameArea.clientHeight - car.clientHeight) carPosition.y += moveDistance;
            else carPosition.y += gameArea.clientHeight - car.clientHeight - carPosition.y;
            break;
        case "S":
            if (carPosition.y < gameArea.clientHeight - car.clientHeight - moveDistance) carPosition.y += 2*moveDistance;
            else carPosition.y += gameArea.clientHeight - car.clientHeight - carPosition.y;
            break;

        case "a":
            if (carPosition.x > moveDistance) carPosition.x -= moveDistance;
            else carPosition.x -= carPosition.x;
            break;
        case "A":
            if (carPosition.x >= 2*moveDistance) carPosition.x -= 2*moveDistance;
            else carPosition.x -= carPosition.x;
            break;

        case "d":
            if (carPosition.x < gameArea.clientWidth - car.clientWidth) carPosition.x += moveDistance;
            else carPosition.x += gameArea.clientWidth - car.clientWidth - carPosition.x;
            break;
        case "D":
            if (carPosition.x < gameArea.clientWidth - car.clientWidth - moveDistance) carPosition.x += 2*moveDistance;
            else carPosition.x += gameArea.clientWidth - car.clientWidth - carPosition.x;
            break;
    }

    // Update car's position
    car.style.top = carPosition.y + "px";
    car.style.left = carPosition.x + "px";
}

// Listen for keydown events
window.addEventListener("keydown", moveCar);
