const controlledApp = {
  name: "Controls app",
  description: "Canvas app for basic shapes controlling",
  version: "1.0.0",
  license: undefined,
  author: "Germán Álvarez",
  canvasTag: undefined,
  ctx: undefined,
  frames: 0,
  road: undefined,
  car: undefined,
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
    this.canvasTag.setAttribute("width", this.canvasSize.w);
    this.canvasTag.setAttribute("height", this.canvasSize.h);
  },

  createRoad() {
    this.road = new Road(this.ctx, 0, 0, 500, 700, "road.png");
  },

  createCar() {
    this.car = new Car(this.ctx, 200, 200, 100, 100, "car.png");
  },

  setEventListeners() {
    document.onkeydown = (e) => {
      e.keyCode === this.keys.left ? this.car.move("left") : null;
      e.keyCode === this.keys.right ? this.car.move("right") : null;
    };
  },

  drawAll() {
    setInterval(() => {
      this.frames++;
      this.frames % 50 === 0 ? this.generateObstacle() : null;
      this.clearScreen();
      this.road.draw();
      this.car.draw();
    }, 70);
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  generateObstacle() {},
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
