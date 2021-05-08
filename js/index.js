const background = new Background(0,0, canvas.width, canvas.height, "../images/road.png");
const player = new Player(230, 600, 40, 80, "../images/car.png");
const obstacles = [];

let frames  = 0
let requestID;

//set the timing for the new obstacle to generate (between 5 and 10 seconds)
let nextObstacleFrame = getRandomNumber(300, 600);

function startGame() {
  requestID =  requestAnimationFrame(update)
}

function update() {
  frames++;
  ctx.clearRect(0,0,canvas.width,canvas.height)

  background.draw();
  background.score();
  player.draw();
  updateObstaclesPosition();
  checkPlayerCollition();

  //Create the new obstacle
  if(frames % nextObstacleFrame === 0) {
    createObstacle();
    //Set the timing for the next obstacle to spawn
    nextObstacleFrame += getRandomNumber(300, 600);
  }

  //Increase score
  if(frames % 30 === 0) {
    background.points++;
  }

  if(requestID){
    requestID =  requestAnimationFrame(update)
  }
}

function updateObstaclesPosition() {
  obstacles.forEach((obstacle, index, object) => {
    //update obstacle position;
    obstacle.positionY += 1;

    //If the obstacle is outside the canvas, delete it.
    if(obstacle.positionY >= canvas.height) {
      object.splice(index,1);
    }
    else {
      obstacle.draw();
    }
  });
}

function checkPlayerCollition() {
  obstacles.forEach(obstacle => {
    if(player.coillision(obstacle)) {
      background.gameOver();
      requestID=undefined;
    }
  });
}

function createObstacle(){
  const obtacleLength = getRandomNumber(100,200);
  const obstaclePosition = getRandomNumber(40,465 - obtacleLength);

  obstacles.push(new Obstacle(obtacleLength,0,obstaclePosition,20));
}

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    createObstacle();
  };
};

addEventListener("keydown", (event)=>{
  //Moverse a la izquierda
  if(event.key === "ArrowLeft" && player.positionX>30){
      player.positionX -= 20;
  }

  //Moverse a la derecha
  if(event.key === "ArrowRight" && player.positionX<430){
      player.positionX += 20
  }
  
})
