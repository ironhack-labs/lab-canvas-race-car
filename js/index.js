window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    //this.drawAll();
    console.log("hoola");
    drawingApp.init("canvas");
  };

  const drawingApp = {
    name: "Drawing app",
    description: "Canvas app for drawing a road",
    author: "Mluisa",
    canvasTag: undefined,
    ctx: undefined,
    car: undefined,
    canvasSize: {
      w: 500,
      h: 700,
    },

    init(id) {
      this.canvasTag = id;
      this.ctx = document.getElementById(this.canvasTag).getContext("2d");
      this.drawAll();
      this.drawCar();

      console.log("hola");
    },

    drawAll() {
      this.drawGreenRectangle();
      this.drawGreyRectangle();
      this.drawWhiteSideLines();
      this.drawDashedLine();
      setInterval(() => {
        this.car.draw;
      }, 70); // no funciona :(
    },

    drawGreenRectangle() {
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(
        this.canvasSize.w - 500,
        this.canvasSize.h - 700,
        500,
        700
      );
      console.log("hola");
    },

    drawGreyRectangle() {
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(
        this.canvasSize.w - 460,
        this.canvasSize.h - 700,
        430,
        700
      );
    },

    drawWhiteSideLines() {
      this.ctx.strokeStyle = "white";
      this.ctx.lineWidth = 8;
      this.ctx.strokeRect(
        this.canvasSize.w - 465,
        this.canvasSize.h - 750,
        430,
        800
      );
    },

    drawDashedLine() {
      this.ctx.lineWidth = 10;
      this.ctx.beginPath();
      this.ctx.setLineDash([40, 10]);
      this.ctx.moveTo(this.canvasSize.w / 2, this.canvasSize.h);
      this.ctx.lineTo(this.canvasSize.w / 2, 0);
      this.ctx.strokeStyle = "white";
      this.ctx.stroke();
    },
    drawCar() {
      this.car = new car(this.ctx, 200, 450, 100, 200, "car.png");
      this.car.draw();
    },
    setEventListeners() {
      document.onkeydown = (e) => {
        e.keyCode === this.keys.left ? this.car.move("left") : null;
        e.keyCode === this.keys.right ? this.car.move("right") : null;
      };
      console.log(setEventListeners); //no funciona
    },
  };

  class car {
    constructor(
      ctx,
      carPositionx,
      carPositiony,
      carWidth,
      carHeigth,
      carImage
    ) {
      this.ctx = ctx;
      this.carPosition = {
        x: carPositionx,
        y: carPositiony,
      };

      this.carSize = {
        w: carWidth,
        y: carHeigth,
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
        this.carPosition.y,
        this.carPosition.x,
        this.carSize.w,
        this.carSize.h
      );
    }
    move(dir) {
      dir === "left" ? (this.carPos.x -= 20) : null; //no sale
      dir === "right" ? (this.carPos.x += 20) : null;
    }
  }
};
