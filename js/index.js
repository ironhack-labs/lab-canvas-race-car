const raceCanvas = document.getElementById("canvas");
const context = raceCanvas.getContext("2d");
document.getElementById('game-board').style.display = 'none';

document.getElementById("start-button").onclick = () => {
  document.getElementById('game-board').style.display = 'block';
  startGame();
};

let currentGame;

function startGame() {
  //Instantiate a new game
  currentGame = new Game();
  //Instantiate new car
  let currentCar = new Car();
  //Assign my new car to my new game
  currentGame.car = currentCar;
  currentGame.car.draw();
  updateCanvas();
  
}

function detectCollision(obstacle) {
  return !(currentGame.car.x > obstacle.x + obstacle.width ||
    currentGame.car.x + currentGame.car.width < obstacle.x ||
    currentGame.car.y > obstacle.y + obstacle.height
  );
}

function updateCanvas() {
  context.clearRect(0, 0, raceCanvas.clientWidth, raceCanvas.clientHeight);
  currentGame.car.draw();
  currentGame.obstanclesFrequency++;
  if (currentGame.obstanclesFrequency % 100 === 1) {
    const randomObstacleX = Math.floor(Math.random() * 450);
    const randomObstacleY = 0;
    const randomObstacleWidth = Math.floor(Math.random() * 50) + 20;
    const randomObstacleHeight = Math.floor(Math.random() * 50) + 20;

    const newObstacle = new Obstacle(randomObstacleX, randomObstacleY, randomObstacleWidth, randomObstacleHeight);

    currentGame.obstacles.push(newObstacle);
  }

  currentGame.obstacles.forEach((obstacles, index) => {
    obstacles.y += 1;
    obstacles.draw();

    //Check collision
    if (detectCollision(obstacles)) {
      currentGame.gameOver = true;
      currentGame.obstanclesFrequency = 0;
      currentGame.score = 0;
      currentGame.obstacles = [];
      document.getElementById("score").innerHTML = 0;
      document.getElementById("game-board").style.display = "none";
      cancelAnimationFrame(currentGame.animationId);
      alert('BOOOM! GAME OVER');
    }


    if (obstacles.y > raceCanvas.height) {
      currentGame.score++;
      document.getElementById("score").innerHTML = currentGame.score;
      currentGame.obstacles.splice(index, 1);
    }

  });
  if (!currentGame.gameOver) {
    currentGame.animationId = requestAnimationFrame(updateCanvas);
  }
}


//Car move event listener
document.addEventListener('keydown', (e) => {
  currentGame.car.moveCar(e.key);
})
