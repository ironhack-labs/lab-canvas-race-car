window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    game.startGame();
  };
};
const app = {
  name: "Race Game",
  description: "Aplicación juego de coches",
  version: "1.0.0",
  authors: "Gabriel & Cristian",
  license: undefined,
  canvasDom: undefined,
  ctx: undefined,
  car: undefined,
  frames: 0,
  obstacles: [],
  canvasSize: {
    w: window.innerWidth * 0.35,
    h: window.innerHeight,
    carPosX: undefined,
  },

  init(id) {
    this.canvasDom = document.getElementById(id);
    this.canvasDom.setAttribute("width", this.canvasSize.w);
    this.canvasDom.setAttribute("height", this.canvasSize.h);
    this.ctx = this.canvasDom.getContext("2d");
    this.carPosX = this.canvasSize.w / 2 - 25;

    this.drawAll();
  },
  drawAll() {
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
      this.drawRoad();
      this.drawLines();
      this.setEventListener();
      this.drawCar("../images/car.png");
      
    }, 20);
  },

  drawRoad() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(40, 0, this.canvasSize.w - 80, this.canvasSize.h);
  },

  drawLines() {
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 15;
    this.ctx.moveTo(60, 0);
    this.ctx.lineTo(60, 700);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 15;
    this.ctx.moveTo(445, 0);
    this.ctx.lineTo(445, 700);
    this.ctx.stroke();

    this.ctx.beginPath();
    this.ctx.setLineDash([40, 20]);
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 7;
    this.ctx.moveTo(250, 0);
    this.ctx.lineTo(250, 700);
    this.ctx.stroke();
  },

  drawCar(name) {
    let image = new Image();
    image.src = `images/${name}`;
    image.onload = () => this.ctx.drawImage(image, this.carPosX, 500, 50, 80);
  },
  clearScreen() {
    this.ctx.clearRect(0, 0, this, canvasSize.w, this.canvasSize.h);
  },

  moveCar(dir) {
    if (dir === "left") {
      if (this.carPosX <= 70) {
        this.carPosX;
      } else {
        this.carPosX -= 5;
      }
    } else {
      if (this.carPosX >= 388) {
        this.carPosX
      } else {
        this.carPosX += 5;
      }
    }
  },

  setEventListener() {
    document.onkeydown = (e) => {
      e.keyCode === 37 ? this.moveCar("left") : null;
      e.keyCode === 39 ? this.moveCar("right") : null;
    };
  }
}
//   drawObstacle(name) {
//     const obst = new Obstacle(
//       this.ctx,
//       name,
//       0,
//       50,
//       100,
//       100,
//       2,
//       this.canvasSize
//     );
//     const obst2 = new Obstacle(
//       this.ctx,
//       name,
//       100,
//       250,
//       100,
//       100,
//       1,
//       this.canvasSize
//     );
//     const obst3 = new Obstacle(
//       this.ctx,
//       name,
//       200,
//       450,
//       100,
//       100,
//       4,
//       this.canvasSize
//     );
//     const obst4 = new Obstacle(
//       this.ctx,
//       name,
//       0,
//       650,
//       100,
//       100,
//       7,
//       this.canvasSize
//     );

//     this.obstacles.push(obst, obst2, obst3, obst4);

//     this.obstacles.forEach((elm) => elm.init());

//     setInterval(() => {
//       this.clearScreen();
//       this.obstacles.forEach((elm) => elm.move());
//     }, 20);
//   },
//   clearScreen() {
//     this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
//   },
// };

// class Obstacle {
//   constructor(ctx, name, oPosX, oPosY, obsW, obsH, vel, canvasSize) {
//     this.ctx = ctx;
//     this.name = name;
//     this.oPosX = oPosX;
//     this.oPosY = oPosY;
//     this.obsW = obsW;
//     this.obsH = obsH;
//     this.vel = vel;
//     this.canvasSize = canvasSize;
//     this.obstacle = undefined;
//     this.obstacles = [];
//   }

//   init() {
//     this.ctx.beginPath();
//     this.ctx.strokeStyle = "blue";
//     this.ctx.lineWidth = 15;
//     this.ctx.moveTo(60, 200);
//     this.ctx.lineTo(60, 400);
//     this.ctx.stroke();
//   }

//   move() {
//     if (this.oPosX > this.canvasSize.h - this.obsH || this.oPosY < 0) {
//       this.changeDirection();
//     }

//     this.oPosX > this.canvasSize.h - this.obsH || this.oPosY < 0 ?
//       this.changeDirection() :
//       null;
//     this.oPosX += this.vel;
//     this.drawUpdatedObs();
//   }

//   drawUpdatedObs() {
//     this.ctx.drawImage(
//       this.obstacle,
//       this.oPosX,
//       this.OPosY,
//       this.obsW,
//       this.obsH
//     );
//   }
//}