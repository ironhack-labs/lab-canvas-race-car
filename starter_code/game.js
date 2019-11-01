class Game {
  constructor($canvas) {
    this.$canvas = document.querySelector('canvas');
    this.ctx = this.$canvas.getContext('2d');
    this.obstacles = [];
    this.player = new Carobject(this);
    this.background = new Background(this);
    this.controls = new Controls(this);
    this.speed = 3000;
    this.obstacleTimer = 0;
    // this.timestamp = 0;
    this.width = this.$canvas.width;
    this.height = this.$canvas.height;
    // this.isAlive = true;
  }

  drawEverything() {
    this.background.drawBackground();
    this.player.drawCar();

    // for (let i = 0; i <= this.obstacles.length; i++) {
    //   if (this.obstacles.length !== 0) {
    //     this.obstacles[i].dr
    //   }
    //   }
    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles.length !== 0) {
        this.obstacles[i].draw();
        this.obstacles[i].updatePosition();
      }
    }
    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i].y >= 700) {
        this.obstacles.pop();
      }
    }
  }

  spawnObstacle() {
    this.obstacles.unshift(new Obstacles(this));
  }

  animation(timestamp) {
    console.log(this.obstacles);
    if (lose === false) {
      this.drawEverything();
      y += 8;

      if (this.obstacleTimer < timestamp - this.speed) {
        this.spawnObstacle();
        this.obstacleTimer = timestamp;
      }

      myReq = window.requestAnimationFrame(timestamp =>
        this.animation(timestamp)
      );
      isItRunning = true;
    } else {
      this.loseGame();
      cancelAnimationFrame(myReq);
      isItRunning = false;
    }
  }

  start() {
    if (isItRunning === false) {
      this.animation(0);
      this.controls.startControls();
    }
  }

  restart() {
    if (isItRunning === false) {
      this.animation(0);
    }
  }

  loseGame() {
    this.ctx.font = '45px arial';
    this.ctx.fillText('You LOSe BITCH', 100, 300);
    y = 0;
    this.obstacles = [];
    this.obstacleTimer = 0;
    lose = false;
  }
}
