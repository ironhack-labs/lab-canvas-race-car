let currentGame;
let currentCar;
let isGameStarted = false;
let isGameOver = false;
let score = 0
document.getElementById('game-board').style.display = 'none';
document.getElementById('game-over').style.display = 'none';
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
window.onload = function() {


document.getElementById('start-button').onclick = () => {
  startGame();
  isGameStarted = true;
};

document.getElementById('restart-game-over').onclick = () => {
  startGame();
  isGameStarted = true;
  document.getElementById('game-over').style.display = 'none';
};
document.addEventListener('keydown', (e) => {
  currentGame.car.Move(e.key);
});

function startGame() {
  document.getElementById('game-board').style.display = 'block';
  currentGame = new Game();
  currentCar = new Car();
  currentGame.car = currentCar;
  currentGame.car.Start();
  update();
  requestAnimationFrame(update);
}

function detectCollision() {
  if(isGameStarted){
  currentGame.obstacles.forEach((obstacle) => {
    score ++
    if (
      currentGame.car.x < obstacle.x + obstacle.width &&
      currentGame.car.x + currentGame.car.width > obstacle.x &&
      currentGame.car.y < obstacle.y + obstacle.height &&
      currentGame.car.y + currentGame.car.height > obstacle.y
    ) {
      // collision detected!
      console.log('collision detected');
      isGameOver = true;
    } 
  });
  }
}

let obstaclesFrequency = 0;
function update() {
  ctx.clearRect(0, 0, 600, 800);
  currentGame.car.Start();
  obstaclesFrequency++;

  //draw obstacle
  if (obstaclesFrequency % 400 == 1) {
    let randomX = Math.floor(Math.random() * 390) + 90;
    let randomWidth = Math.floor(Math.random() * 350)+ 50;
    if(randomX + randomWidth > 480){
        randomWidth = 480 - randomX;
    }
    currentGame.obstacles.push(new Obstacle(randomX, 20, randomWidth, 80));
  }

  currentGame.obstacles.forEach((obstacle) => {
    obstacle.y += 1;
    obstacle.create();
  }
  )

  detectCollision();
  if(isGameOver) { 
    document.getElementById('score').innerHTML = `Your final score is ${currentGame.obstacles.length - 2}`;
    document.getElementById('game-over').style.display = 'block';
    currentGame.obstacles = [];
    document.getElementById('game-board').style.display = 'none';
    isGameOver = false;
  }

  requestAnimationFrame(update);

}
}
