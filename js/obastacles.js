class Obstacles {
  constructor(canvas, ctx, moveSpeed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.x = Math.floor(Math.random() * (this.canvas.width / 2)) + 20;
    this.y = 0;
    this.width = Math.floor(Math.random() * (this.canvas.width / 2)- 20) + 40;
    this.height = 10;
    this.moveSpeed = moveSpeed
  }
  draw() {
    this.ctx.fillRex(this.x, this.y, this.width, this.height);
  }
move(){
this.y += this.moveSpeed
}

}
