let drawThis = document.getElementById('game-board');


window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();

  }
}

function startGame() {
  myGameArea.start();

}



const myGameArea = {
  canvas: document.createElement("canvas"),
  // the frames element will allow us to keep track of the user movement 
  frames: 0,
  start: function () {
    this.canvas.width = 400;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    drawThis.insertBefore(this.canvas, drawThis.childNodes[0]);
    // call updateGameArea() every 20 milliseconds
    this.interval = setInterval(updateGameArea, 20);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  drawBoard: function () {
    this.context.beginPath()
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 400, 600);
    this.context.closePath()

    this.context.beginPath()
    this.context.fillStyle = 'grey';
    this.context.fillRect(40, 0, 320, 600);
    this.context.closePath()

    this.context.beginPath()
    this.context.strokeStyle = 'white';
    this.context.moveTo(50, 0);
    this.context.lineTo(50, 600)
    this.context.lineWidth = 6;
    this.context.stroke()
    this.context.closePath()

    this.context.beginPath()
    this.context.moveTo(350, 0);
    this.context.lineTo(350, 600)
    this.context.lineWidth = 6;
    this.context.stroke()
    this.context.closePath()

    this.context.beginPath()
    this.context.moveTo(200, 0);
    this.context.setLineDash([15])
    this.context.lineTo(200, 600)
    this.context.lineWidth = 3;
    this.context.stroke()
    this.context.setLineDash([])
    this.context.closePath()

  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  score: function () {
    var points = Math.floor(this.frames / 90);
    this.context.font = "30px serif";
    this.context.fillStyle = "black";
    this.context.fillText("Score: " + points, 270, 40);
  },

};

class Component {
  constructor(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.vx = 1;
    this.speedX = 0;
  }
  drawCar() {
    let car = document.querySelector('#car')
    myGameArea.context.drawImage(car, this.x, this.y, this.width, this.height);
  }
  update() {
    let car = document.querySelector('#car')
    myGameArea.context.drawImage(car, this.x, this.y, this.width, this.height);
  }
  newPos() {
    if (this.x + this.speedX <= 0) {
      this.x -= this.speedX;
    } else if (this.x + this.speedX > 350) {
      this.x -= this.speedX;
    }

    this.x += this.speedX
  }
  updateObs() {
    myGameArea.context.fillStyle = 'red'
    myGameArea.context.fillRect(this.x, this.y, this.width, this.height);
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

let player = new Component(50, 80, 175, 500);

var myObstacles = [];

function updateObstacles() {
  for (let i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    console.log(myObstacles[i]);
    myObstacles[i].updateObs();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames % 150 === 0) {
    var x = myGameArea.canvas.width;
    var minWidth = 20;
    var maxWidth = 150;
    var width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    var minGap = 100;
    var maxGap = 250;
    var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(width, 10, 0, 0));
    myObstacles.push(new Component(x - width - gap, 10, width + gap, 0));
  }
}


function updateGameArea() {
  myGameArea.clear();
  myGameArea.drawBoard();
  player.update();
  player.newPos();
  updateObstacles();
  checkGameOver();
  myGameArea.score();
}

function checkGameOver() {
  var crashed = myObstacles.some(function (obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    myGameArea.stop();
  }
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37: // left arrow
      player.speedX -= player.vx;
      break;
    case 39: // right arrow
      player.speedX += player.vx;
      break;
  }
};

document.onkeyup = function (e) {
  player.speedX = 0;
};