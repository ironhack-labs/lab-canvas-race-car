class Obstacle {
  constructor(game, width, xOffset) {
    this.game = game;
    this.xPos = xOffset;
    this.yPos = 0;
    this.width = width;
    this.height = 20;
  }

  draw() {
    this.game.context.save()
    this.game.context.fillStyle = '#880000';
    this.game.context.fillRect(
      this.xPos - this.width/2,
      this.yPos - this.height/2,
      this.width, this.height);
  }
}