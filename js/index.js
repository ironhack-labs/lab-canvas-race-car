const theCanvas = document.getElementById("canvas");
const ctx = theCanvas.getContext("2d");

function startGame() {
  const road = new Road();
  const car = new Car();
  const obstacle = new Obstacle();
  document.addEventListener("keydown", (e) => {
    if (e.code === "ArrowLeft" && car.x > 50) {
      car.moveLeft();
    } else if (e.code === "ArrowRight" && car.x < 400) {
      car.moveRight();
    }
    else if (e.code === "Escape"){
      console.log("escape button clicked");
    }
    else {
      console.log("stay within road!");
    }
  });

  function updateObstacle() {
    obstacle.move();
    road.refresh();
    car.draw();
    obstacle.draw();
    requestAnimationFrame(updateObstacle);
  }
  setTimeout(updateObstacle, 300);
}

class Road {
  constructor() {
    this.x = 0;
    this.y = 0;

    const roadImg = new Image();
    roadImg.src = "./images/road.png";
    roadImg.addEventListener("load", () => {
      this.roadImg = roadImg;
      this.draw();
    });
  }
  draw() {
    ctx.drawImage(this.roadImg, this.x, this.y, 500, 700);
  }
  clear() {
    ctx.clearRect(this.x, this.y, 500, 700);
  }
  refresh() {
    this.clear();
    this.draw();
  }
}

class Car {
  constructor() {
    this.x = 225;
    this.y = 575;

    const carImg = new Image();
    carImg.src = "./images/car.png";
    carImg.addEventListener("load", () => {
      this.carImg = carImg;
      this.draw();
    });
  }
  moveLeft() {
    this.x -= 25;
  }
  moveRight() {
    this.x += 25;
  }
  draw() {
    ctx.drawImage(this.carImg, this.x, this.y, 50, 100);
  }
}

class Obstacle {
  constructor() {
    this.x = 50;
    this.y = 0;
    this.width = 300;
    this.draw();
  }
  draw() {
    ctx.fillStyle = "brown";
    ctx.fillRect(this.x, this.y, this.width, 20);
  }
  move() {
    if (this.y >= 700) {
      this.y = 0;
      let selector = Math.floor(Math.random() * 2);
      this.width = Math.random() * 151 + 50; //max 200 min 50, Math.random() * (max - min + 1) + min
      if (selector === 0) {
        this.x = 50;
      } else {
        this.x = 450 - this.width;
      }
    } else {
      this.y += 5;
    }
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
