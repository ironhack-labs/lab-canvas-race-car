  class Obstacles {
    constructor(canvas){
        this.size = 20;
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = Math.floor(Math.random()*500);
        this.y = 0;
        this.speed = 5;
    }

update(){
    this.x = Math.floor(Math.random()*500);
}

draw(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, 25, 10);
  }
  



}

