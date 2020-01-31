const $canvas = document.querySelector('canvas');
const context = $canvas.getContext('2d');
let gameIsRunning = true;
console.log(context);

class CharacterCar {
  constructor(row) {
    this.row = row;
    this.height = 80;
    this.width = 50;
  }

  moveRight() {
    this.row += 50;
    console.log('right');
  }

  moveLeft() {
    this.row -= 50;
  }

  drawCar() {
    const image = new Image();
    const imageUrl = './images/car.png';
    image.src = imageUrl;
    image.addEventListener('load', () => {
      context.drawImage(image, this.row, context.canvas.height / 2, this.width, this.height);
    });
    context.drawImage(image, this.row, context.canvas.height / 2, this.width, this.height);
  }
}

const car = new CharacterCar(175);

console.log(car.row);

// Class object
class Obstacule {
  constructor(posY) {
    this.posX = 100 + Math.random() * (context.canvas.width - 200) + 5;
    this.posY = posY;
    this.width = 130;
    this.height = 50;
  }

  drawobstacule() {
    context.fillStyle = 'red';
    context.fillRect(this.posX, this.posY, this.width, this.height);
  }

  runLogic() {
    this.posY += 3;
    this.checkCollision();
  }

  setRandomPosition() {
    this.posY = Math.random() * 100;
    this.posX = 100 + Math.random() * (context.canvas.width - 200) + 5;
  }

  checkCollision() {
    const carX = car.row;
    const carY = context.canvas.height / 2;
    const carWidth = car.width;
    const carHeight = car.height;

    const obstacleX = this.posX;
    const obstacleY = this.posY;
    const obstacleWidth = this.width;
    const obstacleHeight = this.height;

    console.log(carX);
    console.log(obstacleX);

    if (
      carX + carWidth > obstacleX &&
      carX < obstacleX + carWidth &&
      carY + carHeight > obstacleY &&
      carY < obstacleY + obstacleHeight
    ) {
      gameIsRunning = false;
    }
  }
}

const obstacles = [];

for (let i = 0; i < 100; i++) {
  const obstacle = new Obstacule(i * -200);
  obstacles.push(obstacle);
}

const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }
};

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };
};

function startGame() {
  loop();
}

window.addEventListener('keydown', event => {
  event.preventDefault();

  // React based on the key pressed
  switch (event.keyCode) {
    case 37:
      car.moveLeft();
      drawEverything();
      console.log('left');
      break;
    case 39:
      car.moveRight();
      drawEverything();
      console.log('right');
      break;
  }
});

//creat movement

function drawEverything() {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  drawBackground();
  car.drawCar();
  for (let obstacle of obstacles) {
    obstacle.drawobstacule();
  }
}

function drawBackground() {
  //square grey
  context.fillStyle = 'grey';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);

  //green line beggining
  const greenRectWidth = 30;
  context.fillStyle = 'green';
  context.fillRect(0, 0, greenRectWidth, context.canvas.height);

  //green line end
  context.fillStyle = 'green';
  context.fillRect(
    context.canvas.width - greenRectWidth,
    0,
    context.canvas.width,
    context.canvas.height
  );

  //white line beggining
  const whiteRectWidth = 10;
  context.fillStyle = 'white';
  context.fillRect(40, 0, whiteRectWidth, context.canvas.height);

  //white line end
  context.fillStyle = 'white';
  context.fillRect(
    context.canvas.width - greenRectWidth - whiteRectWidth,
    0,
    whiteRectWidth,
    context.canvas.height
  );

  // dash line
  context.beginPath();
  context.lineWidth = 5;
  context.setLineDash([30, 20]);
  context.moveTo(200, 600);
  context.lineTo(200, 0);
  context.strokeStyle = 'white';
  context.stroke();
}

//draw car

const loop = timestamp => {
  drawEverything();
  runLogic();

  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }
};
