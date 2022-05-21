class Game {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.road = null;
    this.car = null;
    this.obstacles = [];
    this.moveSpeed = 5;
    this.intervalId = null;
    this.frameCount = 0;
    this.init();
  }

  init() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
    document.getElementById("start-button").onclick = () => {
      this.startGame();
    };
  }

  startGame() {
    this.car = new Car(this.canvas, this.ctx);
    this.road = new Background(this.canvas, this.ctx, this.moveSpeed);
    this.drawAll();

    window.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          this.car.move("left");
          console.log(`Moving left!!`);
          break;
        case "ArrowRight":
          this.car.move("right");
          console.log(`Moving right!!`);

          break;
      }
    });
  }

  clear() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  drawAll() {
    if (this.frameCount % 60 === 0) {
      this.obstacles.push(new Obstacle(this.canvas, this.ctx, this.moveSpeed));
    }
    this.clear();
    this.road.draw();
    this.road.move();
    this.car.draw();

    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].draw();
      this.obstacles[i].move();
      if (this.collisionCheck(this.obstacles[i])) {
        cancelAnimationFrame(this.intervalId);
        return;
      }
    }

    this.frameCount++;
    this.intervalId = requestAnimationFrame(() => this.drawAll());
  }

  collisionCheck(obstacle) {
    const carFront = this.car.y;
    const carRear = carFront + this.car.height;
    const carLeft = this.car.x;
    const carRight = carLeft + this.car.width;
    const withinX =
      obstacle.x + obstacle.width > carLeft && obstacle.x < carRight;
    const withinY = obstacle.y > carFront && obstacle.y < carRear;

    return withinX && withinY;
  }
}
const newGame = new Game();

class Car {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = new Image();
    this.width = 100 / 2;
    this.height = 200 / 2;
    this.x = (this.canvas.width - this.width) / 2;
    this.y = this.canvas.height - this.height - 50;
    this.init();
  }

  init() {
    this.image.src = "./images/car.png";
    this.draw();
  }

  draw() {
    // console.log(this.image);
    this.ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move(direction) {
    if (direction === "left" && this.x > 20) {
      this.x -= 15;
    } else if (
      direction === "right" &&
      this.x < this.canvas.width - this.width / 4 - 60
    ) {
      this.x += 15;
    }
  }
}

class Background {
  constructor(canvas, ctx, moveSpeed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.image = new Image();
    this.y = 0;
    this.moveSpeed = moveSpeed;
    this.init();
  }

  init() {
    this.image.src = "./images/road.png";
    this.draw();
  }
  draw() {
    this.ctx.drawImage(this.image, 0, this.y, canvas.width, canvas.height);

    this.ctx.drawImage(
      this.image,
      0,
      this.y - this.canvas.height,
      canvas.width,
      canvas.height
    );
  }

  move() {
    this.y += this.moveSpeed;
    if (this.y >= this.canvas.height) {
      this.y = 0;
    }
  }
}

class Obstacle {
  constructor(canvas, ctx, moveSpeed) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = Math.floor((Math.random() * this.canvas.width) / 2 - 20) + 40;
    this.height = 15;
    this.x = Math.floor((Math.random() * this.canvas.width) / 2) + 20;
    this.y = 0;
    this.moveSpeed = moveSpeed;
  }

  draw() {
    //Tried different solid color for every obstacle, but the color changes every time the obstacle is redrawn
    //uncomment at your own risk!!
    // this.ctx.fillStyle = `rgb(
    //   ${Math.floor(Math.random() * 255)},
    //   ${Math.floor(Math.random() * 255)},
    //   0)`;
    this.ctx.fillStyle = "orange";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  move() {
    this.y += this.moveSpeed;
  }
}

// console.log(obstacleArray);

//Make render function to draw all objects, put inside interval in update, on gameStart() only run update.

//Make update function that handles all obstacle functions
