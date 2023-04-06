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
        if (this.x > 0) {
          this.x -= movement;
        }
        break;
      case "right":
        if (this.x < this.canvasWidth - this.width) {
          this.x += movement;
        }
        break;
    }
  }
}

class Obstacle {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  draw() {
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fillRect(this.x, this.y, this.width, this.height); // Draw a rectangle
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
    this.obstacle = new Obstacle(this.ctx, 200, 200, 50, 50); // Create a new obstacle
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

  updateCanvas() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.road.draw();
    this.car.draw();
    this.obstacle.draw();

    requestAnimationFrame(() => {
      this.updateCanvas();
    });
  }

  start() {
    this.updateCanvas();
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
