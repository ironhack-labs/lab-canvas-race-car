class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    //this.invisible = invisible;
    //this.invisible2 = invisible2;
    this.intervalId = null;
    this.obstacles = [];
    this.frames = 0;
  }
  start() {
    this.intervalId = setInterval(this.update, 1000 / 60);
  }
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
  score() {
    const points = Math.floor(this.frames / 20);
    this.ctx.font = "20px monospace";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Score: ${points}`, 395, 50);
  }
  update = () => {
    this.frames++;
    this.clear();
    this.player.newPos();
    this.player.draw();
    //this.invisible.draw();
    //this.invisible2.draw();
    //this.checkCollisionLeft();
    //this.checkCollisionRight();
    this.updateObstacles();
    this.checkGameOver();
    this.score();
  };
  stop() {
    clearInterval(this.intervalId);
  }
  checkGameOver() {
    const crashed = this.obstacles.some((obstacle) => {
      return this.player.crashWith(obstacle);
    });

    if (crashed) {
      this.stop();
    }
  }
  /*checkCollisionLeft() {
    const crashedInv = this.invisible.some((inv) => {
      return this.player.crashWithLeft(inv);
    });

    if (crashedInv) {
      player.speedX = 0;
      player.speedY = 0;
    }
  }
  checkCollisionRight() {
    const crashedInv = this.invisible2.some((inv) => {
      return this.player.crashWithRight(inv);
    });

    if (crashedInv) {
      player.speedX = 0;
      player.speedY = 0;
    }
  }*/
  updateObstacles() {
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].y += 1;
      this.obstacles[i].draw();
    }

    //controlar a dificuldade do jogo ao colocar mais obstaculos a aparecer
    if (this.frames % 180 === 0) {
      let y = 0;
      //calculate height of the columns/obstacles
      let minWidth = 75;
      let maxWidth = 300;

      let width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );

      //these variables control the size of the gap between obstacles
      let minGap = 50;
      let maxGap = 250;

      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

      //add obstacles to the array
      //left obstacles
      this.obstacles.push(
        new Component(0 + gap, 0, width, 50, "red", this.ctx)
      );
    }
  }
}
