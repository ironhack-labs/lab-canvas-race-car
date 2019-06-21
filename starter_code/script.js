let ct;
let img = document.getElementById('car');
let faixas = [];
let obstaculos = [];
let ctx = document.getElementById('canvas');

window.onload = function() {
  ct = ctx.getContext('2d');
  document.getElementById("start-button").onclick = function() {
    road.clearEnd();
    road.start();
  };
}

let road = {
  frames: 0,
  start: function() {
    ct.width = 400;
    ct.height = 600;
    this.clear();
    this.drawBoard();
    this.interval = setInterval(updateGameArea, 20);
    this.points = 0;
  },
  clearEnd: function() {
    clearInterval(this.interval);
    this.frames = 0;
    this.points = 0; 
    ct.clearRect(0, 0, ct.width, ct.height);
    player = new Component(60, 120, 150, 450, true, false);
    obstaculos = [];
    faixas = [];
  },
  clear: function() {
    ct.clearRect(0, 0, ct.width, ct.height);
  },
  stop: function() {
    clearInterval(this.interval);
    ct.clearRect(0, 0, 400, 600);
    ct.fillStyle = 'black';
    ct.fillRect(0, 0, 400, 600);
    ct.fill();
    ct.fillStyle = 'red';
    ct.fillText('Game Over!', 150, 100);
    ct.fillStyle = 'white';
    ct.fillText(`Your final score: ${this.points}`, 100, 150);
    ct.fill();
  },
  drawBoard: function() {
    ct.beginPath();
    ct.fillStyle = 'green';
    ct.fillRect(0, 0, 30, 600);
    ct.fillRect(370, 0, 30, 600);
    ct.fill();
    ct.closePath();
  
    ct.beginPath();
    ct.fillStyle = 'darkgrey';
    ct.fillRect(30, 0, 5, 600);
    ct.fillRect(365, 0, 5, 600);
    ct.fillRect(45, 0, 310, 600);
    ct.fill();
    ct.closePath();
  },
  score: function() {
    if (this.frames % 5 === 0)
      this.points++;
    ct.font = "18px arial";
    ct.fillStyle = "black";
    ct.fillText("Score: " + this.points, 10, 20);
  }
};

function drawCar(x) {
  ct.drawImage(img, x, 450, 60, 120);
}

class Faixas {
  constructor() {
    this.width = 5;
    this.height = 20;
    this.color = 'white';
    this.x = 197;
    this.y = -20;
  }

  update() {
    ct.fillStyle = this.color;
    ct.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.y += this.speedY;
  }
};

class Component {
  constructor(width, height, x, y, playerOuObs, gap) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0; 
    this.player = playerOuObs;
    this.gap = gap;
  }

  update() {
    if (this.player) {
      drawCar(this.x);
    } else {
      ct.fillStyle = 'red'
      ct.fillRect(this.x, this.y, this.width, this.height);
    }
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
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
    if (obstacle.y >= player.top() - 10) {
      if ((player.left() > obstacle.left() || player.right() > obstacle.left()) &&
      (player.left() < obstacle.right() || player.right() < obstacle.right())) {
        return true;
      }
    }
  }
};

const updateGameArea = () => {
  road.clear();
  road.drawBoard();
  updateFaixas();
  player.newPos();
  drawCar(player.x);
  updateObstacles();
  checkGameOver();
  road.score();
}

const updateFaixas = () => {
  for (let i = 0; i < faixas.length; i++) {
    faixas[i].y += 10;
    faixas[i].update();
    if (faixas[i].y > 620)
      faixas.shift();
  }
  road.frames += 1;
  if (road.frames % 5 === 0) {
    faixas.push(new Faixas());
  }
}

let player = new Component(60, 120, 150, 450, true, false);

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: // left arrow
      if (player.x >= 0)
        player.x -= 30;
      break;
    case 39: // right arrow
    if (player.x < 350)
      player.x += 30;
    break;
  }
};

function updateObstacles() {
  for (let i = 0; i < obstaculos.length; i++) {
    obstaculos[i].y += 10;
    obstaculos[i].update();
    if (obstaculos[i].y > 580)
      obstaculos.shift();
  }
  if (road.frames % 80 === 0) {
    let minWidth = 100;
    let maxWidth = 300;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let x = Math.floor(Math.random() * (400)) - width;
    if (x < 0)
      x = 0;
    let componente = new Component(width, 20, x, 0, false, false);
    obstaculos.push(componente);
  }
}

function checkGameOver() {
  let crashed = obstaculos.some(function(obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    road.stop();
  }
}
