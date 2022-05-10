const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const allObstacles = [];

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };


  addEventListener("keydown", (event) => {
    //der
    if (event.keyCode === 39) {
      car.x += 50;
    }
    //izq
    if (event.keyCode === 37) {
      car.x -= 50;
    }
  });
  function update() {
    frames++;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    background.draw();
    car.draw();
    generateObstacles();
    drawObstacles();
    //obstacle.draw();

    if (requestId) {
      requestAnimationFrame(update);
    }
  }

  function startGame() {
    requestId = requestAnimationFrame(update);
  }

};


function generateObstacles() {
  if (!(frames % 160 === 0)) {
    return true;
  }
    const obstacle = new Obstacle("top", canvas.width, 0, height);
    allObstacles.push(obstacle);
}

function drawObstacles() {
  allObstacles.forEach((obstacle, index_obstacle) => {
    if (obstacle.x + obstacle.width <= 0) {
      //splice solo se puede utilizar en arreglos
      points++;
      obstacle.splice(index_obstacle, 1);
    }
    
    obstacle.draw();

    if (car.collision(obstacle)) {
      console.log("me esta chocando!!!");
      requestId = undefined;
      background.gameOver();
    }
  });
}

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.image = new Image();
    this.image.src = "images/road.png";
  }
  draw() {
    this.y--;
    if (this.y < -canvas.height) {
      this.y = 0;
    }
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.x,
      this.y + canvas.height,
      this.width,
      this.height
    );
  }
  gameOver() {
    ctx.font = "80px Arial";
    ctx.fillText("YaChocaste", 150, 150);
  }
}
const background = new Background();

class Car extends Background {
  constructor() {
    super();
    this.x = 200;
    this.y = 500;
    this.width = 80;
    this.height = 160;
    this.image = new Image();
    this.image.src = "images/car.png";
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}
const car = new Car();

class Obstacle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.image = new Image();
    this.image.src = "images/construction.png";
  }
  draw() {
    this.x -= 1;
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collision(item) {
    return (
      this.x < item.x + item.width &&
      this.x + this.width > item.x &&
      this.y < item.y + item.height &&
      this.y + this.height > item.y
    );
  }
}
const obstacle = new Obstacle();
