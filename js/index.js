const raceCanvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

document.getElementById('game-board').style.display = 'none';
document.getElementById('start-button').onclick = () => {
  document.getElementById('game-board').style.display = 'block';
  startGame();
};

let currentGame;

function startGame() {

  currentGame = new Game();

  
  let currentCar = new Car();


  currentGame.car = currentCar;

 
  currentGame.car.draw();
  updateCanvas();
}

function detectCollision(obs){
  return !(
    (currentGame.car.x > obs.x + obs.width) ||
    (currentGame.car.x + currentGame.car.width < obs.x) ||
    currentGame.car.y > obs.y + obs.height
  );
}

function updateCanvas() {
  context.clearRect(0, 0, raceCanvas.clientWidth, raceCanvas.clientHeight);
  currentGame.car.draw();
  currentGame.obstaclesFrequency ++;
  
  if (currentGame.obstaclesFrequency % 100 === 1){
    const randomObstacleX = Math.floor(Math.random()* 450);
    const randomObstacleY = 0;
    const randomObstacleWidth = Math.floor((Math.random()* 50) + 20);
    const randomObstacleHeight = Math.floor((Math.random()* 50) + 20);

    const newObstacle = new Obstacle(
      randomObstacleX,
      randomObstacleY,
      randomObstacleWidth,
      randomObstacleHeight
    )
    currentGame.obstacles.push(newObstacle);
  };

  currentGame.obstacles.forEach((obs, i) => {
    obs.y +=1;
    obs.draw();

    if (detectCollision(obs)){
      currentGame.gameOver = true;
      currentGame.obstaclesFrequency = 0;
      currentGame.score = 0;
      currentGame.obstacles = [];
      document.getElementById("score").innerHTML = 0;
      document.getElementById("game-board").style.display = "none";
      cancelAnimationFrame(currentGame.animationId);
      alert("BOOOM!! Game Over")
    }

    if (obs.y > raceCanvas.height){
      currentGame.score ++;
      document.getElementById("score").innerHTML = currentGame.score;
      currentGame.obstacles.splice(i, 1);
    }
  });

  if (!currentGame.gameOver){
    currentGame.animationId = requestAnimationFrame(updateCanvas);
  }
}

document.addEventListener("keydown", (e) => {
  currentGame.car.moveCar(e.key);
})
