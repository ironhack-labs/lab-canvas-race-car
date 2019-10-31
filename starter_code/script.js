window.onload = function () {
  const raceCar = {
    title: "Island Racer",
    author: "Rebecca, Nino, Victor",
    license: undefined,
    version: "1.0",
    canvasDom: undefined,
    ctx: undefined,
    car: undefined,

    init(id) {
      this.canvasDom = document.getElementById(id)
      this.ctx = this.canvasDom.getContext("2d")
      this.setDimensions()
      this.setEventListeners()
    },
    setDimensions() {
      document.getElementsByTagName("body")[0].style.margin = 0;
      this.canvasDom.setAttribute("height", window.innerHeight);
      this.canvasDom.setAttribute("width", 600);
    },
    canvasGreen() {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, 600, window.innerHeight); //x, y, ancho y alto
    },
    canvasGray() {
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(50, 0, 500, window.innerHeight);
    },
    canvasLine() {
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 10;
      this.ctx.setLineDash([0, 0]);
      this.ctx.beginPath();
      this.ctx.moveTo(70, 0);
      this.ctx.lineTo(70, window.innerHeight);
      this.ctx.stroke();
      this.ctx.moveTo(530, 0);
      this.ctx.lineTo(530, window.innerHeight);
      this.ctx.stroke();
    },
    canvasLineDash() {
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 10;
      this.ctx.setLineDash([50, 20]);
      this.ctx.beginPath();
      this.ctx.moveTo(295, 0);
      this.ctx.lineTo(295, window.innerHeight);
      this.ctx.stroke();
    },
    setEventListeners() {
      document.onkeydown = e => {
        switch (e.keyCode) {
          case 37:
            this.car.goLeft();
            break;
          case 39:
            this.car.goRight();
            break;
        }
      };
    },
    drawControlledCar() {
      this.car = new CarMove(this.ctx);
      setInterval(() => {
        this.clearScreen();
        this.canvasGreen();
        this.canvasGray()
        this.canvasLine()
        this.canvasLineDash()
        this.car.draw();
      }, 1);
    },
    clearScreen() {
      this.ctx.clearRect(0, 0, 600, window.innerHeight);
    }
  };


  class CarMove {
    constructor(ctx) {
      this._ctx = ctx;
      this._image = new Image();
      this._image.src = `./images/car.png`;
      this._posX = 221;
      this._posY = window.innerHeight - 400;
      this._vel = 20;
    }

    draw() {
      this._ctx.drawImage(this._image, this._posX, this._posY);
    }

    goLeft() {
      this._posX -= this._vel;
    }

    goRight() {
      this._posX += this._vel;
    }
  };


  document.getElementById("start-button").onclick = function () {
    raceCar.starGame();
  };


  raceCar.init("myCanvas");
  raceCar.drawControlledCar();
  raceCar.canvasGreen();
  raceCar.canvasGray();
  raceCar.canvasLine();
  raceCar.canvasLineDash();
};