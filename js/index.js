/* eslint-disable class-methods-use-this */
/* eslint-disable max-len */
// 6 - Sistema de pontos
// 7 - Game over (aparecer score final)

class createBoard {
  constructor(canvas, context, road, car, obstacleConstructor) {
    this.canvas = canvas;
    this.context = context;
    this.animationId = 0;
    this.road = road;
    this.speed = 2;
    this.car = car;
    this.speedCar = 20;
    this.obstacleConstructor = obstacleConstructor;
    this.frames = 0;
    this.obstaclesArray = [];
    this.score = {
      points: 0,
      htmlElement: document.querySelector('#score'),
    };
    this.gameOver = false;
  }

  startGame() {
    this.road.clearLane();
    this.road.drawLane();
    this.road.move(this.speed);
    this.car.drawCar();
    this.updateObstacles();
    this.createObstacle();
    this.checkCrash();
    this.frames += 1;

    if (this.gameOver) {
      window.cancelAnimationFrame(this.animationId);
    } else {
      this.animationId = window.requestAnimationFrame(() => this.startGame());
    }

    this.scorePoints();
    this.showFinalScore();
  }

  moveCar() {
    window.addEventListener('keydown', (event) => {
      this.car.move(event.keyCode, this.speedCar);
    });
  }

  updateObstacles() {
    if (this.frames % 120 === 0) {
      const randomObstacle = this.randomObstacle();
      this.obstaclesArray.push(randomObstacle);
    };
  }

  createObstacle() {
    this.obstaclesArray.forEach((element, index) => {
      element.drawObstacle();
      element.move(this.speed);
      if (element.posY >= this.canvas.height) {
        this.obstaclesArray.splice(index, 1);
      }
    });
  }

  randomObstacle() {
    const minWidth = 100;
    const maxWidth = 300;

    const randomWidth = Math.floor(Math.random() * (maxWidth - minWidth + 1)) + minWidth;

    const minPosX = 0;
    const maxPosX = this.canvas.width - randomWidth;
    const randomPosX = Math.floor(Math.random() * (maxPosX - minPosX + 1)) + minPosX;

    const newObstacle = new this.obstacleConstructor(this.canvas, this.context, randomPosX, 0, randomWidth, 30, 'darkred');

    return newObstacle;
  }

  checkCrash() {
    this.obstaclesArray.forEach((element) => {
      if (this.car.crashWith(element)) {
        this.gameOver = true;
      }
    });
  }

  scorePoints() {
    this.score.points = Math.floor(this.frames / 5);
    this.score.htmlElement.innerText = this.score.points;
  }

  showFinalScore() {
    setTimeout(() => {
      this.road.clearLane();

      this.context.fillStyle = 'black';
      this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
      this.context.textAlign = 'center';
      this.context.font = '50px serif';
      this.context.fillStyle = 'darkred';
      this.context.fillText('Game Over!', this.canvas.width / 2, this.canvas.height / 3);
      this.context.fillStyle = 'white';
      this.context.fillText('Your final score', this.canvas.width / 2, this.canvas.height / 2);
      this.context.fillText(`${this.score.points}`, this.canvas.width / 2, this.canvas.height / 1.75);
      this.context.fillStyle = 'darkred';
    }, 1000);
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    const roadImg = new Image();
    roadImg.src = './images/road.png';
    const carImg = new Image();
    carImg.src = './images/car.png';

    roadImg.onload = () => {
      const newRoad = new road(canvas, context, 0, 0, canvas.width, canvas.height, roadImg);
      const newCar = new car(canvas, context, 225, 550, 50, 100, carImg);
      const game = new createBoard(canvas, context, newRoad, newCar, obstacle);
      game.startGame();
      game.moveCar();
    };
  };
};
