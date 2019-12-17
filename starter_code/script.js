console.log('yo runner!')

const myObstacles = [];

const myGameArea = {
  canvas: document.createElement('canvas'),
  frames: 0,
  start: function () {
    this.canvas.width = 500;
    this.canvas.height = 1000;
    this.ctx = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  score: function() {
    var points = Math.floor(this.frames / 5);
    this.ctx.font = "18px serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score: " + points, 350, 50);
  },
  style: function () {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, 500, 1000);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(50, 0);
    this.ctx.lineTo(50, 1000);
    this.ctx.lineTo(0, 1000);
    this.ctx.lineTo(0, 0);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 50, 1000);
    this.ctx.closePath();
    
    this.ctx.beginPath();
    this.ctx.moveTo(500, 0);
    this.ctx.lineTo(450, 0);
    this.ctx.lineTo(450, 1000);
    this.ctx.lineTo(500, 1000);
    this.ctx.lineTo(0, 0);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(450, 0, 50, 1000);
    this.ctx.closePath();
    
    this.ctx.beginPath();
    this.ctx.moveTo(60, 0);
    this.ctx.lineTo(85, 0);
    this.ctx.lineTo(85, 1000);
    this.ctx.lineTo(60, 1000);
    this.ctx.lineTo(60, 0);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(60, 0, 25, 1000);
    this.ctx.closePath();
    
    this.ctx.beginPath();
    this.ctx.moveTo(415, 0);
    this.ctx.lineTo(415, 1000);
    this.ctx.lineTo(440, 1000);
    this.ctx.lineTo(440, 0);
    this.ctx.lineTo(415, 0);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(415, 0, 25, 1000);
    this.ctx.closePath();
    
    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([15, 35]);
    this.ctx.moveTo(250, 0);
    this.ctx.lineTo(250, 1000);
    this.ctx.stroke();
    this.ctx.closePath();
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // myGameArea.style();
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
    this.speedY = 0;
  }

  update() {
    const context = myGameArea.ctx;
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  updateCar() {
    var context = myGameArea.ctx;
    context.drawImage(carImg, this.x, this.y, this.width, this.height)
  }

  newPos() {
    this.y += this.speedY;
    if(this.y < 0) {
      this.y = 0 + 5;
    }
    if(this.y > 800) {
      this.y = 800 - 5;
    }

    this.x += this.speedX;
    if(this.x < 85) {
      this.x = 85 + 5;
    }
    if(this.x > 375) {
      this.x = 375 - 5;
    }
  }

  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }
  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
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

let carImgPath = './images/car.png';
let carImg = new Image();
carImg.src = carImgPath;

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38: // up arrow
      myCar.speedY -= 10;
      break;
    case 40: // down arrow
      myCar.speedY += 10;
      break;
    case 37: // left arrow
      myCar.speedX -= 10;
      break;
    case 39: // right arrow
      myCar.speedX += 10;
      break;
  }
};

//Cut speed after the button was pressed
document.onkeyup = function(e) {
  myCar.speedX = 0;
  myCar.speedY = 0;

};

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 2;
    myObstacles[i].update();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    let y = 0;
    //Width mínimo e máximo dos obstáculos
    let minWidth = 60;
    let maxWidth = 290 - myCar.width;
    let width = Math.floor(Math.random()*(maxWidth - minWidth + 1) + minWidth);
    //Posição X inicial mínima e máxima dos obstáculos
    let maxX = 375 - width + 5;
    let minX = 85;
    let initialX = Math.floor(Math.random()*(maxX - minX + 1) + minX);

    myObstacles.push(new Component(width, 50, "red", initialX, y));
  }
}

function checkGameOver() {
  var crashed = myObstacles.some(function(obstacle) {
    return myCar.crashWith(obstacle);
  });

  if (crashed) {
    myGameArea.stop();
  }
}

function updateGameArea() {
  console.log('updating...');
  myGameArea.clear();
  myGameArea.style();
  myCar.newPos();
  myCar.update();
  updateObstacles();
  checkGameOver();
  myGameArea.score();
  myCar.updateCar();
}

let myCar = new Component(40, 120, "transparent", 230, 800);
console.log(myCar);

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    myGameArea.start();
  }
}


