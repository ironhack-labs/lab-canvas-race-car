const win = document.getElementById("win");
const play = document.getElementById("play");
const body = document.getElementById("body");
const score = document.getElementById("score-menu");
const finalScore = document.getElementById("score");
const musica = document.getElementById("sonido");

const roadBoard = {
  name: "Basic shapes app",
  description: "Canvas app fro basic shapes drawing",
  version: "1.0.0",
  author: "Teodoro López",
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { width: 500, height: 700 },
  obtaclesArray: [],
  score: 0,
  FPS: 30,
  count: 0,

  init() {
    this.setContext();
    this.setDimensions();
    this.start();
    this.drawRoad();
    this.createCar();
    this.setListeners();
  },

  setContext() {
    this.canvasDOM = document.querySelector("#canvas");
    this.ctx = this.canvasDOM.getContext("2d");
  },

  setDimensions() {
    this.canvasSize.width = window.innerWidth;
    this.canvasSize.height = window.innerHeight;
  },

  drawRoad() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, this.canvasSize.width, this.canvasSize.height);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(50, 0, this.canvasSize.width, this.canvasSize.height);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(450, 0, this.canvasSize.width, this.canvasSize.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(60, 0, 10, this.canvasSize.height);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(430, 0, 10, this.canvasSize.height);
    this.ctx.lineWidth = 5;
    this.ctx.strokeStyle = "white";
    this.ctx.beginPath();
    this.ctx.setLineDash([25, 10]);
    this.ctx.moveTo(245, 0);
    this.ctx.lineTo(245, 700);
    this.ctx.stroke();
  },

  start() {
    musica.innerHTML += `<audio autoplay>
    <source
      src="./images/yt1s.com - Tokyo Drift  Teriyaki Boyz  MUSIC VIDEO  HD.mp3"
      type="audio/mp3"
    />
    Tu navegador no soporta audio HTML5.
    </audio>`;
    this.intervalId = setInterval(() => {
      this.clearScreen();
      this.drawRoad();
      if (this.count % 120 === 0) {
        this.createObstacle();
        this.count = 0;
        this.score++;
        score.innerHTML = this.score;
        finalScore.innerHTML = this.score;
      }
      this.obtaclesArray.forEach((obstacle) => {
        obstacle.draw();
      });
      this.colision();
      this.moveObstacles();
      this.car.draw();
      this.count++;
    }, 1000 / this.FPS);
  },

  createObstacle() {
    this.randomPositionX = Math.floor(Math.random() * 250 + 100);
    this.randomWidth = Math.floor(Math.random() * 250 + 100);
    this.randomHeight = Math.floor(Math.random() * 20 + 25);
    this.randomSpeed = Math.floor(Math.random() * 10 + 2);
    this.obtaclesArray.push(
      new Obstacles(
        this.ctx,
        this.randomPositionX,
        20,
        this.randomWidth,
        this.randomHeight,
        this.randomSpeed
      )
    );
  },

  createCar() {
    this.car = new Car(this.ctx, 225, this.canvasSize.height - 200, 50, 100);
  },

  setListeners() {
    document.onkeydown = (e) => {
      e.key === "ArrowLeft" ? this.car.moveLeft() : null;
      e.key === "ArrowRight" ? this.car.moveRight() : null;
    };
  },
  clearScreen() {
    this.ctx.clearRect(0, 0, this.canvasSize.width, this.canvasSize.height);
  },

  moveObstacles() {
    this.obtaclesArray.forEach((obstacle) => {
      obstacle.move();
    });
  },

  colision() {
    this.obtaclesArray.forEach((obstacle) => {
      if (
        this.car.posX < obstacle.posX + obstacle.width &&
        this.car.posX + this.car.width > obstacle.posX &&
        this.car.posY < obstacle.posY + obstacle.height &&
        this.car.height + this.car.posY > obstacle.posY
      ) {
        this.stop();
        this.score = 0;
        this.clearScreen();
        this.drawRoad();
        win.classList.remove("hidden");
        win.classList.add("display");
        play.classList.remove("display");
        play.classList.add("hidden");
        body.classList.add("body-color");
        win.addEventListener("click", () => {
          musica.innerHTML = "";
          win.classList.remove("display");
          win.classList.add("hidden");
          play.classList.add("display");
          play.classList.remove("hidden");
          body.classList.remove("body-color");
        });
        this.obtaclesArray = [];
        dispatchEvent(new Event("load"));
      } else {
        console.log("macaco2");
      }
    });
  },
  stop() {
    clearInterval(this.intervalId);
  },
};

class Car {
  constructor(ctx, posX, posY, width, height) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.image = undefined;
    this.init();
  }

  init() {
    this.image = new Image();
    this.image.src = "./images/car.png";
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  moveLeft() {
    if (this.posX < 100) {
      this.posX = this.posX;
    } else {
      this.posX -= 25;
    }
  }

  moveRight() {
    if (this.posX > 350) {
      this.posX = this.posX;
    } else {
      this.posX += 25;
    }
  }
}

class Obstacles {
  constructor(ctx, posX, posY, width, height, speed) {
    this.ctx = ctx;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.canvasSize = { heigth: 700 };
    this.init();
  }

  init() {
    this.draw();
  }

  draw() {
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(
      this.posX,
      this.posY,
      this.width,
      this.height,
      this.speed
    );
  }

  move() {
    if (this.posY + this.height > this.canvasSize.height || this.posY < 0) {
      this.clearScreen();
    }
    this.posY += 1 * this.speed;
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    roadBoard.init();
  };
};
