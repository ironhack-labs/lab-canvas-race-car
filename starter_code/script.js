window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    document.getElementById("canvas").classList.remove("canvas-hidden");
    document.getElementById("canvas").classList.add("canvas-show");
    myGameArea.start();
  }
};

let myGameArea = {
  canvas: document.getElementById("canvas"),
  start: function () {
    this.canvas.width = 420;
    this.canvas.height = 500;
    this.context = canvas.getContext("2d");
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function(){
    //this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.beginPath();
    this.context.fillStyle = "green";
    this.context.fillRect(0,0,this.canvas.width,this.canvas.height)
    this.context.fillStyle = "grey";
    this.context.fillRect(35, 0, 350, 500);
    this.context.strokeStyle = "white";
    this.context.lineWidth = "5"
    this.context.moveTo(50,0);
    this.context.lineTo(50,500);
    this.context.moveTo(370,0);
    this.context.lineTo(370,500);
    this.context.stroke();
    this.context.closePath();

    this.context.beginPath();
    this.context.setLineDash([10, 20]);
    this.context.moveTo(210, 0);
    this.context.lineTo(210, 500);
    this.context.stroke();
  },
  frames: 0,
}

var myObstacles = [];
//same as palyer that comes from component instance
let car = {
  x: 185,
  y:410,
  speed: 25,
  update: function(){
    var img = new Image();
    img.onload = function() {
      myGameArea.context.drawImage(img, car.x, car.y, 50, 70);
    };
    img.src = 'images/car.png';
  },
  moveLeft: function() {this.x -= this.speed},
  moveRight: function() {this.x += this.speed},
}

function component(width, height, color, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.update = function(){
      ctx = myGameArea.context;
      ctx.fillStyle = color;
      ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
  }
}

function updateGameArea() {
  car.update();

  myGameArea.clear();
//  car.update();
  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0 ){
    let y = 0;
    let minWidth = 20;
    let maxWidth = 200;
    width = Math.floor(Math.random()*(maxWidth - minWidth + 1)+minWidth);
    let minGap = 3;
    let maxGap = 420 - width;
    gap = Math.floor(Math.random()*(maxGap-minGap+1)+minGap);
    myObstacles.push(new component(width, 10, "red", gap, 0 ));
  }
  for (let i = 0; i < myObstacles.length; i+= 1){
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
}

function draw(car) {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, car.x, car.y, 50, 70);
  };
  img.src = 'images/car.png';
}

document.onkeydown =function (e){
  switch (e.keyCode) {
    case 37: car.moveLeft(); break;
    case 39: car.moveRight(); break;
  }
 // car.update();
}




/* let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let canvasHeight = 500;
let canvasWidth = 420;
let interval = setInterval(updateCanvas, 20);
function clear () {
  ctx.clearRect(0, 0, canvasHeight, canvasWidth);
}


let car = {
  x: 185,
  y:410,
  speed: 25,
  moveLeft: function() {this.x -= this.speed},
  moveRight: function() {this.x += this.speed},
}

document.onkeydown =function (e){
  switch (e.keyCode) {
    case 37: car.moveLeft(); break;
    case 39: car.moveRight(); break;
  }
  updateCanvas();
}

function draw(car) {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, car.x, car.y, 50, 70);
  };
  img.src = 'images/car.png';
}

function updateCanvas() {
  ctx.clearRect(0, 0, 420, 500);
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(0,0,canvasWidth,canvasHeight)
  ctx.fillStyle = "grey";
  ctx.fillRect(35, 0, 350, 500);
  ctx.strokeStyle = "white";
  ctx.lineWidth = "5"
  ctx.moveTo(50,0);
  ctx.lineTo(50,500);
  ctx.moveTo(370,0);
  ctx.lineTo(370,500);
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.setLineDash([10, 20]);
  ctx.moveTo(210, 0);
  ctx.lineTo(210, 500);
  ctx.stroke();
  draw(car);
}


ctx.beginPath();
ctx.fillStyle = "green";
ctx.fillRect(0,0,canvasWidth,canvasHeight)
ctx.fillStyle = "grey";
ctx.fillRect(35, 0, 350, 500);
ctx.strokeStyle = "white";
ctx.lineWidth = "5"
ctx.moveTo(50,0);
ctx.lineTo(50,500);
ctx.moveTo(370,0);
ctx.lineTo(370,500);
ctx.stroke();
ctx.beginPath();
ctx.setLineDash([10, 20]);
ctx.moveTo(210, 0);
ctx.lineTo(210, 500);
ctx.stroke(); */
