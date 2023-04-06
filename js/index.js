// Handles drawing of the road on the canvas
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

// Handles drawing of the car on the canvas, and moving it
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

  // Moves the car to the left or right
  move(direction) {
    const movement = 5; // How many pixels to move the car each time
    switch (direction) {
      case "left":
        if (this.x > 10) {
          // Prevents the car from going off the canvas, and accounts for the car's width
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

// Handles drawing of the obstacles on the canvas, and moving them
class Obstacle {
  constructor(ctx, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.width =
      Math.floor(Math.random() * (canvasWidth * 0.45)) + canvasWidth * 0.3; // Random width between 30% and 75% of the canvas width
    this.height = 20;
    this.x = Math.floor(Math.random() * (canvasWidth - this.width)); // Random x position, so that the obstacle doesn't go off the canvas
    this.y = 0;
    this.color = "red";
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move(speed) {
    this.y += speed; // Moves the obstacle down the canvas by increasing the y position
  }
}

// Handles checking for collisions between the car and the obstacles
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

    // Checks if the car's rectangle overlaps with the obstacle's rectangle
    return (
      carRect.x < obstacleRect.x + obstacleRect.width && // Checks if the car's left side is to the left of the obstacle's right side
      carRect.x + carRect.width > obstacleRect.x && // Checks if the car's right side is to the right of the obstacle's left side
      carRect.y < obstacleRect.y + obstacleRect.height && // Checks if the car's top side is above the obstacle's bottom side
      carRect.y + carRect.height > obstacleRect.y // Checks if the car's bottom side is below the obstacle's top side
    );
  }
}

// Handles drawing of the score on the canvas
class Score {
  constructor() {
    this.value = 0;
  }

  increase() {
    this.value++;
  }

  draw(ctx) {
    ctx.font = "20px Sans-Serif";
    ctx.fillStyle = "Black";
    ctx.fillText(`Score: ${this.value}`, 10, 30);
  }
}

// Handles drawing of the game over message on the canvas
class GameOver {
  draw(ctx, canvasWidth, canvasHeight) {
    ctx.font = "40px Sans-Serif";
    ctx.fillStyle = "red";
    ctx.fillText("Game Over!", canvasWidth / 2 - 100, canvasHeight / 2);
  }
}

// Handles the game logic, could probably be refactored into smaller classes
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
    this.maxObstacles = 4; // Maximum number of obstacles on the canvas at the same time. Can be increased to make the game harder.
    this.obstacleSpeed = 2; // How fast the obstacles move down the canvas. Can be increased to make the game harder.

    this.collisionHandler = new CollisionHandler(this.car); // Passes the car to the collision handler, so that it can check for collisions
    this.score = new Score();
    this.gameOver = new GameOver();
    this.isGameOver = false;

    this.initKeyListeners(); // Adds event listeners for the arrow keys
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

    // Stops the car from moving when the arrow key is released
    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft" && this.carMoving === "left") {
        this.carMoving = null;
      } else if (e.key === "ArrowRight" && this.carMoving === "right") {
        this.carMoving = null;
      }
    });
  }

  // Spawns a new obstacle by pushing it to the obstacles array
  spawnObstacle() {
    const obstacle = new Obstacle(
      this.ctx,
      this.canvas.width,
      this.canvas.height
    );
    this.obstacles.push(obstacle);
  }

  // Handles the game loop
  updateCanvas() {
    const update = () => {
      if (this.isGameOver) {
        this.gameOver.draw(this.ctx, this.canvas.width, this.canvas.height);
        return; // Stops the game loop if game over is true
      }

      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); // Clears the canvas
      this.road.draw(); // Draws the road image
      this.car.draw(); // Draws the car image

      // Spawns a new obstacle every 200 frames, can be increased to make the game harder
      this.obstacleTimer++;
      if (
        this.obstacleTimer % 200 === 0 &&
        this.obstacles.length < this.maxObstacles
      ) {
        this.spawnObstacle();
      }

      // Moves and draws the obstacles
      for (const obstacle of this.obstacles) {
        obstacle.move(this.obstacleSpeed);
        obstacle.draw();

        if (this.collisionHandler.checkCollision(obstacle)) {
          // Checks for collisions between the car and the obstacles
          this.isGameOver = true;
          break;
        }
      }

      // Moves the car if the carMoving variable is not null
      if (this.carMoving) {
        this.car.move(this.carMoving);
      }

      // Remove obstacles that have moved off the screen
      this.obstacles = this.obstacles.filter(
        (obstacle) => obstacle.y < this.canvas.height
      );

      // Draws the score
      if (!this.isGameOver) {
        if (this.obstacleTimer % 60 === 0) {
          this.score.increase();
        }
        this.score.draw(this.ctx);
      }

      // Calls the update function again to create the game loop. Animation id is used to cancel the animation loop when the game is over. Request animation frame is used to create a smooth animation.
      this.animationId = requestAnimationFrame(update);
    };

    update(); // Starts the game loop
  }

  // Starts the game
  start() {
    this.updateCanvas();
  }

  // Handles restarting the game
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

// Starts the game when the start button is clicked
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
