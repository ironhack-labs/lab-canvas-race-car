window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    myGameArea.start();
  };
};

const myObstacles = [];

const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,
  totalScore: 0,
  start: function() {
    this.canvas.width = 450;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.getElementById('game-board').appendChild(this.canvas);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  score: function() {
    var points = Math.floor(this.frames / 180);
    this.totalScore = points;
    this.context.font = "18px arial";
    this.context.fillStyle = "white";
    this.context.fillText("Score: " + points, 300, 50);
  },
  board: function() {
    // road
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 30, this.canvas.height);
    this.context.fillRect(this.canvas.width - 30, 0, 30, this.canvas.height);
    this.context.fillStyle = 'dimgray';
    this.context.fillRect(30, 0, 10, this.canvas.height);
    this.context.fillRect(this.canvas.width - 40, 0, 10, this.canvas.height);
    this.context.fillRect(50, 0, this.canvas.width - 100, this.canvas.height);

    // middle line
    this.context.strokeStyle = 'white';
    this.context.lineWidth = 5;
    this.context.setLineDash([20,15])
    this.context.beginPath();
    this.context.moveTo(this.canvas.width / 2, 0);
    this.context.lineTo(this.canvas.width / 2, this.canvas.height);
    this.context.stroke();
    this.context.closePath();
  }
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

  updateCar() {
    const ctx = myGameArea.context;
    const carImg = new Image();
    carImg.src = './images/car.png';
    ctx.drawImage(carImg, this.x, this.y, 32, 64);
  }

  updateObs() {
    const ctx = myGameArea.context;
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

const player = new Component(32, 64, "red", 217, 490);

function updateGameArea() {
  myGameArea.clear();
  myGameArea.board();
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
  if (myGameArea.frames % 180 === 0) {
    const y = myGameArea.canvas.height;
    const minHeight = 150;
    const maxHeight = 250;
    const width = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    const minGap = 50;
    const maxGap = 200;
    const gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(
      new Component(width, 20, "darkred", gap, 0)
    );
  }
}

function checkGameOver() {
  const crashed = myObstacles.some(obstacle => player.crashWith(obstacle));

  if (crashed) {
    myGameArea.stop();
    setTimeout(() => {
      myGameArea.clear();
      myGameArea.context.font = "bold 48px arial";
      myGameArea.context.fillStyle = "darkred";
      myGameArea.context.fillText("GAME OVER!", 70, 100);
      myGameArea.context.fillStyle = "black";
      myGameArea.context.fillText("Your final score is: ", 25, 200);
      myGameArea.context.fillText(myGameArea.totalScore, 200, 250);
    },1500)
  }
}

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