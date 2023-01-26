class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.intervalId = null;
    this.frames = 0;
    this.enemies = [];
    this.points = 0;
  }
  start() {
    this.intervalId = setInterval(this.update, 1000 / 60);
  }
  update = () => {
    this.frames += 1;
    this.clear();
    this.player.newPos();
    this.player.draw();
    this.changeEnemies();
    this.checkGameOver();
    this.countPoints();
    this.drawScore();
  };
  stop() {
    clearInterval(this.intervalId);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  changeEnemies() {
    this.enemies.forEach((el) => {
      el.y += 10;
      el.draw();
    });

    if (this.frames % 30 === 0) {
      let randomSize = Math.floor(Math.random() * 250 - 100) + 100;
      let randomX =
        Math.floor(Math.random() * this.width - randomSize) + randomSize;

      this.enemies.push(new Enemy(randomX, 0 - 20, randomSize, 20, this.ctx));
    }
  }

  countPoints() {
    if (this.frames % 30 === 0) {
      this.points++;
    }
  }

  drawScore() {
    ctx.font = "16px Calibri";
    ctx.fillRect(5, 5, 70, 20);
    ctx.fillStyle = "white";
    ctx.fillText(`Score: ${this.points}`, 10, 20);
  }

  checkGameOver() {
    const crashed = this.enemies.some((enemy) => {
      return this.player.crashWith(enemy);
    });
    if (crashed) {
      this.stop();
      ctx.font = "32px Arial";
      ctx.fillStyle = "black";
      ctx.fillRect(canvas.width / 2 - 125, canvas.height / 2 - 75, 250, 150);
      ctx.fillStyle = "red";
      ctx.fillText(
        `GAME OVER!`,
        canvas.width / 2 - 100,
        canvas.height / 2 - 25
      );
      ctx.font = "20px Arial";
      ctx.fillStyle = "white";
      ctx.fillText(
        `You scored ${this.points} points`,
        canvas.width / 2 - 85,
        canvas.height / 2 + 50
      );
    }
  }
}
