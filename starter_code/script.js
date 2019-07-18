let myObstacles = [];
const canvas = document.getElementById('game')
const ctx = canvas.getContext("2d");

const myGameArea = {
  frames: 0,
  totalScore: 0,

  start: function() {
    this.clear();
    this.board();
    player.updateCar();
    this.interval = setInterval(updateGameArea, 20);
  },

  clear: function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  },

  stop: function() {
    clearInterval(this.interval);
  },

  score: function() {
    this.totalScore = Math.floor(this.frames / 180);
    ctx.font = "18px arial";
    ctx.fillStyle = "white";
    ctx.fillText("Score: " + this.totalScore, 300, 50);
  },

  board: function() {
    // road
    ctx.fillStyle = 'green';
    ctx.fillRect(0, 0, 30, canvas.height);
    ctx.fillRect(canvas.width - 30, 0, 30, canvas.height);
    ctx.fillStyle = 'dimgray';
    ctx.fillRect(30, 0, 10, canvas.height);
    ctx.fillRect(canvas.width - 40, 0, 10, canvas.height);
    ctx.fillRect(50, 0, canvas.width - 100, canvas.height);
  },
};

const middleLine = {
  y1: 0,
  y2: -600,
  draw: function() {
    // line 1
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 5;
    ctx.setLineDash([20,20])
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, this.y1);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.closePath();

    // line 2
    ctx.setLineDash([20,20])
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, this.y2);
    ctx.lineTo(canvas.width / 2, canvas.height);
    ctx.stroke();
    ctx.closePath();
  },
  
  update: function() {
    this.y1++
    this.y2++
    if (this.y1 === 600) this.y1 = 0
    if (this.y2 === 0) this.y2 = -600
  }
}

class Component {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.color = 'darkred';
    this.x = x;
    this.y = y;
    this.speedX = 0;
  }

  updateCar() {
    const carImg = new Image();
    carImg.src = './images/car.png';
    ctx.drawImage(carImg, this.x, this.y, 32, 64);
  }

  updateObs() {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    if (this.x >= 50) {
      this.x += this.speedX;
    } else {
      this.x = 50;
    }
    if (this.x >= 368) {
      this.x = 368;
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

const player = new Component(32, 64, 210, 490);

function updateGameArea() {
  myGameArea.clear();
  myGameArea.board();
  middleLine.draw();
  middleLine.update();
  player.newPos();
  player.updateCar();
  updateObstacles();
  checkGameOver();
  myGameArea.score();
}

function updateObstacles() {
  for (let i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].updateObs();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames === 1 || myGameArea.frames % 180 === 0) {
    const y = canvas.height;
    const minHeight = 150;
    const maxHeight = 200;
    const width = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    const minGap = 50;
    const maxGap = 200;
    const gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(
      new Component(width, 20, gap, 0)
    );
  }
}

function checkGameOver() {
  let crashed = myObstacles.some(obstacle => player.crashWith(obstacle));
  if (crashed) {
    myGameArea.stop();
    setTimeout(() => {
      myGameArea.clear();
      ctx.font = "bold 48px arial";
      ctx.fillStyle = "darkred";
      ctx.fillText("GAME OVER!", 70, 100);
      ctx.fillStyle = "black";
      ctx.fillText("Your final score is: ", 25, 200);
      ctx.fillText(myGameArea.totalScore, 200, 250);

    },1500)
  }
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    myObstacles = [];
    myGameArea.totalScore = 0;
    myGameArea.frames = 0;
    myGameArea.stop();
    player.x = 210;
    player.y = 490;
    myGameArea.start();
  };
};

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: // left arrow
      player.speedX -= 1;
      break;
    case 39: // right arrow
      player.speedX += 1;
      break;
  }
};

document.onkeyup = function(e) {
  player.speedX = 0;
};