function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.w = this.canvas.getAttribute("width");
  this.h = this.canvas.getAttribute("height");
  this.ctx = this.canvas.getContext("2d");

  this.road = [
    new Road(this.canvas, this.ctx),
    new Road(this.canvas, this.ctx)
  ];

  this.car = new Car(this.canvas, this.ctx);

  this.obstacle = [
  ];
}

Game.prototype.startGame = function() {
  setInterval(
    function() {
      this.clear();
      this.dibujarCarretera();
      this.car.movimiento();
      this.car.draw();
      this.dibujarObstaculos();
    }.bind(this),
    10
  );

  setInterval(
      this.anadirObstaculos.bind(this), 10000
    )
  
};


Game.prototype.anadirObstaculos = function(){
  this.obstacle.push (new Obstacle(this.canvas, this.ctx));
}
Game.prototype.dibujarCarretera = function() {
  var d = 5;
  this.road[0].y += d;
  if (this.road[0].y > this.h) {
    this.road[0].y = 0;
  }
  this.road[1].y = this.road[0].y - this.h;

  this.road[0].draw();
  this.road[1].draw();
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.w, this.canvas.h);
};

Game.prototype.dibujarObstaculos = function() {
  var d = 1;

  for (var i = 0; i < this.obstacle.length; i++) {
    this.obstacle[i].y += d;

    this.obstacle[i].draw();
  }
};
