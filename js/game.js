const obstaclesFPS = 120;

class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.road = new Road(ctx);
    this.car = new Car(ctx);

    this.obstacles = [];
    this.obstacleDrawCount = 0;

    this.interval = null;
    this.fps = 1000 / 60;

    this.maxRight = this.ctx.canvas.width - 75;
    this.minLeft = 75;

    this.score = document.getElementById("score").querySelector("span");
    this.score.innerHTML = 0;

    this.sounds = {
      point: new Audio('./sounds/point.wav'),
      crash: new Audio('./sounds/crash.wav')
    }

    const crashVolume = this.sounds.crash;
    crashVolume.volume = 0.1;
  }

  start() {
    this.setListeners();

    if (!this.interval) {

      this.interval = setInterval(() => {
        this.clear();
        this.draw();
        this.move();
        this.checkCollitions();
        this.obstacleDrawCount++;

        if (this.obstacleDrawCount % obstaclesFPS === 0) {
          this.addObtstacles();
          this.obstacleDrawCount = 0;

          // Increase Level
          // if (parseInt(this.score.innerHTML) >= 1) {
          //   this.increaseLevel();
          // } 
        }

      }, this.fps);
    }
  }

  // pause() {
  //   clearInterval(this.interval);
  // }

  gaveOver() {
    clearInterval(this.interval);

    this.ctx.save();
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

    this.ctx.font = '36px Arial';
    this.ctx.fillStyle = 'red';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(
      'Game over!',
      this.ctx.canvas.width / 2,
      this.ctx.canvas.height / 2 - 30,
    );
    this.ctx.restore();

    setTimeout(() => {
      this.ctx.save();
      this.ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

      this.ctx.font = '36px Arial';
      this.ctx.fillStyle = 'white';
      this.ctx.textAlign = 'center';
      this.ctx.fillText(
        `Your final score is: ${this.score.innerHTML}`,
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height / 2 + 30,
      );
      this.ctx.restore();
    }, 2000);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  draw() {
    this.road.draw();
    this.car.draw(ctx, 100, 50);
    this.obstacles.forEach(obstacle => {
      obstacle.draw();
    });
    this.addPoints();
  }

  move() {
    this.road.move();
    this.car.move();
    this.obstacles.forEach(obstacle => obstacle.move());
  }

  setListeners() {
    document.onkeydown = event => {
      if (event.keyCode === RIGHT) {
        this.car.vx = 7;
      };
      if (event.keyCode === LEFT) {
        this.car.vx = -7;
      };
      // if (event.keyCode === SPACE) {
      //   this.pause();
      // }
    }

    document.onkeyup = event => {
      if (event.keyCode === RIGHT || LEFT) {
        this.car.vx = 0;
      };
    }
  }

  addObtstacles() {
    const obstacleWidth = Math.floor(Math.random() * (this.ctx.canvas.width - this.car.width * 4)) //+ this.car.width * 2.5;

    const obstaclePosition = Math.floor(Math.random() * (this.maxRight - this.minLeft)) + this.minLeft;

    this.obstacles.push(new Obstacle(this.ctx, obstaclePosition, 0, obstacleWidth, 20));
  }

  checkCollitions() {
    if (this.obstacles.some(obstacle => this.car.collidesWith(obstacle))) {
      this.sounds.crash.play();
      this.gaveOver();
    }
  }

  addPoints() {
    let avoidedObstacles = this.obstacles.filter(obstacle => obstacle.y > this.car.y + this.car.height);
    if (avoidedObstacles.length > parseInt(this.score.innerHTML)) {
      this.sounds.point.play();
    };
    this.score.innerHTML = avoidedObstacles.length;

    this.obstacles.map(obstacle => {
      if (obstacle.y > this.car.y + this.car.heigth) {
        this.obstacles.splice(0,1);
      }
    });
  }

  // increaseLevel() {
  //     this.obstacle.vy *= 2;
  //     this.road.vy *= 2;
  // }
}

const RIGHT = 39;
const LEFT = 37;
const SPACE = 32;