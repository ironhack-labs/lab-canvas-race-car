const controlledApp = {
  name: "Car Race App",
  description: "Canvas app for basic shapes controlling",
  version: "1.0.0",
  license: undefined,
  author: "Lara Lorenzo",
  canvasTag: undefined,
  ctx: undefined,
  frames: 0,
  road: undefined,
  car: undefined,
  obstacle: [],
  gameOver: false,
  keys: {
    left: 37,
    right: 39,
  },

  canvasSize: {
    w: 500,
    h: 700,
  },
  init(id) {
    console.log(window);
    this.canvasTag = document.getElementById(id);
    this.ctx = this.canvasTag.getContext("2d");
    this.setDimensions();
    this.createRoad();
    this.createCar();
    this.drawAll();
    this.setEventListeners();

    console.log(this.ctx);
  },

  setDimensions() {
    this.canvasSize = {
      w: window.innerWidth * 4,
      h: window.innerHeight,
    };
    this.canvasTag.setAttribute("width", this.canvasSize.w);
    this.canvasTag.setAttribute("height", this.canvasSize.h);
  },

  createRoad() {
    this.road = new Road(this.ctx, 0, 0, 500, 700, "road.png");
  },

  createCar() {
    this.car = new Car(this.ctx, 200, 200, 50, 100, "car.png");
  },

  setEventListeners() {
    document.onkeydown = (e) => {
      e.keyCode === this.keys.left ? this.ball.move("left") : null;
      e.keyCode === this.keys.right ? this.ball.move("right") : null;
    };
  },

  drawAll() {
    const interval = setInterval(() => {
      this.frames++;
      this.clearScreen();
      this.road.draw();
      this.car.draw();
      this.obstacle.draw();

      if (this.frames % 50 === 0) {
        this.generateObstacle();
      }
      this.obstacle.forEach((elm) => {
        elm.drawObstacle();
      });

      if (this.gameOver === true) {
        clearInterval(interval);
        this.endingTheGame();
      }
    }, 70);
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  generateObstacle() {
    const random1 = Math.floor(Math.random() * (this.canvasSize.w - 0)) + 0;
    const random2 = Math.floor(Math.random() * (this.canvasSize.w - 0)) + 0;

    const speed1 = Math.floor(Math.random() * (5 - 1)) + 1;
    const speed2 = Math.floor(Math.random() * (5 - 1)) + 1;

    const obstacleA = new Obstacle(
      this.ctx,
      this.canvasSize,
      random1,
      0,
      100,
      100,
      speed1
    );
    const obstacleB = new Obstacle(
      this.ctx,
      this.canvasSize,
      random2,
      0,
      100,
      100,
      speed2
    );

    this.obstacle.push(obstacleA, obstacleB);
  },

  collisionTakePlace() {
    this.obstacle.forEach((elm) => {
      if (
        elm.obstaclePosX < this.car.carPosX + this.car.carSize.w &&
        elm.obstaclePosX + elm.obstacleSize.w > this.car.carPosX &&
        elm.obstaclePosY < this.car.carPosY + this.car.carSize.h &&
        elm.obstaclePosY + elm.obstacleSize.h > this.car.carPosY
      ) {
        this.gameOver = true;
      }
    });
  },
};

class Road {
  constructor(ctx, roadPosX, roadPosY, roadWidth, roadHeight, roadImage) {
    this.ctx = ctx;
    this.roadPos = {
      x: roadPosX,
      y: roadPosY,
    };
    this.roadSize = {
      w: roadWidth,
      h: roadHeight,
    };
    this.imageName = roadImage;
    this.roadInstance = undefined;
    this.init();
  }

  init() {
    this.roadInstance = new Image();
    this.roadInstance.src = `images/${this.imageName}`;
  }

  draw() {
    this.ctx.drawImage(
      this.roadInstance,
      this.roadPos.x,
      this.roadPos.y,
      this.roadSize.w,
      this.roadSize.h
    );
  }
}

class Car {
  constructor(ctx, carPosX, carPosY, carWidth, carHeight, carImage) {
    this.ctx = ctx;
    this.carPos = {
      x: carPosX,
      y: carPosY,
    };
    this.carSize = {
      w: carWidth,
      h: carHeight,
    };
    this.imageName = carImage;
    this.carInstance = undefined;
    this.init();
  }

  init() {
    this.carInstance = new Image();
    this.carInstance.src = `images/${this.imageName}`;
  }

  draw() {
    this.ctx.drawImage(
      this.carInstance,
      this.carPos.x,
      this.carPos.y,
      this.carSize.w,
      this.carSize.h
    );
  }

  move(dir) {
    dir === "left" ? (this.carPos.x -= 20) : null;
    dir === "right" ? (this.carPos.x += 20) : null;
  }
}

class Obstacle {
  constructor(
    ctx,
    obstaclePosX,
    obstaclePosY,
    obstacleWidth,
    obstacleHeight,
    obstacleSpeed,
    obstacleImage
  ) {
    this.ctx = ctx;
    this.canvasSize = {
      w: this.canvasSize.w,
      y: this.canvasSize.h,
    };
    this.obstaclePos = {
      x: obstaclePosX,
      y: obstaclePosY,
    };
    this.obstacleSize = {
      w: obstacleWidth,
      h: obstacleHeight,
    };

    this.obstacleSpeed = obstacleSpeed;
    this.obstacleInstance = undefined;

    this.init();
  }

  init() {
    this.obstacleInstance =
      ((this.ctx.fillStyle = "garnet"),
      this.ctx.fillRect(this.canvasSize.w, this.canvasSize.h, 400, 40));
  }

  draw() {
    this.ctx.drawImage(
      this.obstacleInstance,
      this.obstaclePos.x,
      this.obstaclePos.y,
      this.obstacleSize.w,
      this.obstacleSize.h
    );
  }

  moveObstacle() {
    this.obstaclePos.y += this.obstacleSpeed;
  }
}
