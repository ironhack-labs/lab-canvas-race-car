//get the canvas

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let clearCanvas = function () {
  ctx.clearRect(0, 0, 500, 700);
};

//car class

class Car {
  constructor() {
    this.width = 40;
    this.height = 80;
    this.x = 130;
    this.y = 300;
    this.img = new Image();
    this.img.src = "../images/car.png";
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveRight() {
    this.x += 20;
    console.log("movedRight");
  }

  moveLeft() {
    this.x -= 20;
    console.log("movedRight");
  }
}

//road class

class Road {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.speed = 1;
    this.img = new Image();
    this.img.src = "../images/road.png";
  }
  draw() {
    ctx.drawImage(this.img, 0, this.y, this.width, this.height);
    if (this.speed < 0) {
      ctx.drawImage(
        this.img,
        0,
        this.y + this.img.height,
        this.width,
        this.height
      );
    } else {
      ctx.drawImage(
        this.img,
        0,
        this.y - canvas.height,
        this.width,
        this.height
      );
    }
  }

  move() {
    this.y += this.speed;
    this.y %= canvas.height;
  }
}

class Obstacle {
  constructor() {
    this.x = Math.floor(Math.random() * 400);
    this.y = 0;
    this.width = Math.floor(Math.random() * 250);
    this.height = 50;
  }
}

let intersect = (obj1, obj2) => {
  let obj1left = obj1.x;
  let obj1top = obj1.y;
  let obj1right = obj1.x + obj1.width;
  let obj1bottom = obj1.y + obj1.height;
  let obj2left = obj2.x;
  let obj2top = obj2.y;
  let obj2right = obj2.x + obj2.width;
  let obj2bottom = obj2.y + obj2.height;
  return !(
    obj1left > obj2right ||
    obj1top > obj2bottom ||
    obj1right < obj2left ||
    obj1bottom < obj2top
  );
};

let car = new Car();
let road = new Road();

let frameCounter = 0;

let obstacles = [];

let startGame = function () {
  setInterval(() => {
    clearCanvas();

    road.move();

    road.draw();

    for (let i = 0; i < obstacles.length; i++) {
      currentObstacle = obstacles[i];
      ctx.fillRect(
        currentObstacle.x,
        currentObstacle.y,
        currentObstacle.width,
        currentObstacle.height
      );
      currentObstacle.y += 1;
      if (intersect(obstacles[i], car)) {
        alert("game over");
      }
    }

    if (frameCounter % 180 === 0) {
      let obstacle = new Obstacle();
      obstacles.push(obstacle);
      console.log(obstacles);
    }

    car.draw();

    frameCounter++;
  }, 1000 / 60);
};

document.getElementById("start-button").addEventListener("click", startGame);

window.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "ArrowLeft") {
    car.moveLeft();
  } else if (event.key === "ArrowRight") {
    car.moveRight();
  }
});
