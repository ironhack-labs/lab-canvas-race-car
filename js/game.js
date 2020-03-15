class Game {
    constructor(canvas) {
      this.canvas = canvas;
      this.context = canvas.getContext("2d");
      this.width = canvas.width;
      this.height = canvas.height;
      this.background = new Background(this);
      this.player = new Player(this);
      console.log(this.player);
      this.player.setControls();
      this.frame = 0;
      this.obstaclesArray = [];
      this.scoreArray = [];
      this.animationId;
      this.gameStatus = "game";
    }
  
    start() {
      if (this.gameStatus === "game") {
        this.animation();
      }
    }
    draw() {
      this.context.clearRect(0, 0, this.width, this.height);
      this.background.draw();
      this.player.draw();
      for (let obstacle of this.obstaclesArray) {
        obstacle.draw();
      }
    }
  
    update() {
      this.frame++;
      this.player.update();
      if (this.frame % 120 === 0) {
        this.obstaclesArray.push(new Obstacles(this));
      }
      this.obstacleLogic();
    }
  
    animation() {
      this.draw();
      this.update();
      this.animationId = window.requestAnimationFrame(() => {
        if (this.gameStatus === "game") {
          this.animation();
        }
        if (this.gameStatus === "game-over") {
          window.cancelAnimationFrame(this.animationId);
          this.gameOver();
        }
      });
    }
    checkCollision(player, object) {
      if (object) {
        // console.log(`Player -
        // x - ${player.x}
        // y - ${player.y}
        // w - ${player.width}
        // h - ${player.height}
        // obstacle
        // x - ${object.x}
        // y - ${object.y}
        // w - ${object.width}
        // h - ${object.height}`);
        return (
          player.x < object.x + object.width &&
          player.x + player.width > object.x &&
          player.y < object.y + object.height &&
          player.y + player.height > object.y
        );
      }
    }
    gameOver() {
      this.context.save();
      this.context.fillStyle = "black";
      this.context.fillRect(0, 0, this.width, this.height);
      this.context.fillStyle = "red";
      this.context.font = "30px Arial";
  
      this.context.fillText(`GAME OVER!`, this.width / 3, this.height / 3);
      this.context.fillText(
        `YOU AVOIDED ${this.scoreArray.length} OBSTACLE(S)`,
        this.width / 8,
        this.height / 2
      );
  
      this.context.restore();
      this.player.carCrashAudio.play();
    }
    // YOUR AVOIDED ${this.scoreArray.length} OBSTACLES`,
  
    obstacleLogic() {
      for (let obstacle of this.obstaclesArray) {
        obstacle.update();
        console.log(this.checkCollision(this.player, obstacle));
        if (this.checkCollision(this.player, obstacle)) {
          this.gameStatus = "game-over";
        }
  
        if (obstacle.y > this.height) {
          this.obstaclesArray.shift();
          this.scoreArray.push(1);
        }
      }
    }
  }