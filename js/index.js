const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");
const road = new Image();
road.src = "images/road.png";
const carSprite = new Image();
carSprite.src = "images/car.png";
const borderSize = canvas.width / 13;

console.log(carSprite.width);

class Car {
  constructor() {
    this.xIndex = canvas.width / 2;
    this.yIndex = canvas.height - Math.floor(carSprite.height / 2);
    this.width = carSprite.width / 3;
    this.height = carSprite.height / 3;
  }

  draw() {
    context.drawImage(
      carSprite,
      this.xIndex,
      this.yIndex,
      Math.floor(car.width),
      Math.floor(car.height)
    );
  }

  move(direction) {
    switch (direction) {
      case "right":
        if (this.xIndex + car.width < canvas.width - borderSize) {
          this.xIndex += 10;
        }
        break;
      case "left":
        if (this.xIndex > borderSize) {
          this.xIndex -= 10;
        }
        break;
    }
  }
}

class Obstacle {
  constructor(xStartIndex, obWidth) {
    this.xIndex = xStartIndex;
    this.yIndex = 0;
    this.width = obWidth;
    this.height = 20;
  }

  draw() {
    context.fillStyle = "brown";
    context.fillRect(this.xIndex, this.yIndex, this.width, this.height);
  }

  moveDown() {
    this.yIndex += 20;
  }
}

const car = new Car();
const obstacles = [];
let score = 0;

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function createObstacle() {
    const xStartIndex =
      borderSize +
      Math.floor((Math.random() * (canvas.width - borderSize)) / 2);
    const minWidth = car.width;
    const maxWidth = canvas.width / 2 - borderSize;
    const obWidth =
      minWidth + Math.floor(Math.random() * (maxWidth - minWidth));
    const obstacle = new Obstacle(xStartIndex, obWidth);
    obstacles.push(obstacle);
  }

  function update() {
    let currentTime = 0;
    const intervallId = setInterval(() => {
      currentTime += 1;
      if (currentTime % 150 === 0) {
        createObstacle();
      }
      if (currentTime % 15 === 0) {
        obstaclesMove();
      }
      if (checkCollision()) {
        clearInterval(intervallId);
      }
      renderAll();
    }, Math.floor(1000 / 60));
  }

  function startGame() {
    renderAll();
    createObstacle();
    update();
  }

  function obstaclesMove() {
    for (let i = 0; i < obstacles.length; i++) {
      obstacles[i].moveDown();
      if (obstacles[i].yIndex > canvas.height) {
        score++;
        obstacles.splice(i, 1);
        console.log(score);
      }
    }
  }

  function renderAll() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(road, 0, 0, canvas.width, canvas.height);
    car.draw();
    obstacles.forEach((obstacle) => obstacle.draw());
  }

  function checkCollision() {
    for (let i = 0; i < obstacles.length; i++) {
      if (
        car.xIndex > obstacles[i].xIndex &&
        car.xIndex < obstacles[i].xIndex + obstacles[i].width &&
        car.yIndex < obstacles[i].yIndex + 2 * obstacles[i].height &&
        car.yIndex + car.height > obstacles[i].yIndex
      ) {
        return true;
      }
      if (
        car.xIndex + car.width > obstacles[i].xIndex &&
        car.xIndex + car.width < obstacles[i].xIndex + obstacles[i].width &&
        car.yIndex < obstacles[i].yIndex + 2 * obstacles[i].height &&
        car.yIndex + car.height > obstacles[i].yIndex
      ) {
        return true;
      }
    }
    return false;
  }

  document.addEventListener("keydown", (event) => {
    switch (event.code) {
      case "ArrowRight":
        car.move("right");
        break;
      case "ArrowLeft":
        car.move("left");
        break;
    }
  });
};
