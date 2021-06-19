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
    this.height = 100;
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

let car = new Car();

//road class

class Road {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 500;
    this.height = 700;
    this.speed = 1;
    this.img = new Image();
    this.img.src = "../images/road.png";
  }
  draw() {
    ctx.drawImage(this.img, this.x, this.y);
  }
}

let road = new Road();

let startGame = function () {
  setInterval(() => {
    clearCanvas();

    road.draw();
    car.draw();
  }, 1000 / 60);
};

document.getElementById("start-button").addEventListener("click", startGame);

window.addEventListener("keydown", function (event) {
  console.log(event.key);
  if (event.key === "ArrowLeft") {
    console.log("lefpressed");
    car.moveLeft();
  } else if (event.key === "ArrowRight") {
    car.moveRight();
  }
});
