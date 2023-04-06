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
    const movement = 5;
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

class CollisionHandler {
  constructor(car) {
    this.car = car;
  }

  checkCollision(obstacle) {
    const carRect = {
      x: this.car.x,
      y: this.car.y,
      width: this.car.width,
      height: this.car.height,
    };
    const obstacleRect = {
      x: obstacle.x,
      y: obstacle.y,
      width: obstacle.width,
      height: obstacle.height,
    };

    return (
      carRect.x < obstacleRect.x + obstacleRect.width &&
      carRect.x + carRect.width > obstacleRect.x &&
      carRect.y < obstacleRect.y + obstacleRect.height &&
      carRect.y + carRect.height > obstacleRect.y
    );
  }
}

class Score {
  constructor() {
    this.value = 0;
  }

  increase() {
    this.value++;
  }

  draw(ctx) {
    ctx.font = "20px Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`Score: ${this.value}`, 10, 30);
  }
}

class GameOver {
  draw(ctx, canvasWidth, canvasHeight) {
    ctx.font = "40px Arial";
    ctx.fillStyle = "red";
    ctx.fillText("Game Over!", canvasWidth / 2 - 100, canvasHeight / 2);
  }
}

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.animationId = null;
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
    this.carMoving = null;

    this.obstacles = [];
    this.obstacleTimer = 0;
    this.maxObstacles = 3;
    this.obstacleSpeed = 1;

    this.collisionHandler = new CollisionHandler(this.car);
    this.score = new Score();
    this.gameOver = new GameOver();
    this.isGameOver = false;

    this.initKeyListeners();
  }

  initKeyListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowLeft":
          this.carMoving = "left";
          break;
        case "ArrowRight":
          this.carMoving = "right";
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft" && this.carMoving === "left") {
        this.carMoving = null;
      } else if (e.key === "ArrowRight" && this.carMoving === "right") {
        this.carMoving = null;
      }
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
    const update = () => {
      if (this.isGameOver) {
        this.gameOver.draw(this.ctx, this.canvas.width, this.canvas.height);
        return;
      }

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

        if (this.collisionHandler.checkCollision(obstacle)) {
          this.isGameOver = true;
          break;
        }
      }

      if (this.carMoving) {
        this.car.move(this.carMoving);
      }

      // Remove obstacles that have moved off the screen
      this.obstacles = this.obstacles.filter(
        (obstacle) => obstacle.y < this.canvas.height
      );

      if (!this.isGameOver) {
        if (this.obstacleTimer % 60 === 0) {
          this.score.increase();
        }
        this.score.draw(this.ctx);
      }

      this.animationId = requestAnimationFrame(update);
    };

    update();
  }

  start() {
    this.updateCanvas();
  }

  animationLoop() {
    requestAnimationFrame(() => {
      this.animationLoop();
    });
  }

  restart() {
    this.isGameOver = false;
    this.obstacles = [];
    this.obstacleTimer = 0;
    this.score.value = 0;
    this.car.x = this.canvas.width / 2 - this.car.width / 2;
    this.car.y = this.canvas.height - this.car.height - 20;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId); // Cancel the previous game loop
    }
    this.updateCanvas(); // Restart the game loop
  }
}

window.onload = () => {
  const canvas = document.getElementById("canvas");
  const game = new Game(canvas);

  game.road.img.onload = () => {
    game.car.img.onload = () => {
      const startButton = document.getElementById("start-button");
      startButton.onclick = () => {
        if (game.isStarted) {
          game.restart();
        } else {
          game.start();
          game.isStarted = true;
        }
        startButton.textContent = "Restart";
      };
    };
  };
};
