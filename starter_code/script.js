let player;
let obstacles = [];

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    raceCar.startGame();
    obstacles = [];
    raceCar.frames = 0;
    player = new Player(raceCar.canvas.width / 2 - 25, raceCar.canvas.height - 140);
  };
};

let raceCar = {
  count: 0,
  ctx: 0,
  frames: 0,
  canvas: document.createElement('canvas'),
  startGame: function () {
    this.canvas.width = 350;
    this.canvas.height = 510.77;
    this.ctx = this.canvas.getContext('2d');
    document.querySelector('body').appendChild(this.canvas);
    this.drawMap();
    this.interval = setInterval(() => {updateGame(); this.frames += 1;}, 15);
  },
  drawMap: function () {
    this.ctx.fillStyle = 'gray';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 30, this.canvas.height);
    this.ctx.fillRect(this.canvas.width - 30, 0, 30, this.canvas.height);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(40, 0, 8, this.canvas.height);
    this.ctx.fillRect(this.canvas.width - 48, 0, 8, this.canvas.height);
    // lines in the middle
    if (this.frames % 15 === 0) {
      console.log(this.frames);
      if(this.count === 0) {
        this.count = 1;
      } else {
        this.count = 0
      }
    }
    if (this.count === 0) {
      // this.ctx.beginPath();
      // this.ctx.moveTo(this.width / 2, 0);
      // this.ctx.lineTo();
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 4;
      this.ctx.setLineDash([20, 10]);
      this.ctx.moveTo(this.canvas.width / 2, 0);
      this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
      this.ctx.stroke();
      this.ctx.closePath();
    } else {
      // this.ctx.beginPath();
      // this.ctx.moveTo(this.width / 2, 10);
      // this.ctx.lineTo();
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 4;
      this.ctx.setLineDash([20, 10]);
      this.ctx.moveTo(this.canvas.width / 2, 10);
      this.ctx.lineTo(this.canvas.width / 2, this.canvas.height);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  },
  clean: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  
}

class Player { 
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = 0;
  }
  
  refresh() {
    let ctx = raceCar.ctx;
    let img = new Image();
    img.src = './images/car.png';
    ctx.drawImage(img, this.x, this.y, 50, 100);
  }
  
  speedUp() {
    if (!(this.x + this.speedX < 30 || this.x + this.speedX > 270)){ 
      this.x += this.speedX;
    }
  }
  
  isItACrash(obstacle) {
    if (this.y < obstacle.y + obstacle.height && this.y + 100 > obstacle.y) {
      if (!((this.x < obstacle.x && this.x + 50 < obstacle.x) || (this.x > obstacle.x + obstacle.width && this.x + 50 > obstacle.x + obstacle.width))) { 
        clearInterval(raceCar.interval);
      }
    }
  }
}

class Obstacle {
  constructor(x, y, width) {
    this.x = x;
    this.y = y;
    this.speedY = 5;
    this.width = width;
    this.height = 20;
    this.ctx = raceCar.ctx;
  }
  
  updateObstacle() {
    this.ctx.beginPath();
    this.ctx.fillStyle = 'rgba(166, 0, 0, 1)';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  
  speedUp() {
    this.y += this.speedY;
  }
}

const createObstacle = () => {
  if (raceCar.frames % 80 === 0) {
    let maxPositionX = 200;
    let minPositionX = 48;
    let maxSize = 102;
    let minSize = 60;
    obstacles.push(new Obstacle(Math.floor(Math.random() * (maxPositionX - minPositionX)) + minPositionX, 0, Math.floor(Math.random() * (maxSize - minSize)) + minSize));
  }
  obstacles.forEach(obstacle => {
    obstacle.speedUp();
    obstacle.updateObstacle();
    player.isItACrash(obstacle);
  });
  
}

const updateGame = () => {
  raceCar.clean();
  raceCar.drawMap();
  player.refresh();
  player.speedUp();
  createObstacle();
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: // left arrow
    player.speedX = -4;
    break;
    case 39: // right arrow
    player.speedX = 4;
    break;
  }
};

document.onkeyup = function (e) {
  switch (e.keyCode) {
    case 37: // left arrow
    player.speedX = -1;
    break;
    case 39: // right arrow
    player.speedX = 1;
    break;
  }
}







