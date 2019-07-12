// CANVAS DEL JUEGO

const Game = {
  car: undefined,
  canvas: undefined,
  ctx: undefined,
  fps: 60,
  obstacles: [], //array de obstaculos
  framesCounter: 0, //Contador de fps que han transcurido
  canW: undefined,
  canH: undefined,

  // INICIALIZACION DEL JUEGO

  //Creamos una funcion init que se lanzara solo una vez al abrirse la pagina. La llamaremos en index.js
  init: function(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
    this.canvas.width = window.innerWidth * 0.33;
    this.canvas.height = window.innerHeight * 0.96;
    this.start();
    this.car = new Car(this.canvas.width / 2 - 25, this.canvas.height - 125, 50, 100, this.ctx);

    //this.start(); //Llamamos a start en init para que comience automaticamente.
  },

  start: function() {
    this.interval = setInterval(() => {
      this.drawBackground();
      this.car.drawCar();
    }, 1000 / this.fps);
  },

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////
  drawBackground: function() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.canvas.width * 0.1, this.canvas.height);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.canvas.width - this.canvas.width * 0.1, 0, this.canvas.width * 0.1, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(60, 0, this.canvas.width * 0.02, this.canvas.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(this.canvas.width - this.canvas.width * 0.02 - 60, 0, this.canvas.width * 0.02, this.canvas.height);
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([20, 20]);
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvas.width / 2, 0);
    this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
    this.ctx.stroke();
  }
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////
