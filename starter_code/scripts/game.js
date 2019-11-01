// GAME CLASS

class Game {
  constructor($canvas) {
    this.car = new Car(this);
    this.obstaclesArray = [];
    this.score = 0;
    this.highScore = 0;
    this.lost = false;

    this.context = $canvas.getContext("2d");

    this.timerStamp = 0;
    this.timerStamp2 = 0;
    this.timerStamp3 = 0;
    this.stripesSpeed = 10;

    this.steps = 5;

    this.obstaclesCreationSpeed = 8000;

    this.controls = new Controls(this);
    this.stripes = new Stripes(this);
    this.stripes.generateStripes();
    const CANVAS_HEIGHT = this.context.height;
    const CANVAS_WIDTH = this.context.width;
  }

  drawEverything() {
    const context = this.context;
    if (this.lost) {
      context.save();
      context.fillStyle = "black";
      context.fillRect(0, 0, 500, 500);
      context.font = "60px monospace";
      context.fillStyle = "#fff";
      context.fillText("YOU DIED!", 150, 100, 200, 200);
      context.font = "20px monospace";
      context.fillText("PRESS ENTER TO RESTART", 150, 170, 200, 200);
      context.restore();
    } else {
      context.fillStyle = "green";
      context.fillRect(0, 0, 500, 500);
      context.fillStyle = "grey";
      context.fillRect(50, 0, 400, 500);
      context.fillStyle = "white";
      context.fillRect(60, 0, 10, 500);
      context.fillRect(430, 0, 10, 500);
      this.stripes.drawStripes();
      this.car.drawCar();
      for (let item of this.obstaclesArray) {
        item.drawObstacle();
      }
      this.drawScore();
    }
  }

  drawScore() {
    this.context.font = "30px monospace";
    this.context.fillStyle = "#fff";
    this.context.fillText(this.score, 10, 40, 30, 30);
    this.context.fillText("High", 10, 80, 30, 30);
    this.context.fillText(this.highScore, 10, 110, 30, 30);
  }

  updateEverything(timestamp) {
    this.car.updateCar();

    if (this.timerStamp < timestamp - this.obstaclesCreationSpeed) {
        this.createObstacleInArray();
        this.timerStamp = timestamp;
      }

    if (this.timerStamp2 < timestamp - this.stripesSpeed) {
        this.updateObstaclesArray();
        this.stripes.moveStripes();
        this.timerStamp2 = timestamp;
    }

  }

  animation(timestamp) {
    this.drawEverything();
    this.updateEverything(timestamp);
    window.requestAnimationFrame(timestamp => this.animation(timestamp));
  }

  startGame() {
    document.querySelector(".game-intro").classList.add("none");
    document.getElementById("game-board").classList.remove("none");
    this.controls.setControls();
    this.animation();
  }

  loseGame() {
    if (this.score > this.highScore) {
      this.highScore = this.score;
    }
    this.score = 0;
    this.lost = true;
  }

  restartGame() {
    this.timerStamp = 0;
    this.timerStamp2 = 0;
    this.timerStamp3 = 0;
    this.steps = 5;
    this.stripesSpeed = 80;
    this.obstaclesSpeed = 8000;
    this.obstaclesArray = [];
    this.score = 0;
    this.lost = false;
  }

  createObstacleInArray() {
    const obstacleX = new Obstacle(this);
    obstacleX.randomizeObstacle(); // NEW OBSTACLE OBJECT
    this.obstaclesArray.push(obstacleX); // PUSH OBSTACLES TO ARRAY
  }

  updateObstaclesArray() {
    for (let item of this.obstaclesArray) {
      item.updateObstacle();
      if (item.positionY === 350) {
        this.checkCollisions();
      } else if (item.positionY > 500) {
        this.obstaclesArray.shift();
        this.score++;
        if (this.score % 2 === 0) {
          this.stripesSpeed = Math.floor(this.stripesSpeed * 0.7);
          this.obstaclesCreationSpeed = Math.floor(this.obstaclesCreationSpeed * 0.95);
          console.log("MAIS OBSTACULOS: ", this.obstaclesCreationSpeed);
          console.log("STRIPES:", this.stripesSpeed);
        }

        if (this.score == 10) {
            this.stripesSpeed = 10;
            this.steps = 10;
        }
      }
    }
  }

  checkCollisions() {
    const carMin = this.car.posX;
    const carMax = this.car.posX + 50;

    const obstacleMin = this.obstaclesArray[0].positionX;
    const obstacleMax =
      this.obstaclesArray[0].positionX + this.obstaclesArray[0].size;

    if (
      !(
        (carMax < obstacleMin && carMin < obstacleMin) ||
        (carMax > obstacleMax && carMin > obstacleMax)
      )
    ) {
      this.loseGame();
    }
  }
}
