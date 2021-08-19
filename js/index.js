const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 700;
const game = (window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    window.addEventListener('keydown', function (e) {
      keys[e.keyCode] = true; // I tried to use the non-deprecated e.key but I had no idea how to reference it
    });
    window.addEventListener('keyup', function (e) {
      delete keys[e.keyCode];
    });
  };
});

const car = {
  x: 100,
  y: 520,
  width: 79,
  height: 160,
  speed: 9,
  moving: false,
};

const keys = [];

function startGame() {
  startAnimating(50);
}

function drawCar() {
  const img = new Image();
  img.src = 'images/car.png';
  ctx.drawImage(img, car.x, car.y, car.width, car.height);
}

function drawBackground() {
  ctx.fillStyle = '#008100';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#808080';
  ctx.fillRect(40, 0, canvas.width - 80, canvas.height);
  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(50, 0, canvas.width - 100, canvas.height);
  ctx.fillStyle = '#808080';
  ctx.fillRect(60, 0, canvas.width - 120, canvas.height);
  for (let i = 30; i < canvas.height; i += 60) {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(240, i, 10, 30);
  }
}

function moveCar() {
  if (keys[37] && car.x > 61) car.x -= car.speed;
  if (keys[39] && car.x < canvas.width - car.width - 59) car.x += car.speed;
}

// Found this stuff on a youTube tutorial, and thought it was interesting also for future use
// Custom algorithm to control how often request animation frame method serves frames of animation loop

let fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
  fpsInterval = 1000 / fps;
  then = Date.now();
  startTime = then;
  animate();
}

function animate() {
  requestAnimationFrame(animate);
  now = Date.now();
  elapsed = now - then;
  if (elapsed > fpsInterval) {
    then = now - (elapsed % fpsInterval);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBackground();
    drawCar();
    moveCar();
  }
}
