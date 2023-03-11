class Obstacle {
  constructor(ctx, gameWidth) {
    this.ctx = ctx;
    this.width = Math.floor(Math.random() * gameWidth - 100);
    this.height = 5;

    this.posX = gameWidth / 2;
    this.posY = 0;

    this.velY = 10;
  }

  draw() {
    // .fillRect(posX, posY, w, h);
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
    // .move
    this.move();
  }

  move() {
    // Change this.posX (Move horizontally)
    this.posY += this.velY;
  }
}
