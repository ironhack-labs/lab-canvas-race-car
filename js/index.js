var gameOver = false
window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
  function startGame() {
    Game.init();
  }
  const Game = {
    ctx: undefined,
    canvasTag: undefined,
    FPS: 60,
    gameOver: false,
    oneSecond: 1000,
    canvasDimension: {
      w: 500,
      h: 700,
    },
    framesCounter: 0,
    framesReset: 120,
    score: 0,
    obstacles: [],
    init() {
      this.getCanvas();
      this.createBackground();
      this.game();
      this.car = new Car(this.ctx);
    },
    getCanvas() {
      this.canvasTag = document.querySelector("canvas");
      this.ctx = this.canvasTag.getContext("2d");
    },
    game() {
      this.interval = setInterval(() => {
        if(!gameOver){
          this.clearAll();
          this.drawAll();
          this.checkForPoints();
          this.isCollision()
          this.framesCounter++;
          if (this.framesCounter === this.framesReset) {
            this.obstacles.push(new Obstacle(this.ctx));
            this.framesCounter = 0;
          }
        }else{
          this.showFinalScreen()
        }
      }, this.oneSecond / this.FPS);
    },
    isCollision() {
      this.obstacles.forEach((obstacle) => {
        if (
          obstacle.pos.x < this.car.pos.x + this.car.dimension.w &&
          obstacle.pos.x + obstacle.dimension.w > this.car.pos.x &&
          obstacle.pos.y < this.car.pos.y + this.car.dimension.h &&
          obstacle.dimension.h + obstacle.pos.y > this.car.pos.y
        ) {
          gameOver = true
        }
      });
    },
    showFinalScreen(){
      this.ctx.fillStyle = "black";
      this.ctx.fillRect(
        0,
        0,
        this.canvasDimension.w,
        this.canvasDimension.h
      );
      this.drawText()
      this.ctx.fillText(`Game Over`, 200, 60);

    },
    checkForPoints() {
      this.obstacles.forEach((obstacle) => {
        if (obstacle.pos.y >= this.canvasDimension.h) {
          this.score++;
          this.obstacles.shift();
        }
      });
    },
    drawText() {
      this.ctx.font = "20px arial";
      this.ctx.fillStyle = "white";
      this.ctx.fillText(`Your Score: ${this.score}`, 75, 60);
    },
    createBackground() {
      this.background = new Image();
      this.background.src = "./images/road.png";
    },
    drawBackground() {
      this.ctx.drawImage(
        this.background,
        0,
        0,
        this.canvasDimension.w,
        this.canvasDimension.h
      );
    },
    clearAll() {
      this.ctx.clearRect(0, 0, this.canvasDimension.w, this.canvasDimension.h);
    },
    drawAll() {
      this.drawBackground();
      this.car.drawCar();
      this.obstacles.forEach((obstacle) => {
        obstacle.drawObstacle();
      });
      this.drawText();
    },
  };
};