window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
}

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }

  update() {
    var ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

const carImg = new Image()
carImg.src = '/images/car.png'

let car = {
  speedX: 0,
  posX: 125
};

let myObstacles = []


function startGame() {
  myGameArea.start()
  let ctx = myGameArea.context
  ctx.fillStyle = 'green'
  ctx.fillRect(0, 0, 300, 600);
  ctx.fillStyle = "gray"
  ctx.fillRect(20, 0, 260, 600)
  ctx.strokeStyle = 'white'
  ctx.lineWidth = '5'
  ctx.beginPath()
  ctx.moveTo(30, 0)
  ctx.lineTo(30, 600)
  ctx.stroke()
  ctx.closePath();
  ctx.beginPath()
  ctx.moveTo(270, 0)
  ctx.lineTo(270, 600)
  ctx.stroke()
  ctx.closePath()
  ctx.moveTo(150, 0)
  ctx.lineTo(150, 600)
  ctx.setLineDash([30, 35])
  ctx.stroke()
  ctx.drawImage(carImg, car.posX, 450, 50, 100)
}

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  myGameArea.frames += 1;


  if (myGameArea.frames % 150 === 0) {
    var y = myGameArea.canvas.height;
    var minGap = 90;
    var maxGap = 160;
    var minWidth = 50;
    var maxWidth = 100;
    var width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );

    
    var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
   myObstacles.push(new Component(width, 10 , "red", 35, 10));
    myObstacles.push(
      new Component(y-width-gap,10, "red",width+gap, 10)
    );
  }
}


document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37: // left arrow
      car.speedX -= 1;
      break;
    case 39: // right arrow
      car.speedX += 1;
      break;
  }
};

document.onkeyup = function (e) {
  car.speedX = 0;
  car.speedY = 0;
};

function updateGameArea() {
  myGameArea.clear();
  carUpdate();
  startGame();
  updateObstacles();
}

function carUpdate() {
  if (car.posX > 30 && car.posX < 220) {
    car.posX += car.speedX;
  } else {
    if (car.posX <= 30) {
      car.posX = 31;
    } else if (car.posX >= 220) {
      car.posX = 219
    }
  }
}

var myGameArea = {
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 300;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    // this.interval = setInterval(updateGameArea, 50);
    window.requestAnimationFrame(updateGameArea);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  frames: 0
};