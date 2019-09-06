var canvas = document.getElementById("myCanvas");

var ctx = canvas.getContext("2d");

function realRoad() {
  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 30, 600);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "green";
  ctx.fillRect(420, 0, 30, 600);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "gray";
  ctx.fillRect(30, 0, 390, 600);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(40, 0, 10, 600);
  ctx.fill();

  ctx.beginPath();
  ctx.fillStyle = "white";
  ctx.fillRect(400, 0, 10, 600);
  ctx.fill();

  ctx.beginPath();
  ctx.setLineDash([20, 15]);
  ctx.moveTo(225, 0);
  ctx.lineTo(225, 600);
  ctx.lineWidth = "4";
  ctx.strokeStyle = "white";
  ctx.stroke();
}

window.onload = function() {
  console.log("here");
  var canvas = document.getElementById("myCanvas");

  var ctx = canvas.getContext("2d");
  console.log("ctx is defined here");
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, 1500, 1000);

  // GREEN
  function realRoad() {
    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 30, 600);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.fillRect(420, 0, 30, 600);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "gray";
    ctx.fillRect(30, 0, 390, 600);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(40, 0, 10, 600);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(400, 0, 10, 600);
    ctx.fill();

    ctx.beginPath();
    ctx.setLineDash([20, 15]);
    ctx.moveTo(225, 0);
    ctx.lineTo(225, 600);
    ctx.lineWidth = "4";
    ctx.strokeStyle = "white";
    ctx.stroke();
  }
  realRoad();

  // Start

  document.getElementById("start-button").onclick = function startGame() {
    console.log("clicked");

    // What happens on Start Game HERE

    console.log("road made");
  };
  img.src = "./images/car.png";
};

var car = document.getElementById("myCanvas").getContext("2d");
var img = new Image();
img.onload = function() {
  car.drawImage(img, 100, 400, 120, 160);
};

img.src = "./images/car.png";

var carMove = {
  x: 100,
  y: 400,
  moveLeft: function() {
    this.x -= 25;
  },
  moveRight: function() {
    this.x += 25;
  }
};

function draw(carMove) {
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, carMove.x, carMove.y, 120, 160);
  };
  img.src = "./images/car.png";
}

document.onkeydown = function(e) {
  var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");

  switch (e.keyCode) {
    case 37:
      carMove.moveLeft();

      console.log("left", carMove);
      break;
    case 39:
      carMove.moveRight();

      console.log("right", carMove);
      break;
  }

  updateCanvas();
  function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    realRoad();
    draw(carMove);
    this.interval = setInterval(updateGameArea, 20);
  }
};
