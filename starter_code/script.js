window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    let car = new Car (ctx, 240, 600);
    window.onkeydown = function(e) {
      switch (e.key) {
        case "ArrowLeft":
          car.moveLeft();
          break;
        case "ArrowRight":
          car.moveRight();
          break;
      }
    };
    setInterval(() => {
      clearContent()
      drawBackground()
      if (counter % 150 === 0) {
        obstacles.push(new Obstacle(ctx, randomInt(60, 300), 0, 4));
      }
      if (obstacles.length !== 0) {
        drawObstacles();}
      car.drawCar()
      counter ++
    }, 10);
  }
};

const myCanvasDOMEl = document.querySelector("#myCanvas");
const ctx = myCanvasDOMEl.getContext("2d");
const w = 600;
const h = 800;
const w2 = w / 2;
const h2 = h / 2;
const PI = Math.PI;
const PI_DOUBLE = Math.PI * 2;
const PI_HALF = Math.PI / 2;
let counter = 0;
const rightBoundarie = 460;
const leftBoundarie = 60;
let obstacles = []




//=============SETTING CANVAS DIMENSIONS============
//==================================================
function clearContent() {
  ctx.clearRect(0, 0, w, h);
}


function setCanvasDimensions() {
  // x axis
  myCanvasDOMEl.setAttribute("width", w);
  // y axis
  myCanvasDOMEl.setAttribute("height", h);
}

function drawBackground() {
  ctx.fillStyle = 'purple'
  ctx.fillRect(100, 200, 400, 200)

  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, 90, 800)
  ctx.fillRect(460, 0, 80, 800)

  ctx.fillStyle = 'grey'
  ctx.fillRect(50, 0, 440, 800)

  ctx.fillStyle = 'white'
  ctx.fillRect(60, 0, 20, 800)
  ctx.fillRect(460, 0, 20, 800)

  ctx.strokeStyle = 'white'
  ctx.lineWidth = 8;
  ctx.beginPath();
  ctx.setLineDash([40, 30]);
  ctx.lineDashOffset = -counter * 4;
  ctx.moveTo(275, 0)
  ctx.lineTo(275, 800)
  ctx.stroke();
  ctx.closePath();

  window.onresize = setCanvasDimensions;
}






//==========CALLING CANVAS DIMENSIONS=============
//================================================

setCanvasDimensions();

//=================CANVAS DESIGN==================
//================================================




class Car {
  constructor(ctx, xParam, yParam) {
    this.positions = {
      x: xParam,
      y: yParam
    };
    this.speed = 25;
    this.gameCharacter = new Image();
    this.gameCharacter.src = "./images/car.png";
  }

  drawCar() {
    ctx.drawImage(this.gameCharacter, this.positions.x, this.positions.y)
  }
  
  moveLeft() {
    if (this.positions.x >= 60) {
      this.positions.x -= this.speed;
    }
  }
  moveRight() {
    if (this.positions.x <= 400) {
      this.positions.x += this.speed;
    }
  }
}

let car = new Car (ctx, 250, 450);

window.onkeydown = function(e) {
  switch (e.key) {
    case "ArrowLeft":
      car.moveLeft();
      break;
    case "ArrowRight":
      car.moveRight();
      break;
  }
};


// class Obstacle {
//   constructor() {
//     this.width = 80;
//     this.height = 20;
//     this.x = randomNum(rightBoundarie, leftBoundarie);
//     this.y = -20;
//   }

//   draw() {
//     if (frames % 10) this.y += counter;
//     ctx.fillStyle = "purple";
//     ctx.fillRect(this.x, this.y, this.width, this.height);
//   }
// }

// function randomNum(max, min) {
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function generateObstacles() {
//   if (frames % 100 == 0) {
//     let obs = new Obstacle();
//     obstacles.push(obs);
//   }
// }

class Obstacle {
  constructor(ctx, x, y, speed) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.speed = speed
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.rect(this.x, ++this.y * this.speed, 200, 20);
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fill();
  }
}


function drawObstacles() {
  obstacles.forEach((obstacle, idx) => {
    
    if (
      car.x + 100 > obstacle.x &&
      car.x < obstacle.x + 200 &&
      car.y - 20 <= obstacle.y * this.speed
    ) {
      clearInterval(intervalID)
    }

    if (obstacle.y * this.speed >= h) {
      obstacles.splice(idx, 1);
    }
    obstacle.draw();
  });
};

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


