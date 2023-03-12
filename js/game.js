const Game = {
  canvas: undefined,
  ctx: undefined,
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  background: undefined,
  player: undefined,
  obstacles: [],

  keys: {
    LEFT: 37,
    RIGHT: 39,
  },

  init() {
    this.setContext();
    this.setDimensions();
    this.start();
  },

  setContext() {
    this.canvas = document.querySelector("#canvas");
    this.ctx = this.canvas.getContext("2d");
  },

  setDimensions() {
    this.width = 500;
    this.height = 700;

    this.canvas.setAttribute("width", this.width);
    this.canvas.setAttribute("height", this.height);
  },

  start() {
    this.reset();
    this.interval = setInterval(() => {
      this.framesCounter++; // cuenta frames  y reinicia despues de 30000, se utiliza para generar obstaculos
      if (this.framesCounter > 3000) {
        this.framesCounter = 0;
      }
      this.clear();
      this.drawAll();
      this.generateObstacles();
      this.clearObstacles();
    //   if (this.isCollision()) {
    //     this.gameOver();
    //   }
    }, 1000 / this.FPS);
  },

  reset() {
    this.background = new Road(this.ctx, this.width, this.height);
    this.player = new Car(this.ctx, this.width, this.height, this.keys);
    this.obstacles = [];
  },

  drawAll() {
    this.background.draw();
    this.player.draw();
    this.obstacles.forEach(function (obs) {
      obs.draw(); // es un array de obstaculos, tiene que recorrerlo y pintar 1 a 1
    });
  },
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  generateObstacles() {
    if (this.framesCounter % 300 === 0) {
      // mas pequeño = menos frecuencia, por lo tanto, mas rapido se generan
      this.obstacles.push(new Obstacle(this.ctx));
    }
  },

  clearObstacles() { // no sé si está bien
    this.obstacles = this.obstacles.filter(function (obs) {
      return obs.posY >= 0;
    });
  },

//   isCollision() {
//     return this.obstacles.some((obs) => {
//       return (
//         this.player.posX >= obs.posY &&
//         this.player.posX + this.player.width >= obs.posY + obs.width
//       );
//     });
//   },

//   gameOver() {
//     clearInterval(this.interval);
//   },
};
