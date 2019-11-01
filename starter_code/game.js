// function startGame() {}

function clearAll() {
    context.clearRect(0, 0, 400, 600);
}


function drawAll() {
    clearAll();
    drawRoad();
    car.drawCar();
    drawObstacles();
}



// clearAll() {
//     this.context.clearRect(0, 0, 400, 600);
// };

console.log("I am connected")