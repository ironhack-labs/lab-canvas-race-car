class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.canvas = ctx.canvas;
    this.gameOver = false;
    this.background = new Background(ctx);
    this.obstacleLeft = new Obstacle(ctx, 65, 0);
    this.obstacleRight = new Obstacle(ctx, 240, 350);
    this.player = new Player(ctx, 0, 0, 79, 159);
    this.obstacles = [this.obstacleLeft, this.obstacleRight];
  }

  startGameLoop() {
    const loop = () => {
      if (this.gameOver) return; // break out of this loop if the game is over.
      // add some kind of game over dom injection here?

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      this.background.move();
      this.background.draw();
      this.player.draw();

      Object.values(this.obstacles).forEach((obstacle) => {
        obstacle.move();
        obstacle.draw();
        console.log(this.checkCollisions(this.player, obstacle));
      });
      // Move Obs

      // checkCol

      requestAnimationFrame(() => {
        loop();
      });
    };
    loop();
  }

  // Collision Detection

  checkCollisions(player, obstacle) {
    if (
      this.rectIntersect(
        player.x,
        player.y,
        player.width,
        player.height,
        obstacle.x,
        obstacle.y,
        obstacle.width,
        obstacle.height
      )
    ) {
      // STOOOOP
      this.gameOver = true;
    }
  }

  // Calculation for Collision Detection....

  rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
      return false;
    }
    return true;
  }

  carMovement(e) {
    switch (e.key) {
      case "ArrowUp":
      case "w":
        this.player.y -= 10;
        break;
      case "ArrowDown":
      case "s":
        this.player.y += 10;
        break;
      case "ArrowLeft":
      case "a":
        this.player.x -= 10;
        break;
      case "ArrowRight":
      case "d":
        this.player.x += 10;
        break;
    }
  }
}
