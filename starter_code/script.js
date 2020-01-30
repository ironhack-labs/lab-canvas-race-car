const $canvas = document.querySelector('canvas');

const context = $canvas.getContext('2d');

const width = context.canvas.width;
const height = context.canvas.height;

/*Car 2 Iteration*/
class Car {
  construtor() {
    this.x = 0;
    this.y = 0;
    this.image = new Image();
    this.image.src = './images/car.png';
    this.keyboardEventListeners();
    console.log(this.image);
  }

  drawCar() {
    context.drawImage(this.image, this.x, this.y, 50, 70);
  }

  moveRight() {
    //if (this.positionX < width) {

    this.positionX += 50;
    //}
  }
  moveLeft() {
    //if (this.positionX > width) {

    this.positionX -= 50;
    //}
  }
}

const car = new Car();

/*Background 1 Iteration*/
function background() {
  const borderGreen = 30;
  const whiteLine = borderGreen + 10;
  //Middle Grey
  context.fillStyle = 'grey';
  context.fillRect(0, 0, context.canvas.width, context.canvas.height);
  //Left and Right Border Green
  context.fillStyle = 'green';
  context.fillRect(0, 0, borderGreen, context.canvas.height);
  context.fillStyle = 'green';
  context.fillRect(
    context.canvas.width - borderGreen,
    0,
    context.canvas.width,
    context.canvas.height
  );
  //White Road borders
  context.fillStyle = 'white';
  context.fillRect(whiteLine, 0, 10, context.canvas.height);
  context.fillStyle = 'white';
  context.fillRect(context.canvas.width - whiteLine - 10, 0, 10, context.canvas.height);
  //Middle White Road
  context.strokeStyle = 'white';
  context.lineWidth = 3;
  context.beginPath();
  context.setLineDash([12, 25]);
  context.moveTo(width / 2, 0);
  context.lineTo(width / 2, height);
  context.stroke();
}

/*Iteration 3*/
function keyboardEventListeners() {
  window.addEventListener('keydown', event => {
    event.preventDefault();
    switch (event.keyCode) {
      case 37:
        car.moveLeft();
        console.log('left');
        break;
      case 39:
        car.moveRight();
        break;
    }
  });
}

/*Obstacles*/
class Obstacle {
  constructor(positionY) {
    this.positionY = positionY;
    this.positionX = 0;
    this.width = 50;
    this.height = 50;

    this.setRandomPosition();
  }
  setRandomPosition() {
    this.positionX = Math.random() * (width - 200) + 50;
    this.width = 100 + Math.random() * 100;
  }
  paint() {
    context.fillStyle = 'green';
    context.fillRect(this.positionX, this.positionY, this.width, this.height);
  }
  runLogic() {
    this.positionY += 2;
  }
}

const obstacles = [];

for (let i = 0; i < 10; i++) {
  const obstacle = new Obstacle(i * -200 + 50);
  obstacles.push(obstacle);
}

/*const runLogic = () => {
  for (let obstacle of obstacles) {
    obstacle.runLogic();
  }

  
const loop = (timestamp) => {
  runLogic();
  background
  for (let obstacle of obstacles) {
    obstacle.paint();
  }

  if (gameIsRunning) {
    window.requestAnimationFrame(loop);
  }*/

/*Start Game*/
function startGame() {
  //console.dir(car);
  background();
  car.drawCar();
  keyboardEventListeners();
  //runLogic();
  //loop();
}

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };
};
