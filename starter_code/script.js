window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    RaceCar.init("mycanvas");

    // RaceCar.drawRoad();
    console.log("entra");
  }
};
//creamos el objeto juego
const RaceCar = {
  version: "1.0",
  name: "Race Car",
  description: "Game Race car super divertido en HTML5 Canvas",
  author: "Lucia",
  canvasDom: undefined,
  ctx: undefined,
  winW: undefined,
  winH: undefined,
  init: function(id) {
    this.canvasDom = document.getElementById(id);
    this.ctx = this.canvasDom.getContext("2d");
    this.setDimensions();
    // this.setHandlers();

    this.car = new CarPlayer(this.ctx, "images/car.png", this.winW, this.winH);
    this.motor();
    this.setEventListeners();
    this.obstacles = [new Obstacules(this.ctx, this.winW, this.winH)];
    // this.obstacles.makeObstacle();
  },

  motor: function() {
    this.count = 0;
    this.setInterval = setInterval(() => {
      this.drawRoad();
      this.drawGreenLines();
      this.drawWhiteLines();
      this.drawDashedLines();
      this.drawCar();
      this.obstacles.forEach(obstacle => {
        obstacle.makeObstacle();
        obstacle.drawMovingObstacle();
      });
      if (this.count % 100 == 0) {
        this.obstacles.push(new Obstacules(this.ctx, this.winW, this.winH));
      }
      this.count++;
    }, 1000 / 60);
  },

  setDimensions: function() {
    this.canvasDom.setAttribute("width", 500);
    this.canvasDom.setAttribute("height", window.innerHeight);
    this.winH = window.innerHeight;
    this.winW = 500;
  },

  setHandlers: function() {
    window.onresize = () => this.setDimensions();
  },

  drawRoad: function() {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, this.winW, this.winH);
  },

  drawGreenLines: function() {
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 80;

    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(0, this.winH);
    this.ctx.stroke();

    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 80;
    this.ctx.beginPath();
    this.ctx.moveTo(this.winW, 0);
    this.ctx.lineTo(this.winW, this.winH);
    this.ctx.stroke();
  },

  drawWhiteLines: function() {
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 10;

    this.ctx.beginPath();
    this.ctx.moveTo(65, 0);
    this.ctx.lineTo(65, this.winH);
    this.ctx.stroke();

    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    this.ctx.moveTo(this.winW - 65, 0);
    this.ctx.lineTo(this.winW - 65, this.winH);
    this.ctx.stroke();
  },

  drawDashedLines: function() {
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 10;
    this.ctx.setLineDash([60, 30]);

    this.ctx.beginPath();
    this.ctx.moveTo(250 - 5, 0);
    this.ctx.lineTo(250 - 5, this.winH);
    this.ctx.stroke();
    this.ctx.setLineDash([0, 0]);
  },
  drawCar: function() {
    this.car.draw();
  },
  setEventListeners: function() {
    document.onkeydown = e => {
      console.log(e.keyCode);
      if (e.keyCode === 37) this.car.moveLeft();
      if (e.keyCode === 39) this.car.moveRight();
    };
  }
  /*   drawMovingObstacle: function() {
    setInterval(( )=> {

    } */
};

class CarPlayer {
  constructor(ctx, url, winW, winH) {
    this.ctx = ctx;

    this.img = new Image();
    this.img.src = url;

    this.winW = winW;
    this.winH = winH;
    this.posX = this.winW / 2 - 25;
    this.vel = 8;

    this.carWidth = 50;
  }
  draw() {
    this.ctx.drawImage(
      this.img,
      this.posX,
      this.winH - 100,
      this.carWidth,
      100
    );
  }

  moveLeft() {
    if (this.posX > 0) this.posX -= this.vel;
  }

  moveRight() {
    if (this.posX + this.carWidth < this.winW) this.posX += this.vel;
  }
}

class Obstacules {
  constructor(ctx, winW, winH) {
    this.ctx = ctx;
    this.winW = winW;
    this.winH = winH;
    this.positionY = -30;
    if (Math.floor(Math.random() * 2) == 1) {
      this.positionX = 0;
    } else {
      this.positionX = this.winW / 2;
    }
    console.log(this.positionX);
    this.vel = 2;
  }
  makeObstacle() {
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.positionX, this.positionY, this.winW / 2, 30);
  }
  drawMovingObstacle() {
    this.positionY += this.vel;
    console.log(this);
  }
}
