class Obstacle {
  constructor(ctx, gameWidth) {
    this.ctx = ctx;
    this.width = Math.floor(Math.random() * 200) + 60;
    this.height = 20;

    this.posX = Math.floor(Math.random() * 187) + 60;
    this.posY = 0;

    this.velY = 5;
  }

  draw() {
    // .fillRect(posX, posY, w, h);
    this.ctx.fillStyle = "blue";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    // .move
    this.move();
  }

  move() {
    // Change this.posX (Move horizontally)
    this.posY += this.velY;
  }
}
