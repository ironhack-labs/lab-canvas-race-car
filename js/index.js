const canvas = document.getElementById(`canvas`),
  ctx = canvas.getContext(`2d`),
  roadImage = new Image(),
  carImage = new Image(),
  score = document.querySelector(`#score span`),
  gameOver = document.getElementById(`game-over`);

roadImage.src = `../images/road.png`;
carImage.src = `../images/car.png`;

const game = {
  score: 0,
  speed: 15,
  intervalId: null,
  loopCount: 0,

  start() {
    gameOver.style.display = `none`;
    this.score = 0;
    this.resetLoopCount();
    car.resetPosition();
    obstacles.clearList();

    this.intervalId = setInterval(() => {
      game.loopCount++

      if (game.loopCount % 7 === 0) {
        obstacles.move();
      }
      if (game.loopCount > 130) {
        obstacles.generate();
        game.resetLoopCount();
      }

      game.refresh();
    }, 15);

    window.addEventListener(`keydown`, (event) => car.move(event));
  },
  end() {
    window.removeEventListener(`keydown`, (event) => car.move(event));
    clearInterval(this.intervalId);
    gameOver.style.display = `block`;

    document.getElementById('start-button').addEventListener(`click`, () => { game.start() }, { once: true });
  },
  refresh() {
    score.textContent = this.score;
    this.clearCanvas();
    this.renderEverything();

    if (obstacles.list.length) {
      const closestObstacle = obstacles.list[0];

      if (car.yPosition <= closestObstacle.yPosition + closestObstacle.height) {

        if (
          car.xPosition > closestObstacle.xPosition
          && car.xPosition < closestObstacle.xPosition + closestObstacle.width
          ||
          car.xPosition + car.width < closestObstacle.xPosition + closestObstacle.width
          && car.xPosition + car.width > closestObstacle.xPosition
        ) {
          game.end();
        }

      }
    }
  },
  addPoint() {
    this.score++;
  },
  resetLoopCount() {
    this.loopCount = 0;
  },
  clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  renderEverything() {
    road.draw();
    car.draw();
    obstacles.draw();
  }
};

const road = {
  width: canvas.width * 11 / 13,
  border: canvas.width / 13,

  draw() {
    ctx.drawImage(roadImage, 0, 0, canvas.width, canvas.height);
  }
};

const car = {
  width: carImage.width / 3,
  height: carImage.height / 3,
  // xPosition= canvas.width/2 - car.width/2
  xPosition: canvas.width / 2 - carImage.width / 6,
  // yPosition= canvas.height - car.height*1.05 to leave some space under the car
  yPosition: canvas.height - carImage.height * 0.35,

  resetPosition() {
    this.xPosition = canvas.width / 2 - carImage.width / 6;
  },
  move(event) {
    switch (event.code) {
      case `ArrowLeft`:
        const distenceToLeftBorder = this.xPosition - road.border;

        if (distenceToLeftBorder >= game.speed) {
          this.xPosition -= game.speed;
        } else if (distenceToLeftBorder > 0) {
          this.xPosition -= distenceToLeftBorder;
        }
        break;

      case `ArrowRight`:
        const distenceToRightBorder = canvas.width - (road.border + this.xPosition + this.width);

        if (distenceToRightBorder >= game.speed) {
          this.xPosition += game.speed;
        } else if (distenceToRightBorder > 0) {
          this.xPosition += distenceToRightBorder;
        }
        break;
    }
  },
  draw() {
    ctx.drawImage(carImage, this.xPosition, this.yPosition, this.width, this.height);
  },
};

class Obstacle {
  constructor() {
    this.width = car.width + Math.random() * (road.width / 2 - car.width);
    this.height = 20;
    this.xPosition = road.border + Math.random() * (road.width - this.width);
    this.yPosition = 0;
  }
}

const obstacles = {
  list: [],

  clearList() {
    this.list = [];
  },
  generate() {
    this.list.push(new Obstacle());
  },
  move() {
    this.list.forEach((obstacle, index) => {
      obstacle.yPosition += game.speed;

      if (obstacle.yPosition > canvas.height) {
        this.list.splice(index, 1);
        game.addPoint();
      }
    });
  },
  draw() {
    this.list.forEach(obstacle => {
      ctx.fillStyle = `#870007`;
      ctx.fillRect(obstacle.xPosition, obstacle.yPosition, obstacle.width, obstacle.height);
    });
  }
};


document.getElementById('start-button').addEventListener(`click`, () => { game.start() }, { once: true });