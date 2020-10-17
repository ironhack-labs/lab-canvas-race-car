const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");  
let x = 225;
let y = 575;
let obstacleY = 0;
let speed = 1;
window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    drawRoad();
    drawCar();
  };
};

//Camino
function drawRoad() {
  const road = new Image();
  road.onload = function(){
    ctx.drawImage(road,0,0,500,700)
  }
  road.src = './images/road.png'
} 

// Carro
function drawCar() {
  const img = new Image();
  img.onload = function () {
    ctx.drawImage(img, x, y, 50, 100)
  };
  img.src = './images/car.png'
}

//Movimientos
function moveLeft() {
  x -= 25;      
  }
function moveRight(){
  x +=25;
}
function updateCanvas(){
  ctx.clearRect(0,0,500,700);
  drawRoad();
  drawCar();
}

function randomValues(){
  let randomX1 = Math.floor(Math.Random * 200);
  let randomX2 = Math.floor(Math.Random * 200);
  ctx.fillRect(randomX1, 0)

}

document.addEventListener('keydown', e => {
switch(e.keyCode){
  case 37: moveLeft(); break;
  case 39: moveRight(); break;
}
updateCanvas();
})

// OBSTACLES
const myObstacles = [];
let carX = 225;
let carY = 550;
const myGameArea = {
  canvas: document.getElementById("canvas"),
  ctx: this.canvas.getContext("2d"),
  frames: 0,
  start: function() {
    this.interval = setInterval(updateGameArea, 2);
  },
  clear: function() {
    this.ctx.clearRect(0, 0, 500, 700);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  score: function() {
    const points = Math.floor(this.frames / 5);
    this.ctx.font = "18px serif";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Score: ${points}`, 350, 50);
  }
};

function updateGameArea() {
  myGameArea.clear();
  const road = new Image();
    road.onload = function(){
      myGameArea.ctx.drawImage(road,0,0,500,700)
    }
    road.src = './images/road.png';
  const car = new Image();
    car.onload = function () {
      myGameArea.ctx.drawImage(car, carX, carY, 50, 100)
    };
    car.src = './images/car.png'
  updateObstacles();
  
  myGameArea.score();
};

function moveLeft() {
  carX -= 25;      
};
function moveRight(){
  carX +=25;
};

document.addEventListener('keydown', e => {
  switch(e.keyCode){
    case 37: moveLeft(); break;
    case 39: moveRight(); break;
  }
updateGameArea();
console.log(carX);
});

class Component {
  constructor(width, x) {
    this.width = width;
    this.height = 20;
    this.color = 'red';
    this.x = x;
    this.y = 0;
    this.speedY = 0;
  }

  update() {
    myGameArea.ctx.fillStyle = this.color;
    myGameArea.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  bottom() {
    return this.y + this.height;
  }
  crashWith() {
    return (
      this.bottom() < 550 &&
      (this.right() > carX ||
      this.left() < carX + 50)
    );
  }
}

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    myObstacles.push(new Component(Math.floor(Math.random() * 400), Math.floor(Math.random() * 500)));
  }
}

function checkGameOver() {
  const crashed = myObstacles.some(function() {
    return myObstacles.crashWith();
  });

  if (crashed) {
    myGameArea.stop();
  }
}

