const canvas = document.querySelector("canvas");
const road = new Road(canvas);
const hud = new HUD(canvas);
const car = new Car(canvas);
//const obstacle = new Obstacle(canvas)
const obstacle = [];
obstacle.push(new Obstacle(canvas));
let gameOver = false;

window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        startGame();
    };
};
function startGame() {
    update();
}

function update() {
    road.drawRoad();
    if (gameOver) hud.drawGameOver();
      hud.drawHUD();
    // stops game if Game Over
    if (!gameOver)
        window.requestAnimationFrame(update);
    car.drawCar();
    car.updateCarPos();
    obstacle.forEach((obstacle) => {
        obstacle.drawCar();
    });
    obstacle.forEach((obstacle) => {
        obstacle.updateCarPos();
    });
    // driving/steering
    steering();
    // obstackle clearout by out of bounds
    // AND check for crashs
    for (element in obstacle) {
        if (car.checkCrash(obstacle[element])) {
            obstacle.splice(element, 1);
            if (car.health === 0) {
                gameOver = true;
            }
        }
        if (obstacle[element].checkBoundaries()) {
            obstacle.splice(element, 1);
        }
    }
    //add new obstacles
    if (Math.random() > 0.982) obstacle.push(new Obstacle(canvas));
}

function steering() {
    car.setDirection(0);
    window.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight") {
            car.setDirection(1);
        } else if (event.key === "ArrowLeft") {
            car.setDirection(-1);
        }
    });
}
