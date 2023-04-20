class Game {
  constructor(ctx, width, height, player) {
    this.ctx = ctx;
    this.width = width;
    this.height = height;
    this.player = player;
    this.intervalId = null;
    this.frames = 0;
    this.enemies = [];
    //road image
    const roadImg = new Image();
    roadImg.src = "../images/road.png";
    this.img = roadImg;
  }

  start() {
    this.intervalId = setInterval(this.update, 10);
  }

  update = () => {
    this.frames++;
    this.drawRoad();
    this.player.newPos();
    this.player.draw();
    this.updateEnemies();
    this.checkGameOver();
  };

  //Stops game
  stop() {
    clearInterval(this.intervalId);
  }

  //Clears Canvas
  drawRoad() {
    this.ctx.drawImage(this.img, 0, 0, 500, 700);
  }

  //Update Enemies
  updateEnemies() {
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].y += 1;
      this.enemies[i].draw(); 
    }

    if (this.frames % 200 === 0) {
      let y = Math.floor(Math.random() * (this.height - 50)) + 25;
      let minWidth = 20; 
      let maxWidth = 50;

      let width = Math.floor(
        Math.random() * (maxWidth - minWidth + 1) + minWidth
      );
      let height = 60;

      let minGap = 95;
      let maxGap = 200;

      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

      //Right obstacle
      this.enemies.push(
        new Component(this.width - width, y - height / 2, width, height, "red", this.ctx )
      );

      //Left obstacle
      this.enemies.push(
        new Component(this.width - width - gap - width, y - height / 2, width, height, "green", this.ctx)
      );
    }
  }

  checkGameOver() {
    const crashed = this.enemies.some((enemy) => {
      return this.player.crashWith(enemy);
    });

    if (crashed) {
      this.stop();
      this.fillStyle = "black";
      this.ctx.font = "55px Arial";
      this.ctx.fillText("Game Over loser", 0, this.height / 2);
    }
  }
}