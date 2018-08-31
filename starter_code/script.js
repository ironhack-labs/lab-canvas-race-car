window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
var car;

//The canvas
var canvas = {
  width: 400,
  height: 600,
  create: function() {
    var canvasEl = document.createElement("CANVAS");
    document.getElementById("game-board").appendChild(canvasEl);
    canvasEl.setAttribute("height", "600");
    this.ctx = canvas.getContext("2d");
    canvasEl.setAttribute("width", "400");
    drawRoad();
  },
  clear: function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  }
};
//Use the arrow keys
document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      car.moveLeft();
      console.log("left arrow");
      break;
    case 39:
      car.moveRight();
      console.log("right arrow");
      break;
  }
};

//How to draw the environment
function drawRoad() {
  //Draw road
  var roadlength = canvas.height;
  var greenSideW = 25;
  var sidewalk = 10;
  //road
  ctx.fillStyle = "rgba(128,128,128)";
  ctx.fillRect(0, 0, canvas.width, roadlength);
  //green-side left
  ctx.fillStyle = "rgba(50,205,50)";
  ctx.fillRect(0, 0, greenSideW, roadlength);
  //green-side rigth
  ctx.fillStyle = "rgba(50,205,50)";
  ctx.fillRect(canvas.width - greenSideW, 0, canvas.width, roadlength);
  //white lines
  ctx.strokeStyle = "rgb(255,255,255)";
  ctx.lineWidth = 4;
  ctx.beginPath();

  ctx.moveTo(greenSideW + sidewalk, 0);
  ctx.lineTo(greenSideW + sidewalk, roadlength);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(canvas.width - (greenSideW + sidewalk), 0);
  ctx.lineTo(canvas.width - (greenSideW + sidewalk), roadlength);
  ctx.stroke();
  ctx.beginPath();
  ctx.setLineDash([10, 5]);
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, roadlength);
  ctx.stroke();
}
//How to draw a Car
var img = new Image();
img.src = "images/car.png";
function Car(x, y, width, height) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.ctx = canvas.ctx;
  this.ctx.drawImage(car, x, y, width, height);
}
Car.prototype.moveLeft = function() {
  this.x -= 1;
  if (this.x < 0) {
    this.x = 0;
  }
};
Car.prototype.moveRight = function() {
  this.x += 1;
  if (this.x > canvas.width - this.width) {
    this.x = canvas.width - this.width;
  }
};
Car.prototype.refresh = function() {
  this.ctx.drawImage(img, this.x, this.y, this.width, this.height);
};

//START
var intervalID;
function startGame() {
  //Create canvas, car & animation
  canvas.create();
  car = new Car(
    canvas.width / 2 - this.width / 2,
    canvas.height - 165,
    78,
    159
  );
  intervalID = setInterval(refreshCanvas, 1000 / 50);
}
//Refresh
function refreshCanvas() {
  canvas.clear();
  drawRoad();
  car.refresh();
}

document.getElementById("start-button").onclick = function() {
  startGame();
};
