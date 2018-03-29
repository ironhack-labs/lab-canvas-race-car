function Obstacles(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
}

Obstacles.prototype.drawRect = function (x, y, width, height) {
    this.ctx.fillRect(x, y, width, height);
}; 
Obstacles.prototype.drawObstacules = function () { 

    
};