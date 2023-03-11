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
    ctx.drawImage(this.image, this.x, this.y, myGameArea.canvas.width, myGameArea.canvas.height);
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

const myGameArea = {
  canvas: document.querySelector('#canvas'),
  frames: 0,
};

const ctx = myGameArea.canvas.getContext("2d");

const car = new Car(230, 580);
const road = new Road(0, 0);

function startGame() {
  updateGame();
}

function updateGame() {
  ctx.clearRect(0, 0, myGameArea.canvas.width, myGameArea.canvas.height);
  road.draw();
  car.draw();
  car.newPos();
  requestAnimationFrame(updateGame);
  updateObstacles()
}

document.addEventListener("keydown", function (event) {
  switch (event.code) {
    case "ArrowLeft":
      if (car.x > 40) car.speedX -= 1;
      break;
    case "ArrowRight":
      if (car.x < myGameArea.canvas.width - 80) car.speedX += 1;
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


class Obstacle {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  draw() {
    ctx.fillRect(this.x, this.y, this.width, this.height)
    ctx.fillStyle = this.color
  }
}

const obstacles = []

function updateObstacles() {
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    
    let minWidth = 20;
    let maxWidth = 200;
    let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    
    
    obstacles.push(new Obstacle(width, 10, 'red', 40+Math.floor(Math.random()*420), 0));

  
  }
  for (i = 0; i < obstacles.length; i++) {
    obstacles[i].y -= -1;
    obstacles[i].draw();
  }

}