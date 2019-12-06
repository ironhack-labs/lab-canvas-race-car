let gameArea = document.getElementById('game-board');

let myObstacles = [];

let raceCarCanvas = {
  canvas: document.createElement('canvas'),
  start() {
    this.canvas.width = 250;
    this.canvas.height = 500;
    this.context = this.canvas.getContext("2d");
    gameArea.appendChild(this.canvas);
    this.update();
    this.interval = setInterval(updateGameArea,20);
    this.frames = 0;
  },

  update() {
    // asfalto
    let ctx = this.canvas.getContext("2d");
    ctx.fillStyle = 'rgb(128,128,128)'
    ctx.fillRect(0, 0, 250, 500);
    // matinho
    ctx.fillStyle = 'rgb(38, 129, 0)'
    ctx.fillRect(0, 0, 15, 500);
    ctx.fillRect(235, 0, 15, 500);
    // linhas brancas
    ctx.fillStyle = 'white';
    ctx.fillRect(20, 0, 10, 500);
    ctx.fillRect(220, 0, 10, 500);
    // tracejado
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.setLineDash([15, 10]);
    ctx.beginPath();
    ctx.moveTo(122, 0);
    ctx.lineTo(122, 500);
    ctx.stroke();
    ctx.setLineDash([]);
  },

  clear() {
    this.context.clearRect(0,0,250,500);
  },

  stop() {
    clearInterval(this.interval);
  }

  score() {
    let points = Math.floor(this.frames / 5);
  }

}

let carImgPath = './images/car.png';
let carImg = new Image();
carImg.src = carImgPath;

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
  }

  update() {
    var ctx = raceCarCanvas.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    let futurePos = this.x + this.speedX;
    console.log(futurePos);
    if (futurePos > 30 && futurePos < 200) {
      this.x += this.speedX;
    }
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

let raceCar = new Component(20, 40, 'blue', 112, 440);

const startGame = () => {
  // reinicializa os obstáculos e o canvas
  myObstacles = [];
  raceCarCanvas.start();
  // reinicializa as coordenadas do carro e o desenha
  raceCar.x = 112;
  raceCar.y = 440;
  raceCar.update();
}

updateObstacles = () => {
  raceCarCanvas.frames += 1;
  for (let i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].y += 5;
    myObstacles[i].update();
  }
  if (raceCarCanvas.frames % 70 === 0) {
    let minWidth = 60;
    let maxWidth = 140;
    let width = Math.floor(Math.random()*(maxWidth - minWidth + 1) + minWidth);

    let maxX = 220 - width;
    let minX = 30;
    let initialX = Math.floor(Math.random()*(maxX - minX + 1) + minX);
    myObstacles.push(new Component(width, 15, "red", initialX, 0));
  }
}

const checkGameOver = () => {
  let crashed = myObstacles.some(obstacle => raceCar.crashWith(obstacle));

  if (crashed) {
    raceCarCanvas.stop();
  }
}

const updateGameArea = () => {
  raceCarCanvas.clear();
  raceCarCanvas.update();
  raceCar.newPos();
  raceCar.update();
  updateObstacles();
  checkGameOver();
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  }
};

document.onkeydown = e => {
  switch (e.keyCode) {
    case 37:
      if (raceCar.speedX > -5) {
      raceCar.speedX -= 4;
      }
    break;
    case 39:
      if (raceCar.speedX < 5) { 
      raceCar.speedX += 4;
      }
      break;
    }
}

document.onkeyup = e => {
  raceCar.speedX = 0;
}

