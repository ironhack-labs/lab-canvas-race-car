const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const myGameArea = {
  frames: 0,
  isGamePaused: false,
  isGameOver: false,
  start: function () {
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  score: function () {
    const points = Math.floor(this.frames / 10);
    ctx.font = '24px serif';
    ctx.fillStyle = 'black';
    ctx.fillText(`Score: ${points}`, 50, 50);
  },
};

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
  }

  render() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class Car extends Component {
  constructor(width, height, color, x, y) {
    super(width, height, color, x, y);
  }

  render() {
    const carImg = new Image();
    carImg.src = '../images/car.png';

    let xPosition = this.x;

    if (this.x < 0) xPosition = 0;
    if (this.x > canvas.width) xPosition = canvas.width - car.width;

    ctx.drawImage(carImg, xPosition, this.y, car.width, car.height);
  }
}

const myObstacles = [];

function renderObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 5;
    myObstacles[i].render();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames % 100 === 0) {
    const minHeight = 40;
    const maxHeight = 200;
    const randomWidth = Math.floor(
      Math.random() * (maxHeight - minHeight + 1) + minHeight,
    );
    const randomObstacleXPosition = Math.floor(
      Math.random() * canvas.width - randomWidth,
    );

    myObstacles.push(
      new Component(randomWidth, 30, 'tomato', randomObstacleXPosition, 0),
    );
  }
}

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return car.crashWith(obstacle);
  });

  if (crashed) {
    myGameArea.stop();
    const gameIntro = document.querySelector('.game-intro');
    const text = document.createElement('p');
    text.innerHTML = `<div>GAME OVER! TRY AGAIN.</div> <br>
    <button>Restart</button>`;
    gameIntro.appendChild(text);
  }
}

const carSize = {
  width: 50,
  height: 100,
};

const car = new Car(
  50,
  100,
  'transparent',
  canvas.width / 2 - carSize.width / 2,
  canvas.height - carSize.height,
);

document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'ArrowLeft':
      car.speedX -= 3;
      break;
    case 'ArrowRight':
      car.speedX += 3;
      break;
  }
});

document.addEventListener('keyup', () => {
  car.speedX = 0;
});

function updateGameArea() {
  myGameArea.clear();
  car.newPos();
  car.render();
  renderObstacles();
  checkGameOver();
  myGameArea.score();
}

document.getElementById('start-button').onclick = () => {
  myGameArea.start();
};
