const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
let gameIsRunning = true;

class Car {
  constructor(distance) {
    this.distance = distance;
  }

  moveLeft() {
    this.distance -= 50;
    console.log(car.distance);
  }

  moveRight() {
    this.distance += 50;
    console.log(car.distance);
  }
}

class Obstacle {
  constructor(positionY) {
    this.positionX = 0;
    this.positionY = positionY;
    this.height = 50;
    this.width = 50;
  }

  setRandomPosition() {
    this.positionX = Math.random() * (context.canvas.width - 200) + 50;
    this.width = 100 + Math.random() * 100;
  }

  paintObs() {
    context.fillStyle = 'red';
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }

  runLogic() {
    this.positionY += 3;
    this.checkCollision();
    scoreValue();
    context.fillStyle = 'white';
    context.font = '20px Georgia';
    context.fillText(parseInt(score), context.canvas.width / 2 + 100, context.canvas.height - 50);
  }

  checkCollision() {
    const carX = car.distance;
    const carY = context.canvas.height - 100;
    const carWidth = 50;
    const carHeight = 80;

    const obsX = this.positionX;
    const obsY = this.positionY;
    const obsWidth = this.width;
    const obsHeight = this.height;

    if (
      carX + carWidth > obsX &&
      carX < obsX + obsWidth &&
      carY + carHeight > obsY &&
      carY < obsY + obsHeight
    ) {
      gameIsRunning = false;
    }
  }
}

var obsArray = [];
for (let i = 0; i < 100; i++) {
  let obs = new Obstacle(i * -200 - 50);
  obs.setRandomPosition();
  obsArray.push(obs);
}

let runLogic = () => {
  for (let obs of obsArray) {
    obs.runLogic();
  }
};

function drawCar() {
  const imageUrl = '.../../images/car.png';
  const carImg = new Image();
  carImg.src = imageUrl;
  context.drawImage(carImg, car.distance, context.canvas.height - 100, 50, 80);
}

function background() {
  var greenMargin = 30;
  var whiteLine = greenMargin + 10;

  context.fillStyle = 'grey';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  context.fillStyle = 'green';
  context.fillRect(0, 0, greenMargin, context.canvas.height);
  context.fillStyle = 'green';
  context.fillRect(
    context.canvas.width - greenMargin,
    0,
    context.canvas.width,
    context.canvas.height
  );
  context.fillStyle = 'white';
  context.fillRect(whiteLine, 0, 10, context.canvas.height);
  context.fillStyle = 'white';
  context.fillRect(context.canvas.width - whiteLine - 10, 0, 10, context.canvas.height);
}

const car = new Car((context.canvas.width - 50) / 2);

window.addEventListener('keydown', event => {
  // Stop the default behavior (moving the screen to the left/up/right/down)
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      if (car.distance == 25) {
        break;
      }
      car.moveLeft();
      drawEverything();
      break;
    case 39:
      if (car.distance == 425) {
        break;
      }
      car.moveRight();
      drawEverything();
      break;
  }
});

function drawEverything() {
  background();
  drawCar();
  for (let obs of obsArray) {
    obs.paintObs();
  }
}

var score = 0;
function scoreValue() {
  score += 0.01;
  console.log(score);
}

const loop = timestamp => {
  drawEverything();
  runLogic();
  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    //      background();
    //    drawCar();
    startGame();
  };
};

function reset() {
  var obsArray = [];
  car.distance = (context.canvas.width - 50) / 2;
  drawEverything();
  let gameIsRunning = true;
  loop();
  runLogic();
}

function startGame() {
  drawEverything();
  loop();
  runLogic();
  reset();
}
drawEverything();
drawCar();
