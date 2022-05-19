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
    // if (this.yIndex < canvas.height) {
    //   this.yIndex -= 20;
    // }
    this.yIndex += 20;
  }
}

const car = new Car();
const obstacles = [];

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
    obstacles.forEach((obstacle) => {
      obstacle.moveDown();
    });
    renderAll();
  }

  function renderAll() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(road, 0, 0, canvas.width, canvas.height);
    car.draw();
    obstacles.forEach((obstacle) => obstacle.draw());
  }

  function checkCollision() {
    obstacles.forEach((obstacle) => {
      if (
        car.xIndex > obstacle.xIndex &&
        car.xIndex + car.width < obstacle.xIndex + obstacle.width &&
        car.yIndex < obstacle.yIndex + obstacle.height
      ) {
        return true;
      }
    });
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
