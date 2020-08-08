const carImg = new Image();
carImg.src = './images/car.png';

class Car {
  constructor(img) {
    this.img = img;
    this.x = 250 - 158 / 3 / 2;
    this.width = 158 / 3;
    this.height = 319 / 3;
    this.speedX = 0;
  }
}

const car = new Car(carImg);

const canvas = document.querySelector('canvas');
// console.log (canvas.width, canvas.height);
const context = canvas.getContext('2d');

const road = new Image();
road.src = './images/road.png';

const obstacles = [];

let frames = 0;

let imageY = 0;

let interval;

function updateObstacles() {
  for (let i = 0; i < obstacles.length; i += 1) {
    obstacles[i].y += 1;
    // console.log('Vou printar obstaculo ' + i + ' que eh ' + obstacles[i]);
    context.fillStyle = 'red';
    // console.log(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);
    context.fillRect(obstacles[i].x, obstacles[i].y, obstacles[i].width, obstacles[i].height);
  }

  frames += 1;

  if (frames % 165 === 0) {
    let y = 0;
    let minWidth = 100;
    let maxWidth = 300;
    let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    let x = Math.floor(Math.random() * (460 - width) + 40);
    obstacles.push({ 'width': width, 'height': 20, 'x': x, 'y': y });
    // console.log(obstacles);
  }
}


function drawGame() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(road, 0, imageY, canvas.width, canvas.height);
  context.drawImage(road, 0, imageY - canvas.height, canvas.width, canvas.height);
  imageY = (imageY + 1) % canvas.height;

  car.x += car.speedX;
  // console.log(car.x,car.speedX);
  context.drawImage(car.img, car.x, canvas.height - car.height - 20, car.width, car.height);

  updateObstacles();

  const points = Math.floor(frames / 5);
  context.font = '20px Arial';
  context.fillStyle = 'white';
  context.fillText(`Score: ${points}`, 80, 30);

  const crashed = obstacles.some(function (obstacle) {
    // console.log('parte de cima-',obstacle.y + obstacle.height > canvas.height - car.height - 20);
    // console.log('direita do carro-',car.x + car.width);
    // console.log('esquerda do obstaculo-',obstacle.x);
    // console.log('esquerda do carro-',car.x);
    // console.log('direira do obstaculo-',obstacle.x + obstacle.width);
    let crashTop = (obstacle.y + obstacle.height >= canvas.height - car.height - 20);
    let crashLeft = (car.x < obstacle.x + obstacle.width && car.x > obstacle.x);
    let crashRight = (car.x + car.height > obstacle.x && car.x + car.height <= obstacle.x + obstacle.width);

    return crashTop && (crashLeft || crashRight);
  });

  if (crashed) {
    clearInterval(interval);
    context.fillStyle = 'black';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.textAlign = 'center';
    context.font = '50px Arial';
    context.fillStyle = 'red';
    context.fillText(`Game Over!`, canvas.width / 2, canvas.height / 3);
    context.fillStyle = 'white';
    context.fillText(`Your final score:`, canvas.width / 2, canvas.height / 3 + 60);
    context.fillText(`${points}`, canvas.width / 2, canvas.height / 3 + 120);
  }
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  function startGame() {
    interval = setInterval(drawGame, 20);
  }
};

document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37: // left arrow
      if (car.x >= 40) {
        car.speedX -= 1;
      } else {
        car.x = 40;
      }
      break;
    case 39: // right arrow
      if (car.x <= 460) {
        car.speedX += 1
      } else {
        car.x = 460;
      }
      break;
  }
});

document.addEventListener('keyup', (e) => {
  car.speedX = 0;
  if (car.x < 40) car.x = 40;
  if (car.x > 460) car.x = 460;
});
