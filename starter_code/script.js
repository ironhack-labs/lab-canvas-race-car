window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    CarGame.init("race-game");
    CarGame.drawRoad();
  }
};

const CarGame = {
  canvasDom: undefined,
  ctx: undefined,
  winW: undefined,
  winH: undefined,
  counterLine: 0,

  init: function(id) {
    this.canvasDom = document.getElementById(id);
    this.ctx = this.canvasDom.getContext("2d");
    this.winW = this.canvasDom.innerWidth;
    this.setDimensions();
    this.car = new Car(this.ctx, this.winH);
    this.movingCar();
    this.obstacle = new Obstacle(this.ctx, this.winH, this.winW);
    this.obstacle.loadObstacle1();
    this.obstacle.moveObstacle();
    this.setEventListeners();
  },

  setDimensions: function() {
    this.winW = window.innerWidth / 2;
    this.winH = window.innerHeight - 100;
    this.canvasDom.setAttribute("width", this.winW);
    this.canvasDom.setAttribute("height", this.winH);
  },

  drawRoad: function() {
    // fillRect(x, y, width, height)
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 30, this.winH);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(30, 0, 10, this.winH);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(50, 0, 400, this.winH);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(460, 0, 10, this.winH);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(470, 0, 30, this.winH);
  },
  // DRAW THE LINE
  drawLine1: function() {
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 7;
    this.ctx.setLineDash([30, 30]);
    this.ctx.beginPath();
    this.counterLine = 10;
    console.log(this, "hel");
    if (this.counterLine === 0) {
      console.log("sii");
      this.ctx.moveTo(250, 15);
      this.counterLine = 0;
    } else {
      this.ctx.moveTo(250, 0);
      this.counterLine = 5;
    }
    this.ctx.lineTo(250, this.winH);
    this.ctx.stroke();
  },

  clear: function() {
    this.ctx.clearRect(0, 0, this.winW, this.winH);
  },
  movingCar: function() {
    setInterval(() => {
      this.clear();
      this.drawRoad();
      this.drawLine1();
      this.car.loadCar();
      this.obstacle.loadObstacle1();
    }, 30);
  },

  setEventListeners: function() {
    document.onkeyup = e => {
      if (e.keyCode === 37) this.car.moveLeft();
      if (e.keyCode === 39) this.car.moveRight();
    };
  }
};

class Car {
  constructor(ctx, winH) {
    this.winH = winH;
    this.ctx = ctx;
    this.carPic = new Image();
    this.carPic.src = "images/car.png";
    this.carX = 235;
    this.carY = winH - 100;
  }

  loadCar() {
    this.ctx.drawImage(this.carPic, this.carX, this.carY, 30, 60);
  }
  moveLeft() {
    if (this.carX > 50) this.carX -= 15;
  }
  moveRight() {
    if (this.carX < 420) this.carX += 15;
  }
}

class Obstacle {
  constructor(ctx, winH, winW) {
    this.winH = winH;
    this.winW = winW;
    this.ctx = ctx;
    this.obsX = 0;
    this.obsY = 0;
  }

  loadObstacle1() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(0, this.obsY, this.winW / 3, 30);
    this.moveObstacle();
  }
  moveObstacle() {
    this.loadObstacle1;
    this.obsY += 2;
  }
}
