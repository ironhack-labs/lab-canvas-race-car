// const canvas = document.querySelector('canvas')
// const context = canvas.getContext('2d')
class GameCanvas {
  constructor() {
    this.canvas = document.querySelector('canvas');
    this.context = canvas.getContext('2d');
    this.img = new Image();
    this.img.src = './images/road.png';
    this.y = 0;
    this.speed = 1;
  }

  drawBg() {
    this.y += this.speed;
    if (this.y > this.canvas.height) this.y = 0;
    this.context.drawImage(this.img, 0, this.y, this.canvas.width, this.canvas.height);
    this.context.drawImage(
      this.img,
      0,
      this.y - this.canvas.height,
      this.canvas.width,
      this.canvas.height
    );
  }
}

class Car {
  constructor() {
    this.x = 225;
    this.y = 590;
    this.img = new Image();
    this.img.src = './images/car.png';
    this.width = 35;
    this.height = 75;
  }
  draw(context) {
    context.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  moveUp() {
    if (this.y < 0) return;
    else this.y -= 25;
  }
  moveDown() {
    if (this.y > 635) return;
    else this.y += 25;
  }
  moveLeft() {
    if (this.x < 65) return;
    else this.x -= 25;
  }
  moveRight() {
    if (this.x > 405) return;
    else this.x += 25;
  }

  crash(obstacle) {
    if (
      obstacle.x < this.x + this.width &&
      obstacle.x + obstacle.width > this.x &&
      obstacle.y < this.y + this.height &&
      obstacle.height + obstacle.y > this.y
    )
      return true;
  }
}

// class Obstacle {
//   constructor(context) {
//     this.context = context
//     this.width = Math.floor(Math.random() * 100)
//     this.height = 20
//     this.x = Math.floor(Math.random() * 150)
//     this.y = 0
//     this.obstacles = [{}]
//     this.score = 0
//   }

//   drawObstacles() {
//     this.y++
//     if (this.y > 700) return this.score++
//     this.context.fillStyle = 'red'
//     this.context.fillRect(this.x, this.y, this.width, this.height)
//     // requestAnimationFrame(drawObstacles)
//   }
// }

const gameCanvas = new GameCanvas();
const car = new Car();
// const obstacle = new Obstacle(gameCanvas.context)

// let canvasElem = document.querySelector('canvas');

// canvasElem.addEventListener('mousedown', function(e) {
//   let rect = canvasElem.getBoundingClientRect();
//   let x = event.clientX - rect.left;
//   let y = event.clientY - rect.top;
//   console.log('Coordinate x: ' + x, 'Coordinate y: ' + y);
// });

// const obstacle = new Obstacle(gameCanvas.context)

let canvasElem = document.querySelector('canvas');

let obstacles = [];

canvasElem.addEventListener('mousedown', function(e) {
  let rect = canvasElem.getBoundingClientRect();
  let x = event.clientX - rect.left;
  let y = event.clientY - rect.top;
  console.log('Coordinate x: ' + x, 'Coordinate y: ' + y);
  console.log(obstacles);
});

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  let frame = 0;
  let points = 0;
  let crashFlag = false;
  function startGame() {
    frame++;
    gameCanvas.context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameCanvas.drawBg();
    car.draw(gameCanvas.context);

    if (frame > 80) {
      obstacles.push({
        width: 60,
        height: 15,
        x: Math.random() * (380 - 65) + 65,
        y: 0
      });
      frame = 0;
    }
    obstacles.forEach((obstacle, oIndex, Oarr) => {
      if (obstacle.y > 700) {
        Oarr.shift();
        points++;
      }
      if (car.crash(obstacle)) {
        crashFlag = true;
      }
      obstacle.y += 1;
      document.getElementById('score').innerHTML = `Score : ${points}`;
      gameCanvas.context.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
    });

    if (!crashFlag) requestAnimationFrame(startGame);
    else {
      car.x = 225;
      car.y = 590;
      crashFlag = false;
      obstacles = [];
      gameCanvas.context.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
      document.getElementById('score').innerHTML = `Score : ${points} <br>Loser!`;
      points = 0;
    }
  }
};

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38:
      car.moveUp();
      break;
    case 40:
      car.moveDown();
      break;
    case 37:
      car.moveLeft();
      break;
    case 39:
      car.moveRight();
      break;
  }
};
