const Race = {
  version: "1.0",
  name: "Car Race",
  description: "app to Race Point Challenge",
  author: "Manuel",
  canvasDom: undefined,
  car: undefined,
  ctx: undefined,
  winW: undefined,
  winH: undefined,
  init: function(id) {
    this.canvasDom = document.getElementById(id);
    this.ctx = this.canvasDom.getContext("2d");
    this.setDimensions();
    this.setHandlers();
    this.car = new RaceCar(this.ctx, "images/car.png", 50, 50);
    this.drawAll();
    this.setEventListeners();
  },
  setDimensions: function() {
    this.canvasDom.setAttribute("width", window.innerWidth);
    this.canvasDom.setAttribute("height", window.innerHeight);
    this.winH = window.innerHeight;
    this.winW = window.innerWidth;
  },
  setHandlers: function() {
    window.onresize = () => this.setDimensions();
  },
  drawFilledSquares: function() {
    this.ctx.fillStyle = "grey"; // cambia los colores de relleno
    this.ctx.fillRect(10, 0, 900, this.winW);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 100, this.winW);
    this.ctx.fillRect(810, 0, 100, this.winW);
  },
  drawLine: function() {
    this.ctx.strokeStyle = "green";
    this.ctx.lineWidth = 20;
    this.ctx.setLineDash([60, 30]);

    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(450, 0);
    this.ctx.lineTo(450, this.winW);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.moveTo(450, 0);
    this.ctx.lineTo(450, this.winW);
    this.ctx.stroke();
    this.ctx.fill();
    this.ctx.closePath();
  },
  drawAll: function() {
    setInterval(() => {
      this.clear();
      this.drawFilledSquares();
      this.drawLine();
      this.car.draw();
    }, 1000);
  },
  setEventListeners: function() {
    document.onkeyup = e => {
      alert(e.keyCode);
      if (e.keyCode === 37) this.car.moveLeft();
      if (e.keyCode === 39) this.car.moveRight();
    };
  },
  clear: function() {
    this.ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }
};

class RaceCar {
  constructor(ctx, url, winW, winH) {
    this.ctx = ctx;

    this.img = new Image();
    this.img.src = url;
    this.winH = winH;

    this.winW = winW;
    this.posX = 450;
    this.vel = 10;

    this.carWidth = 700;
  }
  draw() {
    this.ctx.drawImage(this.img, this.posX, 700, 100, 100);
  }

  moveLeft() {
    if (this.posX > 0) this.posX -= this.vel;
  }

  moveRight() {
    if (this.posX < this.winW - this.carWidth) this.posX += this.vel;
  }
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    Race.init("mycanvas");
  }
};
