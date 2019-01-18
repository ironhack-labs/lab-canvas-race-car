var myObstacles = [];
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
    this.interval = setInterval(updateGameArea, 16);
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
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
}

function updateGameArea() {
  myGameArea.clear();
  myGameArea.start();
  player.update();
}

var player;
var imgCar = new Image();
imgCar.src = "images/car.png";

function startGame() {
  myGameArea.start();
  player = new Component(30, (30 * imgCar.height) / imgCar.width, 185, 610);
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case 37:
        console.log("player moves left");
        player.moveLeft();
        break;
      case 39:
        console.log("player moves right");
        player.moveRight();
        break;
    }
  };
  document.onkeyup = function() {
    console.log("player stops");
    player.stopMove();
  };
};
