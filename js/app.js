const raceCarApp = {
  name: 'Race app',
  description: 'Canvas app for race game',
  version: '1.0.0',
  author: 'Salvador Gallego',
  license: undefined,
  repository: undefined,
  ctx: undefined,
  canvasDOM: undefined,
  canvasSize: { w: undefined, h: undefined },
  framesCounter: 0,
  intervalId: undefined,
  score: 0,
  obstacles: [],

  init() {
    this.setContext();
    this.setDimensions();
    this.underConstruction();
    this.setListeners();
    this.start();
    this.image = new Image();
    this.image.src = `./images/looser.png`;
  },

  setContext() {
    this.canvasDOM = document.querySelector('#canvas');
    this.ctx = this.canvasDOM.getContext('2d');
    console.log('Echa un vistazo al contexto 2d:', this.ctx);
  },
  setDimensions() {
    this.canvasSize.w = 500;
    this.canvasSize.h = 700;
    this.canvasDOM.setAttribute('width', this.canvasSize.w);
    this.canvasDOM.setAttribute('height', this.canvasSize.h);
  },

  setListeners() {
    document.addEventListener('keyup', e => {
      e.key === 'ArrowLeft' ? this.newCar.moveLeft() : '';
      e.key === 'ArrowRight' ? this.newCar.moveRight() : '';
    });
  },

  drawBackground() {
    //   background rectangles
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(25, 0, this.canvasSize.w - 50, this.canvasSize.h);

    // border road left line

    this.ctx.setLineDash([0, 0]);
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = 'white';
    this.ctx.beginPath();
    this.ctx.moveTo(37, 0);
    this.ctx.lineTo(37, this.canvasSize.h);
    this.ctx.stroke();
    this.ctx.closePath();

    // border road right line
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = 'white';
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvasSize.w - 37, 0);
    this.ctx.lineTo(this.canvasSize.w - 37, this.canvasSize.h);
    this.ctx.stroke();
    this.ctx.closePath();

    // center dashed line
    this.ctx.lineWidth = 10;
    this.ctx.setLineDash([50, 30]);
    this.ctx.beginPath();
    this.ctx.moveTo(this.canvasSize.w / 2, 0);
    this.ctx.lineTo(this.canvasSize.w / 2, this.canvasSize.h);
    this.ctx.stroke();
    this.ctx.closePath();
  },

  underConstruction() {
    this.newCar = new Car(this.ctx, 100, 120, this.canvasSize);
  },

  start() {
    this.intervalId = setInterval(() => {
      if (this.obstacles.length) {
        this.obstacles.forEach(elem => {
          elem.draw();

          if (
            this.newCar.carPosition.x <
              elem.obstaclePosition.x + elem.obstacleSize.w - 10 &&
            this.newCar.carPosition.x + this.newCar.carSize.w - 10 >
              elem.obstaclePosition.x &&
            this.newCar.carPosition.y <
              elem.obstaclePosition.y + elem.obstacleSize.h - 10 &&
            this.newCar.carSize.h - 10 + this.newCar.carPosition.y >
              elem.obstaclePosition.y
          ) {
            // clearInterval(this.intervalId);
            window.clearInterval(this.intervalId);

            document.querySelector('.police img').src = './images/trapped.jpeg';
            document.querySelector('.police p').textContent =
              'Mejor suerte la proxima vez';

            setInterval(() => {
              this.clearCanvas();
              this.looser();
              this.showScores();
            }, 100);
          }
        });
      }

      this.clearCanvas();
      this.drawAll();
      this.framesCounter++;

      if (this.framesCounter % 40 === 0) {
        this.score++;
      }

      if (this.framesCounter % 30 === 0) {
        const randomWidth = Math.trunc(Math.random() * 350);
        const randomHeight = Math.trunc(Math.random() * 100);
        const xRandomPosition = Math.trunc(Math.random() * this.canvasSize.w);

        const newObstacle = new obstacles(
          this.ctx,
          randomWidth,
          randomHeight,
          this.canvasSize,
          xRandomPosition
        );

        this.obstacles.push(newObstacle);
      }
    }, 70);
  },

  clearCanvas() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  looser() {
    this.ctx.drawImage(this.image, 0, 0, this.canvasSize.w, this.canvasSize.h);
  },

  drawAll() {
    this.drawBackground();
    this.newCar.drawCar();
    this.obstacles.forEach(obstacle => obstacle.draw());

    this.showScores();
  },

  showScores() {
    // show scores
    this.ctx.font = '25px Verdana';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('Score: ' + this.score, 300, 90);
  },
};

class Car {
  constructor(ctx, width, height, canvasSize) {
    this.ctx = ctx;
    this.carSize = { w: width, h: height };
    this.canvasSize = canvasSize;
    this.image = undefined;
    this.carPosition = {
      x: this.canvasSize.w / 2 - 50,
      y: this.canvasSize.h - 140,
    };

    // console.log();

    this.init();
  }

  init() {
    this.image = new Image();
    this.image.src = `./images/car.png`;
  }

  drawCar() {
    this.ctx.drawImage(
      this.image,
      this.carPosition.x,
      this.carPosition.y,
      this.carSize.w,
      this.carSize.h
    );
  }

  moveLeft() {
    //   los bordes matan
    this.carPosition.x >= 30 ? (this.carPosition.x -= 20) : '';
  }
  moveRight() {
    //   los bordes matan
    this.carPosition.x <= this.canvasSize.w - 130
      ? (this.carPosition.x += 20)
      : '';
  }
}

class obstacles {
  constructor(ctx, width, height, canvasSize, position) {
    (this.ctx = ctx),
      (this.obstacleSize = { w: width, h: height }),
      (this.canvasSize = canvasSize);
    this.obstaclePosition = { x: position, y: -100 };
    this.obstacleImg = undefined;
    this.randomImage = Math.trunc(Math.random() * (8 - 1) + 1);
    this.speed = 5;

    this.init();
  }

  init() {
    this.imageInstance = new Image();
    this.imageInstance.src = `./images/obstacles/obs${this.randomImage}.png`;
  }

  start() {
    this.draw();
  }

  draw() {
    this.ctx.drawImage(
      this.imageInstance,
      this.obstaclePosition.x,
      this.obstaclePosition.y,
      this.obstacleSize.w,
      this.obstacleSize.h
    );
    // console.log('me muevo');
    this.move();
  }

  move() {
    this.obstaclePosition.y += this.speed;
  }
}
