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
  this.obstacle = [];
}

Game.prototype.startGame = function() {
  this.clearInterval = setInterval(
    function() {
      this.clear();
      this.dibujarCarretera();
      this.car.movimiento();
      this.car.draw();
      this.dibujarObstaculos();
      this.colisiones();
    }.bind(this),
    10
  );
  setInterval(this.anadirObstaculos.bind(this), 5000);
};

Game.prototype.anadirObstaculos = function() {
  if(this.obstacle.length < 10)this.obstacle.push(new Obstacle(this.canvas, this.ctx));
};

Game.prototype.dibujarCarretera = function() {
  var d = 5;
  this.road[0].y += d;
  if (this.road[0].y > this.h) {
    this.road[0].y = 0;
  }
  this.road[1].y = this.road[0].y - this.h;
  this.road.forEach(e => e.draw());

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

Game.prototype.colisiones = function() {
  for (var i = 0; i < this.obstacle.length; i++) {
    if (this.car.x < this.obstacle[i].x + this.obstacle[i].ancho && this.car.x + this.car.ancho > this.obstacle[i].x &&
      this.car.y < this.obstacle[i].y + this.obstacle[i].alto && this.car.y + this.car.alto > this.obstacle[i].y) {
      clearInterval(this.clearInterval);
    } else {
      console.log("Enhorabuena Michael, le dice Kitt a David Haselhoff");
    }
    if( this.obstacle[i].y >= this.h){
      this.obstacle.splice(i, 1);
    }
  }
};


/////////////////////////////////////////////////////////////////////////////////
///////////////////// COLISIONES GÉNERICAS //////////////////////////////////////
/*if (object1.x < object2.x + object2.width && object1.x + object1.width > object2.x &&
  object1.y < object2.y + object2.height && object1.y + object1.height > object2.y) { }*/