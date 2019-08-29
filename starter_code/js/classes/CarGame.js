class CarGame {
  constructor(canvas, ctxWidth, ctxHeight) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.w = ctxWidth;
    this.w2 = ctxWidth / 2;
    this.h = ctxHeight;
    this.h2 = ctxHeight / 2;
    this.intervalID = undefined;
    this.counter = 0;
    this.speed = 8;
    this.obstacles = [];
    this.carSpeed = 8;
    this.points = 0;

    this.car = new Car(this.ctx);

    this.setCanvasDimensions();
  }

  setCanvasDimensions() {
    this.canvas.setAttribute("width", `${this.w}px`);
    this.canvas.setAttribute("height", `${this.h}px`);
  }

  moveCar(keyCode) {
    this.car.move(keyCode);
  }

  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  start() {
    window.addEventListener("keydown", e => {
      this.moveCar(e.keyCode);
    });

    window.addEventListener("keyup", e => {
      this.car.movements.left = false;
      this.car.movements.right = false;
    });

    this.intervalID = setInterval(() => {
      this.refresh();
      this.drawRoad();

      if (this.counter % 150 === 0) {
        this.obstacles.push(
          new Obstacle(this.ctx, this.randomInt(60, 300), 0, this.speed)
        );
      }

      if (this.obstacles.length !== 0) this.drawObstacles();

      this.car.draw();

      if (this.car.movements.right) {
        if (this.car.x >= 360) this.car.x = 360;
        else this.car.x = this.car.x + 1 * this.carSpeed;
      }

      if (this.car.movements.left) {
        if (this.car.x <= 40) this.car.x = 40;
        else this.car.x = this.car.x - 1 * this.carSpeed;
      }

      this.counter++;
    }, 1000 / 60);
  }

  drawObstacles() {
    this.obstacles.forEach((obstacle, idx) => {
      
      if (
        this.car.x + 100 > obstacle.x &&
        this.car.x < obstacle.x + 200 &&
        this.car.y - 20 <= obstacle.y * this.speed
      ) {
        clearInterval(this.intervalID)
      }

      if (obstacle.y * this.speed >= this.h) {
        this.obstacles.splice(idx, 1);
        this.points++;
        this.updatePoints(this.points)
      }

      obstacle.draw();
    });
  }

  drawRoad() {
    // Paint the green background
    this.ctx.beginPath();
    this.ctx.rect(0, 0, this.w, this.h);
    this.ctx.fillStyle = "#008800";
    this.ctx.fill();

    // Paint the road
    this.ctx.beginPath();
    this.ctx.rect(40, 0, w - 80, h);
    this.ctx.fillStyle = "#AAAAAA";
    this.ctx.fill();

    // Paint the left white line of the road
    this.ctx.beginPath();
    this.ctx.rect(60, 0, 10, h);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fill();

    // Paint the right white line of the road
    this.ctx.beginPath();
    this.ctx.rect(w - 70, 0, 10, h);
    this.ctx.fillStyle = "#FFFFFF";
    this.ctx.fill();

    this.drawRoadCenterLines();
  }

  updatePoints(points) {
    document.getElementById('points').textContent = points
  }

  drawRoadCenterLines() {
    const lineWidth = 10;
    const lineHeight = 50;
    const lineGap = 30

    this.ctx.beginPath();
    // this.ctx.rect(this.w2 - lineWidth / 2, 2 * this.counter, lineWidth, lineHeight);
    this.ctx.setLineDash([lineHeight, lineGap]);
    this.ctx.moveTo(this.w2 - lineWidth / 2, this.h + (this.counter * this.speed));
    this.ctx.lineTo(this.w2, 0);
    this.ctx.lineWidth = lineWidth;
    this.ctx.strokeStyle = "#FFFFFF";
    this.ctx.stroke();
    this.ctx.closePath();
  }

  refresh() {
    this.ctx.clearRect(0, 0, this.w, this.h);
  }
}
