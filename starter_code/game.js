function Game(canvasId) {

  this.canvas = document.getElementById(canvasId);
   this.w = this.canvas.getAttribute("width");
  this.h = this.canvas.getAttribute("height");
   this.ctx = this.canvas.getContext("2d");

  this.road = new Road( this.canvas,this.ctx);

  this.car = new Car(this.canvas, this.ctx);

  setInterval(function(){
    debugger;
    this.car.draw();
    this.road.draw();
    this.car.movimiento();
   // hay que crearla
   // hay que hacerla
  }.bind(this), 10)
}

Game.prototype.startGame = function() {
  // var canvas = document.createElement("canvas");
  // document.getElementById("game-board").appendChild(canvas);
  // canvas.id = "road";
  // canvas.setAttribute("width", 400);
  // canvas.setAttribute("height", 600);
};

Game.prototype.dibujarCarretera = function() {

  this.road.draw();
};




