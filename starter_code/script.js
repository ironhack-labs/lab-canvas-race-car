window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    dailyGame.init("myCanvas");
  };

  // function startGame() {
  //   this.init('myCanvas')
  // }
};

const dailyGame = {
  canvasDOMobj: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  car: new Image(),
  carVel: 10,
  carPoX: 250,
  //fps: 60,
  //framesCounter: 0,

  init: function(id) {
    this.canvasDOMobj = document.getElementById(id);
    this.ctx = this.canvasDOMobj.getContext("2d");
    this.setDimensions();
    this.drawFilledSquares("green", 0, 0, 600, 900);
    this.drawFilledSquares("grey", 50, 0, 500, 900);
    this.drawFilledSquares("white", 60, 0, 15, 900);
    this.drawFilledSquares("white", 525, 0, 15, 900);
    this.drawStyleLine();
    this.setEventListeners();
    this.showImage("./images/car.png");
  },

  setDimensions: function() {
    this.width = 600;
    this.height = 900;
    this.canvasDOMobj.setAttribute("width", this.width);
    this.canvasDOMobj.setAttribute("height", this.height);
  },

  drawFilledSquares: function(color, x, y, w, h) {
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  },

  drawStyleLine: function() {
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 10;
    this.ctx.setLineDash([60, 30]);
    this.ctx.beginPath();
    this.ctx.moveTo(this.width / 2, 50);
    this.ctx.lineTo(this.width / 2, this.height);
    this.ctx.stroke();
  },

  /*showCar: function(src) {
    this.car.src = src;
    this.ctx.clearRect(0, 0, 600, 900);
    this.resetScreen();
    this.ctx.drawImage(this.car, this.carPoX, 750, 70, 150);
  },*/

  showImage: function(src) {
    let img = new Image();
    img.src = src;
    img.onload = () => this.ctx.drawImage(img, 225, 500);
  },

  setEventListeners: function() {
    document.onkeydown = e => {
      e.keyCode === 37 ? this.car.goLeft() : null;
      e.keyCode === 39 ? this.car.goRight() : null;
    };
  },

  goLeft: function() {
    this.carPosX -= this.carVel;
  },

  goRight: function() {
    this.carPoX += this.carVel;
  }
};
