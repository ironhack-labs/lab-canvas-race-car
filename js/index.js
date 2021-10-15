const canvas = document.querySelector("canvas");
const road = new Road(canvas);
const car = new Car(canvas);
//const obstacle = new Obstacle(canvas)
const obstacle = []
obstacle.push(new Obstacle(canvas))

window.onload = () => {
    document.getElementById("start-button").onclick = () => {
        startGame();
    };
};
function startGame() {
    update();
}

function update() {
    window.requestAnimationFrame(update);
    //drawings
    road.drawRoad();
    car.drawCar();
    car.updateCarPos();
    // obstacle.drawCar();
    // obstacle.updateCarPos();
    obstacle.forEach(obstacle => {obstacle.drawCar()});
    obstacle.forEach(obstacle => {obstacle.updateCarPos()});
    // driving
    steering();
    // obstackle clearout by out of bounds
    for (element in obstacle){
      if (obstacle[element].checkBoundaries()){
        obstacle.splice(element, 1)
      }
    }
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

    console.log("in Loop");
}
