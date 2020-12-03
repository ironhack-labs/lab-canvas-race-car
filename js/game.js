class Game {
  constructor(canvas) {
    this.car;
    this.road;
    this.obstacles;
    this.canvas = canvas;
    this.context = this.canvas.getContext("2d");
    this.points = 0;
    this.obstaclesList = [];
    this.frames = 0;
    this.speed = 2;
    this.isOver = false;
    this.high;
    this.score;
  }

  start() {
    this.isOver = false;
    this.car = new Car(5);
    this.road = new Background();
    this.obstacles = new Obstacles(this.canvas, this.speed);
    this.score = new Score(canvas);

    const loop = () => {
      if (this.frames % 150 == 0) {
        this.obstaclesList.push(new Obstacles(this.canvas, this.speed));
      }
      if (this.frames % 1500 == 0) {
        this.speed += 0.5;
        console.log(`speed: ${this.speed}`);
      }

      this.checkAllCrashes();
      this.updateCanvas();
      this.drawCanvas();
      this.removeObs();

      if (!this.isOver) {
        window.requestAnimationFrame(loop);
        this.frames++;
      } else {
        var s = window.setInterval(this.gameOver, 10);
        let click = 0;
        document.getElementById("start-button").onclick = () => {
          if (click == 0) {
            clearInterval(s);
            this.start();
          }
          click++;
        };
      }
    };

    window.requestAnimationFrame(loop);
  }

  clearCanvas() {
    this.context.clearRect(0, 0, 500, 700);
  }

  drawCanvas() {
    this.road.createSelf();
    this.car.createSelf();
    this.score.draw();

    this.obstaclesList.forEach((obs) => {
      obs.drawObs();
    });
  }

  gameOver() {
    let context = document.getElementById("canvas").getContext("2d");
    context.fillStyle = "blue";
    context.font = "50px Georgia";
    context.fillText(`GAME OVER`, 140, 300);
  }

  updateCanvas() {
    this.obstaclesList.forEach((obstacle) => {
      obstacle.update();
    });

    if (this.frames % 200 == 0) {
      this.score.update();
    }
  }

  checkAllCrashes() {
    this.obstaclesList.forEach((obs, index) => {
      if (this.car.checkCrash(obs)) {
        this.obstaclesList.splice(index, 1);
        this.car.lives--;
        if (this.car.lives <= 0) {
          this.isOver = true;
          console.log("over");
          this.gameOver();
        }
      } else {
        this.isOver = false;
      }
    });
  }

  removeObs() {
    for (let i = 0; i < this.obstaclesList.length; i++) {
      if (this.obstaclesList[i].y > 700) {
        this.obstaclesList.splice(i, 1);
      }
    }
  }
}
