let ctx = document.querySelector('canvas').getContext('2d');
let obsArray = [];
let frames = 0;


class Board {
  drawBoard() {
    ctx.fillStyle = "rgb(0,128,0)";
    ctx.fillRect(0, 0, 450, 750);
    ctx.fillStyle = "rgb(128,128,128)";
    ctx.fillRect(30, 0, 390, 750);
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.fillRect(40, 0, 10, 750);
    ctx.fillRect(400, 0, 10, 750);
    ctx.beginPath();
    ctx.strokeStyle = "rgb(255,255,255)";
    ctx.setLineDash([30, 30]);
    ctx.lineWidth = 5;
    ctx.moveTo(225, 0);
    ctx.lineTo(225, 750);
    ctx.stroke();
    ctx.closePath();
  }

  startGame() {
    this.interval = setInterval(updateGameArea, 20);
  }

  stop() {
    clearInterval(this.interval);
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, 450, 750);
    ctx.closePath();
    ctx.fillStyle = "#FF0000";
    ctx.fillText(`Game Over!`, 175  , 300);
  }

  score() {
    ctx.font = '20px sans-serif';
    let points = frames / 20;
    ctx.fillText(`Score: ${points.toFixed(0)}`, 300, 30);
  }

}

class Car {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.image = new Image();
    this.image.src ='./images/car.png';
  }

  drawCar() {
    this.ctx.drawImage(this.image, this.x, this.y, 50, 90);
  }

  moveCar() {
    return this.x += this.speedX;
  }

  left() {
    return this.x;
  }

  right() {
    return this.x + 50;
  }

  top() {
    return this.y;
  }

  bottom() {
    return this.y + 90;
  }

  crashWith() {
    let obstacle = obsArray[obsArray.length - 1]
    // console.log(obstacle)
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

class Obstacle {
  constructor(ctx, x, y, width, height) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speedY = 10;
    this.width = width;
    this.height = height;
  }

  createObs() {
    this.ctx.fillStyle = "rgb(135, 0, 7)";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  updateObs() {
    for (let i = 0; i < obsArray.length; i += 1) {
      obsArray[i].y += 10;
      obsArray[i].createObs();
    }
    frames += 1;
    if (frames % 70 === 0) {
      let minWidth = 80;
      let maxWidth = 200;
      let width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
      let minGap = 0;
      let maxGap = 150;
      let border = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
      obsArray.push(new Obstacle(ctx, width + border - 100, 0, width, 20));
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

}

function checkGameOver() {
  var crashed = obsArray.some(function(obsArray) {
    return player.crashWith(obsArray);
  });

  if (crashed) {
    board.stop();
  }
}

let player = new Car(ctx, 225, 600);
let board = new Board();
const obstacle = new Obstacle(ctx, 60, 40, 50, 10);

function updateGameArea() {
  board.drawBoard();
  player.moveCar();
  player.drawCar();
  obstacle.updateObs();
  checkGameOver();
  board.score();
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    board.drawBoard();
    player.drawCar();
    board.startGame();
  };
};

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37: // left arrow
      if(player.x > 30) {
        player.speedX -= 5;
      }
      break;
    case 39: // right arrow
      if(player.x < 350) {
        player.speedX += 5;
      }
      break;
  }
};

document.onkeyup = function(e) {
  player.speedX = 0;
};

