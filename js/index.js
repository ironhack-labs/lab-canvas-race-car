class Road {
  constructor(ctx, src, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = src;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
  }

  draw() {
    this.ctx.drawImage(this.img, 0, 0, this.canvasWidth, this.canvasHeight);
  }
}

class Car {
  constructor(ctx, src, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.img = new Image();
    this.img.src = src;
    this.width = 50;
    this.height = 100;
    this.x = canvasWidth / 2 - this.width / 2;
    this.y = canvasHeight - this.height - 20;
    this.canvasWidth = canvasWidth;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  move(direction) {
    const movement = 20;
    switch (direction) {
      case "left":
        if (this.x > 10) {
          this.x -= movement;
        }
        break;
      case "right":
        if (this.x < this.canvasWidth - (this.width + 10)) {
          this.x += movement;
        }
        break;
    }
  }
}

class Obstacle {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.width = Math.floor(Math.random() * (canvasWidth * 0.6 - 50) + 50);
    this.height = 20;
    this.x = Math.floor(Math.random() * (canvasWidth - this.width));
    this.y = 0;
    this.color = "red";
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(speed) {
    this.y += speed;
  }
}

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.road = new Road(
      this.ctx,
      "./images/road.png",
      canvas.width,
      canvas.height
    );
    this.car = new Car(
      this.ctx,
      "./images/car.png",
      canvas.width,
      canvas.height
    );

    this.obstacles = [];
    this.obstacleTimer = 0;
    this.maxObstacles = 3;
    this.obstacleSpeed = 1;

    this.initKeyListeners();
  }

  initKeyListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.car.move("left");
          break;
        case "ArrowRight":
          this.car.move("right");
          break;
      }
      this.updateCanvas();
    });
  }

  spawnObstacle() {
    const obstacle = new Obstacle(
      this.ctx,
      this.canvas.width,
      this.canvas.height
    );
    this.obstacles.push(obstacle);
  }

  updateCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.road.draw();
    this.car.draw();

    this.obstacleTimer++;
    if (
      this.obstacleTimer % 200 === 0 &&
      this.obstacles.length < this.maxObstacles
    ) {
      this.spawnObstacle();
    }

    for (const obstacle of this.obstacles) {
      obstacle.move(this.obstacleSpeed);
      obstacle.draw();
    }

    // Remove obstacles that have moved off the screen
    this.obstacles = this.obstacles.filter(
      (obstacle) => obstacle.y <= this.canvas.height
    );
  }

  start() {
    this.updateCanvas();
    this.animationLoop();
  }

  animationLoop() {
    requestAnimationFrame(() => {
      this.updateCanvas();
      this.animationLoop();
    });
  }
}

window.onload = () => {
  const canvas = document.getElementById("canvas");
  const game = new Game(canvas);

  game.road.img.onload = () => {
    game.car.img.onload = () => {
      document.getElementById("start-button").onclick = () => {
        game.start();
      };
    };
  };
};
