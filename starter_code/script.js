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
    this.drawRoad();
    this.drawGreenLines();
    this.drawWhiteLines();
    this.drawDashedLines();
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
    this.ctx.strokeStyle = "wihte";
    this.ctx.lineWidth = 10;
    this.ctx.setLineDash([60, 30]);

    this.ctx.beginPath();
    this.ctx.moveTo(250 - 5, 0);
    this.ctx.lineTo(250 - 5, this.winH);
    this.ctx.stroke();
  }
};
