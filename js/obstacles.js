  class Obstacles {
    constructor(canvas){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d");
        this.x = 0
        this.y = 0;
        this.size = 25
        this.speed = 2;
    }

update(){
    this.x = Math.floor(Math.random()*500);
    this.size = Math.floor(Math.random()*100);
}

draw(){
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.x, this.y, this.size, 50);
  }
  
}

