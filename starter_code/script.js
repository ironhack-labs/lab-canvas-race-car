var myObstacles = [];

var myGameArea = {
  canvas : document.createElement('canvas'),
  frames: 0,
  start: function () {
    this.canvas.width = 400;
    this.canvas.height = 550;
    this.ctx = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() { // DGG: Para limpiar la pantalla antes de cada refresco
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawnRoad();
  },
  stop: function() {
    clearInterval(this.interval);
  },
  drawnRoad: function () {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 25, this.canvas.height);
    this.ctx.fillRect(375, 0, 25, this.canvas.height);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(25, 0, 10, this.canvas.height);
    this.ctx.fillRect(365, 0, 10, this.canvas.height);
    this.ctx.fillRect(45, 0, 310, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([20, 10]);
    this.ctx.moveTo(200, 0);
    this.ctx.lineTo(200, 550);
    this.ctx.stroke();
  },
  /*drawnCar: function () {
    var img = new Image();
    img.src = './images/car.png';
    var myCtx = this.ctx;
    img.onload = function() {
      myCtx.drawImage(img, 175, 425, 50, 100);
    } 
  }*/
}

function Car (width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;

  this.img = new Image();
  this.img.src = './images/car.png';


  this.update = function() {
    ctx = myGameArea.ctx;

    /*var img = new Image();
    img.src = './images/car.png';*/
    
    //this.img.onload = function() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    //}
    //ctx.fillStyle = color;
    //ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
    this.x += this.speedX;
  }
  this.left   = function() { return this.x };
  this.right  = function() { return (this.x + this.width) };
}


function moveLeft() {
  if (car.x > 50) { car.speedX -= 1; }
}

function moveRight() {
  if (car.x < 300) { car.speedX += 1; }
}

document.onkeydown = function(e) {
  console.log(e.key);
  switch (e.keyCode) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;  
  }
}

document.onkeyup = function(e) {
  stopMove();
}

function stopMove() {
  car.speedX = 0;
}

function updateGameArea() {
  myGameArea.clear();
  car.update();
  car.newPos();
  myGameArea.frames += 1;
}

function startGame() {
  myGameArea.start();
  myGameArea.drawnRoad();
  //myGameArea.drawnCar();
  //car = new Car(175, 425, 50, 100);
  car = new Car( 50, 100, 175, 425);
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
  startGame();
  };
};


