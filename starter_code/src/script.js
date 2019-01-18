var myGameArea = new GameArea();
var myObstacles = [];
var player;
var imgCar = new Image();
imgCar.src = "images/car.png";

//creating new obstacles randomly
function addObstacle(){
  minWidth = 70;
  maxWidth = 200;
  width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
  minGap = 70;
  maxGap = 150;
  gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
  myObstacles.push(new Obstacle (width, 15, 0, 0));
  myObstacles.push(new Obstacle (myGameArea.canvas.width-width-gap, 15, width+gap, 0));
}

//updating the game area
function updateEverything() {
  myGameArea.clear();
  player.update();
  myGameArea.frames ++;
  myGameArea.score();
  //stop the game if the car crashed into an obstacle
  var crashed = myObstacles.some(function(obstacle){
    return player.crashWith(obstacle);
  })
  if (crashed) window.cancelAnimationFrame(animation);
}

function drawEverything(){
  myGameArea.drawRoad();
  player.draw();
  //add new obstacles regularly
  if (myGameArea.frames % 100 === 0){
    addObstacle();
  }
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].y += 2;
    myObstacles[i].update();
  }
}


function startGame() {
  console.log('starting')
  myGameArea.start();
  myGameArea.drawRoad();
  player.draw();
}
function animation(){
  updateEverything();
  drawEverything();
  window.requestAnimationFrame(animation);
}

document.getElementById("start-button").onclick = function() {
    player = new Component(30, (30 * imgCar.height) / imgCar.width, 185, 610);
    startGame();
    animation();
  };

document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        player.moveLeft();
        break;
      case 39:
        player.moveRight();
        break;
    }
  };

document.onkeyup = function() {
    player.stopMove();
};
