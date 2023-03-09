const canvas = document.getElementById("canvasdom ");
const context = canvas.getContext("2d");

document.getElementById("game-board").style.display = "none";
document.getElementById("start-button").onclick = () => {
  document.getElementById("game-board").style.display = "block";
  startGame();
};

let currentGame;

function startGame() {
  currentGame = new Game();
  let currentCar = new Car();

  currentGame.car = currentCar;
  currentGame.car.draw();
  cancelAnimationFrame(currentGame.animationId);
  updateCanvas();
}

function detectCollision(obstacle) {
  return !(
    currentGame.car.x > obstacle.x + obstacle.width ||
    currentGame.car.x + currentGame.car.width < obstacle.x ||
    currentGame.car.y > obstacle.y + obstacle.height
  );
}

function updateCanvas() {
  context.clearRect(0, 0, raceCanvas.clientWidth, raceCanvas.clientHeight);
  currentGame.car.draw();
  currentGame.obstaclesFrequency++;
  if (currentGame.obstaclesFrequency % 100 === 1) {
    const randomObstacleX = Math.floor(Math.random() * 450);
    const randomObstacleY = 0;
    const randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
    const randomObstacleHeight = Math.floor(Math.random() * 50) + 20;

    const newObstacle = new Obstacle(
      randomObstacleX,
      randomObstacleY,
      randomObstacleWidth,
      randomObstacleHeight
    );

    currentGame.obstacles.push(newObstacle);
  }

  currentGame.obstacles.forEach((obstacle, index) => {
    obstacle.y += 1;
    obstacle.draw();

    if (detectCollision(obstacle)) {
      currentGame.gameOver = true;
      currentGame.obstaclesFrequency = 0;
      currentGame.score = 0;
      currentGame.obstacles = [];
      document.getElementById("score").innerHTML = 0;
      document.getElementById("game-board").style.display = "none";
      cancelAnimationFrame(currentGame.animationId);
      alert("BOOOOMM! GAME OVER!");
    }

    if (obstacle.y > raceCanvas.height) {
      currentGame.score++;
      document.getElementById("score").innerHTML = currentGame.score;
      currentGame.obstacles.splice(index, 1);
    }
  });

  if (!currentGame.gameOver) {
    currentGame.animationId = requestAnimationFrame(updateCanvas);
  }
}

document.addEventListener("keydown", (keyboardEvent) => {
  currentGame.car.moveCar(keyboardEvent.key);
});
