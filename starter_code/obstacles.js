function paintObstacle(leftStart, topStart) {
    context.beginPath();
    context.fillStyle = 'darkred';
    context.fillRect(leftStart, topStart, 170, 30);
    context.closePath();
}

function createRandomStartPoint() {
    let borderWidth = 50;
    let obstacleWidth = 170;
    let mostRightStartPoint = 400 - borderWidth - obstacleWidth;
    let startPointWidth = mostRightStartPoint - borderWidth;
    return startPoint = Math.floor(Math.random() * startPointWidth) + borderWidth
}

createRandomStartPoint();

function drawObstacles() {
    paintObstacle(createRandomStartPoint(), 350)
    paintObstacle(createRandomStartPoint(), 50)
    paintObstacle(createRandomStartPoint(), 200)
}

console.log("I am connected")