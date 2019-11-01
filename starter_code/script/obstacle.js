class Obstacle {
  constructor (game) {
    this.game = game;
    this.obstacleX = 0;
    this.obstacleY = 0;
  }
  paint () {
    const context = this.game.context;
    context.save();
    context.fillStyle = 'darkred';
    context.fillRect(30, 100, 150, 20);
    context.fillRect(200, 50, 100, 20);
    context.restore();
  }
/* 
  loop () {
    setTimeout(() => {
      clear();
      this.paint();
      iteration++;
      iteration %= 8;
      loop();
    }, 200);
  }
   */
}

