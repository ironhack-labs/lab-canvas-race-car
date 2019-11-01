class Obstacle {
  constructor (game) {
    this.game = game;
    this.width = 100;
    this.heigth = 20;
    this.obstaclePosition = {
      x: 0,
      y: 0
    }
  }
  
  randomObstaclePosition () {
    this.obstaclePosition.x = Math.floor(Math.random() * 4) * 50 + 50;
    this.obstaclePosition.y = 0;
  }

  paint () {
    const context = this.game.context;
    context.fillStyle = 'darkred';
    context.fillRect(this.obstaclePosition.x, this.obstaclePosition.y, this.width, this.heigth);
  }
}

