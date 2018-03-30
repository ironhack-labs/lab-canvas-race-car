function Obstacles(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.anchuraMinima = 100;
    this.anchuraMaxima = 340;
    this.posMinimaX = 90;
    this.posMaximaX = 370;
    this.y = 0;
    this.x = this.numeroRandom(this.posMinimaX, this.posMaximaX);
    this.w = this.numeroRandom(this.anchuraMinima, this.anchuraMaxima);
    this.h = 30;
}

Obstacles.prototype.drawRect = function (x, y, width, height) {
    this.ctx.fillRect(x, y, width, height);
}; 
Obstacles.prototype.drawObs = function () { 
    this.ctx.fillStyle = 'red';
    this.drawRect(this.x, this.y, this.w, this.h);    
};

Obstacles.prototype.numeroRandom = function(min, max) {
    return num = Math.round(Math.random() * (max - min) + min);
    
}