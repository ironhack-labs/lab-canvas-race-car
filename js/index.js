window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    raceCar.init("canvas");
  }
};

const raceCar = {
  name: "Racer car game",
  author: "Damián Lago",
  version: "1.0.0",
  license: undefined,
  description: "Aplication for drive a car",
  canvasId: undefined,
  ctx: undefined,
  car: undefined,
  obstacle: undefined,
  canvasSize: {
    w: 500,
    h: 700,
  },

  init(id) {
    this.canvasId = id;
    this.ctx = document.getElementById(this.canvasId).getContext("2d");
    this.drawCar();
    this.setEventListeners();
    console.log(this.ctx);
  },

  drawBoard() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 500, 700);
    this.ctx.fillStyle = "gray";
    this.ctx.fillRect(40, 0, 420, 700);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(430, 0, 10, 700);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(60, 0, 10, 700);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(430, 0, 10, 700);

    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.setLineDash([40, 80]);
    this.ctx.moveTo(250, 0);
    this.ctx.lineTo(250, 700);
    this.ctx.stroke();
  },

  drawCar() {
    this.car = new Car(
      this.ctx,
      this.canvasSize.w / 2 - 25,
      this.canvasSize.h - 150,
      50,
      125,
      "car.png"
    );
    setInterval(() => {
      this.drawBoard();
      this.car.draw();
    }, 50);
    this.clear();
  },
  setEventListeners() {
    document.onkeydown = (e) => {
      e.keyCode === 37 ? this.car.move("left") : null;
      e.keyCode === 39 ? this.car.move("right") : null;
    };
  },
  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.canvasSize.w,
      this.canvasSize.h,
      this.canvasSize.w,
      this.canvasSize.h
    );
  },
};

class Car {
  constructor(ctx, posX, posY, carW, carH, nameImg) {
    this.ctx = ctx;
    this.carPos = {
      x: posX,
      y: posY,
    };
    this.img = new Image();
    this.img.src = `images/${nameImg}`;
    this.carSize = {
      w: carW,
      h: carH,
    };
  }
  draw() {
    this.ctx.drawImage(
      this.img,
      this.carPos.x,
      this.carPos.y,
      this.carSize.w,
      this.carSize.h
    );
  }
  move(direction) {
    if (direction === "left" && this.carPos.x > 180) this.carPos.x -= 10;
    if (direction === "right" && this.carPos.x < 380) this.carPos.x += 10;
  }
}
