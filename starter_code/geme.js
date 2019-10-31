class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.counter = 0;

    this.height = 600;
    this.width = 520;
    this.intervalID = undefined;

    this.carX = this.width / 2.27;
    this.carY = this.height - 160;
    this.lefLimit = 60;
    this.rightLimit = 400;
    this.speed = 2;

    this.obstaclesArr = [];
    this.rate = 200;

    this.keyState = {
      keyLeft: false,
      keyRight: false
    };

    this.endGam = false;
  }

  starGame() {
    this.canvas.setAttribute("height", this.height);
    this.canvas.setAttribute("width", this.width);
    let intervalID = setInterval(() => {
      this.clearCanvas();
      this.drawBackground();
      this.drawCar();
      this.drawObstacle();
      this.moveCar();
      this.updateObstacles();
      this.obstacleCol();

      document.addEventListener("keydown", e => {
        e.preventDefault();
        if (e.keyCode === 37) {
          this.keyState.keyLeft = true;
        }
        if (e.keyCode === 39) {
          this.keyState.keyRight = true;
        }
      });
      document.addEventListener("keyup", e => {
        e.preventDefault();
        if (e.keyCode === 37) {
          this.keyState.keyLeft = false;
        }
        if (e.keyCode === 39) {
          this.keyState.keyRight = false;
        }
      });
      console.log(this.obstaclesArr);

      this.counter++;
      if (this.endGam === true) {
        clearInterval(intervalID);
      }
    }, 1000 / 60);
  }

  drawBackground() {
    //Green
    this.ctx.beginPath();
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.width, this.height);
    this.ctx.closePath();

    //Grey
    this.ctx.beginPath();
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(50, 0, this.width - 100, this.height);
    this.ctx.closePath();

    //White left
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(60, 0, 15, this.height);
    this.ctx.closePath();

    //White right
    this.ctx.beginPath();
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(445, 0, 15, this.height);
    this.ctx.closePath();

    //Center white line
    this.ctx.beginPath();
    this.ctx.lineWidth = 8;
    this.ctx.setLineDash([50, 40]);
    this.ctx.moveTo(this.width / 2, this.height + this.counter);
    this.ctx.lineTo(this.width / 2, -this.height);
    this.ctx.strokeStyle = "white";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  drawCar() {
    let carImg = new Image();
    carImg.src = "./images/car.png";
    this.ctx.drawImage(carImg, this.carX, this.carY, 60, 120);
  }

  moveCar() {
    if (this.keyState.keyLeft && this.carX > this.lefLimit) {
      this.carX -= this.speed;
    }
    if (this.keyState.keyRight && this.carX < this.rightLimit) {
      this.carX += this.speed;
    }
  }

  drawObstacle() {
    if (this.counter % this.rate === 0) {
      this.obstaclesArr.push(new Obs());
    }
  }
  updateObstacles() {
    this.obstaclesArr.forEach(ob => {
      ob.y++;
      this.ctx.beginPath();
      this.ctx.fillStyle = "red";
      this.ctx.fillRect(ob.x, ob.y, ob.w, ob.h);
      this.ctx.closePath();
    });
  }

  obstacleCol() {
    this.obstaclesArr.forEach(ob => {
      if (
        this.carX + 60 > ob.x &&
        this.carX < ob.x + ob.w &&
        this.carY < ob.y + ob.h &&
        this.carY + 120 > ob.y
      ) {
        this.endGam = true;
        alert("GAME OVER");
      }
    });
  }

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.height, this.width);
  }
}

class Obs {
  constructor() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    this.x = this.randomInt(15, 400);
    this.y = 0;
    this.w = this.randomInt(60, 300);
    this.h = 25;
  }
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}
