const drawingApp = {
  canvasTag: undefined,
  ctx: undefined,
  canvasSize: {
    w: undefined,
    h: undefined,
  },

  init(id) {
    this.canvasTag = document.getElementById(id);
    this.ctx = this.canvasTag.getContext("2d");
    this.setDimensions();
    this.drawRectangle();
    this.drawContinuousLines();
    this.drawDashedLines();
  },

  setDimensions() {
    this.canvasSize.w = 500;
    this.canvasSize.h = 700;
    this.canvasTag.setAttribute("width", this.canvasSize.w);
    this.canvasTag.setAttribute("height", this.canvasSize.h);
  },

  drawRectangle() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h);
  },

  drawContinuousLines() {
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(55, 0);
    this.ctx.lineTo(55, this.canvasSize.h);
    this.ctx.closePath();
    this.ctx.stroke();

    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvasSize.w - 55, 0);
    this.ctx.lineTo(this.canvasSize.w - 55, this.canvasSize.h);
    this.ctx.closePath();
    this.ctx.stroke();
  },

  drawDashedLines() {
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.setLineDash([30, 20]);
    this.ctx.moveTo(this.canvasSize.w / 2 - this.ctx.lineWidth / 2, 0);
    this.ctx.lineTo(
      this.canvasSize.w / 2 - this.ctx.lineWidth / 2,
      this.canvasSize.h
    );
    this.ctx.stroke();
  },

  drawImage(imageName) {
    const imgInstance = new Image();
    imgInstance.src = `images/${imageName}`;
    imgInstance.onload = () =>
      this.ctx.drawImage(
        imgInstance,
        this.canvasSize.w / 2 - 25,
        this.canvasSize.h - 150,
        50,
        100
      );
  },
};

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
    if (dir === "left" && this.carPos.x > 65 + 20) {
      this.carPos.x -= 20;
    }
    if (dir === "right" && this.carPos.x < 405 - 20) {
      this.carPos.x += 20;
    }
  }
}

const controlledApp = {
  canvasTag: undefined,
  ctx: undefined,
  frames: 0,
  car: undefined,
  keys: {
    left: 37,
    right: 39,
  },
  init(id) {
    this.canvasTag = document.getElementById(id);
    this.ctx = this.canvasTag.getContext("2d");
    this.createCar();
    this.drawAll(id);
    this.setEventListeners();
  },

  createCar() {
    this.car = new Car(
      this.ctx,
      drawingApp.canvasSize.w / 2 - 25,
      drawingApp.canvasSize.h - 150,
      50,
      100,
      "car.png"
    );
  },

  setEventListeners() {
    document.onkeydown = (e) => {
      e.keyCode === this.keys.left ? this.car.move("left") : null;
      e.keyCode === this.keys.right ? this.car.move("right") : null;
    };
  },

  drawAll(id) {
    setInterval(() => {
      this.frames++;
      this.clearScreen();
      drawingApp.init(id);
      this.car.draw();
    }, 70);
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, drawingApp.canvasSize.w, drawingApp.canvasSize.h);
  },
};
