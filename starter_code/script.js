const $canvas = document.querySelector('canvas');
const ctx = $canvas.getContext('2d');

window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };

  function startGame() {}
};

//background

let car = new Coche(240);
let pedra = new Obstacles(randomX());
function drawBackground() {
  ctx.clearRect(0, 0, 500, 700);
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 50, 700);
  ctx.fillRect(450, 0, 50, 700);
  ctx.fillStyle = 'white';
  ctx.fillRect(50, 0, 10, 700);
  ctx.fillRect(440, 0, 10, 700);
  for (let i = -1500; i <= 700; i += 90) {
    ctx.fillRect(245, i + animate, 10, 40);
  }
  car.drawCar();
  drawObstacle();
  // pedra.spawn();
}

timestampDelta = 0;
previousTimestamp = 0;

// drawBackground();

window.addEventListener('keydown', event => {
  event.preventDefault();
  switch (event.keyCode) {
    case 37:
      car.moveLeft();
      break;

    case 39:
      car.moveRight();

      break;
  }
});

function drawObstacle(x) {
  ctx.fillStyle = 'red';
  ctx.fillRect(x, 0 + animate, 100, 40);
}

let animate = 0;
let obstacleCreatorNumber = 0;
function animateFunction() {
  drawBackground();
  if (animate >= 700) {
    animate = 0;
  }
  if (obstacleCreatorNumber % 157 === 0) {
    createObstacles;
  }
  animate += 10;
  obstacleCreatorNumber += 1;
  console.log(animate);
}

setInterval(animateFunction, 100);

function randomX() {
  return Math.floor(Math.random() * 400);
}

function randomY() {
  return Math.floor(Math.random() * 100 + 50);
}

function createObstacles() {
  context.fillStyle = red;
  context.fillRect(randomXY(), animate, w, 60);
}
