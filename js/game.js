class Game {
    constructor(ctx, width, height, player) {
      this.ctx = ctx;
      this.width = width;
      this.height = height;
      this.player = player;
      this.intervalId = null;
      this.frames = 0;
      this.enemies = [];
    }
  
    start() {
      this.intervalId = setInterval(this.update, 10);
    }
    update = () => {
      this.frames++;
      this.clear();
      this.player.newPos();
      this.player.draw();
  
      //   this.updateEnemies();
      //   this.checkGameOver();
    };
    //Stops the game
    stop() {
      clearInterval(this.intervalId);
    }
    //Clears canvas
    clear() {
      this.ctx.clearRect(0, 0, this.width, this.height);
    }
  
    //updates the enemies
    updateEnemies() {}
  
    checkGameOver() {
      const crashed = this.enemies.some((enemy) => {
        return this.player.crashWith(enemy);
      });
      if (crashed) {
        this.stop();
        this.fillStyle = "red";
        this.ctx.font = "72px Arial";
        this.ctx.fillText("Game Over", 0, this.height / 2);
      }
    }
  }