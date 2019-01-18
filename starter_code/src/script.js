var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function() {
    this.canvas.width = 400;
    this.canvas.height = 700;
    this.ctx = this.canvas.getContext("2d");
    document.body.appendChild(
      this.canvas,
      document.querySelector("#game-board")
    );
    this.interval = setInterval(updateGameArea, 16);
  },
  drawRoad: function() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 30, this.canvas.height);
    this.ctx.fillRect(this.canvas.width - 30, 0, 30, this.canvas.height);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(30, 0, 10, this.canvas.height);
    this.ctx.fillRect(this.canvas.width - 40, 0, 10, this.canvas.height);
    this.ctx.fillRect(50, 0, 300, this.canvas.height);
    this.ctx.lineWidth = 3;
    this.ctx.setLineDash([15, 15]);
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvas.width / 2, 0);
    this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  frames: 0
};

class Component {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }
  update() {
    this.ctx = myGameArea.ctx;
    this.ctx.drawImage(imgCar, this.x, this.y, this.width, this.height);
  }
  moveLeft() {
    this.speedX -= 1;
    this.newPosition();
  }
  moveRight() {
    this.speedX += 1;
    this.newPosition();
  }
  stopMove() {
    this.speedX = 0;
  }
  newPosition() {
    this.x += this.speedX;
  }
  crashWith(obstacle) {
    if((this.y + this.height < obstacle.y) ||
      (this.y > obstacle.y + obstacle.height) ||
      (this.x + this.width < obstacle.x) ||
      (this.x > obstacle.x + obstacle.width))
         {return false;}
    else {return true;}
  }
}

class Obstacle extends Component {
  constructor(width, height, x, y, color){
    super(width, height, x, y);
    this.color = "red"
  }
  update(){
    this.ctx = myGameArea.ctx;
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

}

var myObstacles = [];
function addObstacle(){
  minWidth = 70;
  maxWidth = 150;
  width = Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
  minGap = 50;
  maxGap = 200;
  gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
  myObstacles.push(new Obstacle (width, 15, 0, 0));
  myObstacles.push(new Obstacle (myGameArea.canvas.width-width-gap, 15, width+gap, 0));
}

function updateGameArea() {
  myGameArea.clear();
  myGameArea.drawRoad();
  player.update();
  myGameArea.frames ++;
  if (myGameArea.frames % 100 === 0){
    addObstacle();
  }
  for (i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].y += 2;
    myObstacles[i].update();
  }
  var crashed = myObstacles.some(function(obstacle){
    return player.crashWith(obstacle);
  })
  if (crashed) myGameArea.stop();
}

var player;
var imgCar = new Image();
imgCar.src = "images/car.png";

function startGame() {
  myGameArea.start();
  myGameArea.drawRoad();
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    player = new Component(30, (30 * imgCar.height) / imgCar.width, 185, 610);
    startGame();
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
};
