const myObstacles = [];

const gameBoard = document.getElementById('game-board');
gameBoard.setAttribute('class', 'canvas');

const createCanvas = document.createElement('canvas');
gameBoard.appendChild(createCanvas);
createCanvas.setAttribute('width', '350');
createCanvas.setAttribute('height', '600');
createCanvas.setAttribute('style', 'background-color: lightgray');

const ctx = createCanvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(0, 0, 350, 600);

ctx.fillStyle = 'gray';
ctx.fillRect(25, 0, 300, 600);

ctx.lineWidth = 10;
ctx.strokeStyle = 'white';
ctx.strokeRect(45, -10, 260, 620);

ctx.beginPath();
ctx.moveTo(175, 0);
ctx.lineTo(175, 600);
ctx.lineWidth = 5;
ctx.setLineDash([25, 25]);
ctx.stroke();
ctx.closePath();

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  update() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.lineWidth = 10;
    ctx.setLineDash([]);
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

  crashWith(obstacles) {
    return !(
      this.bottom() < obstacles.top() ||
      this.top() > obstacles.bottom() ||
      this.right() < obstacles.left() ||
      this.left() > obstacles.right()
    );
  }
}
class Player extends Component {
  constructor(width, height, color, x, y) {
    super(width, height, color, x, y);
  }

  draw() {
    let newCar = new Image();
    newCar.src = './images/car.png';
    ctx.drawImage(newCar, this.x, this.y, this.width, this.height);
  }
}

window.onload = function () {
  document.getElementById('start-button').onclick = function () {
    startGame();
  };

  function startGame() {
    animation();
  }
};

const animation = () => {
  this.interval = setInterval(updateGameArea, 20);
};

const updateGameArea = () => {
  clear();
  drawBoard();
  updateObstacles();
  player.draw();
  gameOver();
};

const clear = () => {
  ctx.clearRect(0, 0, 350, 600);
};

const drawBoard = () => {
  ctx.fillStyle = 'green';
  ctx.fillRect(0, 0, 350, 600);

  ctx.fillStyle = 'gray';
  ctx.fillRect(25, 0, 300, 600);

  ctx.lineWidth = 10;
  ctx.strokeStyle = 'white';
  ctx.strokeRect(45, -10, 260, 620);

  ctx.beginPath();
  ctx.moveTo(175, 0);
  ctx.lineTo(175, 600);
  ctx.lineWidth = 5;
  ctx.setLineDash([25, 25]);
  ctx.stroke();
  ctx.closePath();

  ctx.lineWidth = 10;
  ctx.setLineDash([]);
};

let xAxis = 135;
let player = new Player(79, 160, 'red', xAxis, 430);
let frames = 0;
const updateObstacles = () => {
  for (let i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].y += 3;

    ctx.beginPath();
    ctx.moveTo(175, myObstacles[i].y);
    ctx.lineTo(175, 600);
    ctx.lineWidth = 5;
    ctx.setLineDash([25, 25]);
    ctx.stroke();
    ctx.closePath();

    myObstacles[i].update();

    ctx.lineWidth = 10;
    ctx.setLineDash([]);
  }

  frames += 1;
  if (frames % 180 === 0) {
    let x = Math.floor(Math.random() * 150);
    let minLength = 100;
    let maxLength = 150;
    let larg = Math.floor(
      Math.random() * (maxLength - minLength + 1) + minLength
    );
    myObstacles.push(new Component(larg, 20, 'black', x, 0));
  }
};

const stopRace = () => {
  clearInterval(this.interval);
};

const gameOver = () => {
  let crashed = myObstacles.some(obstacle => player.crashWith(obstacle));

  if (crashed) {
    return stopRace();
  }
};

document.onkeydown = function (e) {
  if (e.keyCode === 37 && player.x > 25) {
    player.x -= 10;
  } else if (e.keyCode === 39 && player.x < 325 - 80) {
    player.x += 10;
  }
};
