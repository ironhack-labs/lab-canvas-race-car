
class Obstacles {
  constructor(game) {
    this.game = game;
    this.width = 200;
    this.height = 20;
    this.position = {
      x: 0,
      y: 0,
    };
    this.velocity = 2;
  };

  randomPosition() {
    this.position.x = Math.floor(Math.random() * 5) * 50 + 50;
    this.width = Math.floor(Math.random()*150)+50;
    this.position.y = 0;
  };

  drawObstacles() {
    this.game.context.fillStyle = 'rgb(128, 0, 0)';
    this.game.context.fillRect(this.position.x, this.position.y, this.width, this.height);
  };


movingObstacleDown() {
    this.position.y += this.velocity;
  }

reset() {
  this.position.y = 0;
  this.position.x = 0;
}

};




