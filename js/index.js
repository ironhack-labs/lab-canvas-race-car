class Road {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    const img = document.createElement("img");
    img.src = "../images/road.png";
    img.addEventListener("load", () => {
      this.image = img;
    });
  }
  draw() {
    if (!this.image) return;
    ctx.drawImage(this.image, this.x, this.y, canvas.width, canvas.height);
  }
}

class Car {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;

    const img = document.createElement("img");
    img.src = "../images/car.png";
    img.addEventListener("load", () => {
      this.image = img;
    });
  }
  draw() {
    if (!this.image) return;
    ctx.drawImage(this.image, this.x, this.y, 40, 100);
  }
  newPos() {
    this.x += this.speedX;
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const car = new Car(230, 580);
const road = new Road(0, 0);

function startGame() {
  updateGame();
}

function updateGame() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  road.draw();
  car.draw();
  car.newPos();
  requestAnimationFrame(updateGame);
}

document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowLeft":
      if (car.x > 40) car.speedX -= 1;
      break;
    case "ArrowRight":
      if (car.x < canvas.width - 80) car.speedX += 1;
      break;
  }
});
document.addEventListener("keyup", function (event) {
  switch (event.code) {
    case "ArrowLeft":
      car.speedX = 0;
      break;
    case "ArrowRight":
      car.speedX = 0;
      break;
  }
});
