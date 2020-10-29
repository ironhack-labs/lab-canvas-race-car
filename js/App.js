const controlledApp = {
  name: "Controls app",
  description: "Canvas app for basic shapes controlling",
  version: "1.0.0",
  license: undefined,
  author: "Germán Álvarez",
  canvasTag: undefined,
  ctx: undefined,
  frames: 0,
  ball: undefined,
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
    this.createBall();
    this.drawAll();
    this.setEventListeners();

    console.log(this.ctx); // Puedes ver el contexto por consola
  },

  setDimensions() {
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight,
    };
    this.canvasTag.setAttribute("width", this.canvasSize.w);
    this.canvasTag.setAttribute("height", this.canvasSize.h);
  },

  createRoad() {
    this.road = new Road(
      this.ctx,
      this.canvasSize.w,
      this.canvasSize.h,
      100,
      100,
      "road.png"
    );
  },

  createBall() {
    this.ball = new Ball(this.ctx, 200, 200, 100, 100, "road.png");
  },

  setEventListeners() {
    document.onkeydown = (e) => {
      e.keyCode === this.keys.left ? this.ball.move("left") : null;
      e.keyCode === this.keys.right ? this.ball.move("right") : null;
    };
  },

  drawAll() {
    setInterval(() => {
      this.frames++;
      this.frames % 50 === 0 ? this.generateObstacle() : null;
      this.clearScreen();
      this.ball.draw();
    }, 70);
  },

  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  generateObstacle() {
    console.log("NUEVO OBSTÁCULO! CUIDAO QUE VA!");
  },
};

class Ball {
  constructor(ctx, ballPosX, ballPosY, ballWidth, ballHeight, ballImage) {
    this.ctx = ctx;
    this.ballPos = {
      x: ballPosX,
      y: ballPosY,
    };
    this.ballSize = {
      w: ballWidth,
      h: ballHeight,
    };
    this.imageName = ballImage;
    this.ballInstance = undefined;
    this.init();
  }

  init() {
    this.ballInstance = new Image();
    this.ballInstance.src = `images/${this.imageName}`;
  }

  draw() {
    this.ctx.drawImage(
      this.ballInstance,
      this.ballPos.x,
      this.ballPos.y,
      this.ballSize.w,
      this.ballSize.h
    );
  }

  move(dir) {
    dir === "left" ? (this.ballPos.x -= 20) : null;
    dir === "right" ? (this.ballPos.x += 20) : null;
  }
}
