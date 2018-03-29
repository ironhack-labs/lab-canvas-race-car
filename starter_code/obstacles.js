function Obstacle (canvas, ctx){
this.canvas = canvas;
this.ctx = ctx;

this.x = Math.floor(Math.random()*this.canvas.width);
this.y = 0
this.ancho = Math.floor(Math.random()*this.canvas.width/2);
this.alto = 30;



}

Obstacle.prototype.draw = function (){
 
this.ctx.fillRect(this.x, this.y, this.ancho, this.alto)
}
