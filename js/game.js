

//ROAD GAME

class RoadGame {
  constructor() {
    this.player;
    this.enemies = [];
    this.isGameOver = false;
    this.width = canvas.width;
    this.height = canvas.height;
    this.counter = 0;
    this.isGameOver = false;
  }

  drawBackground() {
    let imgBackground = new Image();
    imgBackground.src = "../images/road.png";
    ctx.drawImage(imgBackground, 0, 0, this.width, this.height);
  }



  startLoop() {
    this.player = new Car();

    const loop = () => {
      ++this.counter;
      if (this.counter > 100) {
        this.enemies.push(new Obstacle());
        this.counter = 0;
      }

      this.drawBackground();
      this.updateCanvas();
      this.clearCanvas();
      this.drawCanvas();
      this.checkAllCollisions();
      if (!this.isGameOver) {
        window.requestAnimationFrame(loop);
      }
    };

    window.requestAnimationFrame(loop);
  }

  updateCanvas() {
    this.drawBackground();
    this.player.drawCar();
    this.enemies.forEach((enemy) => {
      enemy.update();
    });
  }

  clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  drawCanvas() {
    this.drawBackground();
    this.player.drawCar();
    this.enemies.forEach((enemy) => {
      enemy.draw();
    });
  }


  checkAllCollisions() {
    let player = this.player;
    let enemies = this.enemies;
    enemies.forEach((enemy, index) => {
      player.checkCollisionEnemy(enemy, index);
    });
  }

  gameOverCallback(callback) {
    this.onGameOver = callback;
  }
}
