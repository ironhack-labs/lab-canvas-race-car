function Obstacles(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.anchuraMinima = 100;
    this.anchuraMaxima = 250;
    this.posMinimaX = 0,
    this.posMaximaX = 450;
}

Obstacles.prototype.drawRect = function (x, y, width, height) {
    this.ctx.fillRect(x, y, width, height);
}; 
Obstacles.prototype.drawObstacules = function () { 
    this.ctx.fillStyle = 'red';
    this.drawRect(this.x, this.y, 700, 900);


    
};







Obstacles.prototype.numeroRandom = function(min, max) {
    return num = Math.round(Math.random() * (max - min) + min);
    
  }