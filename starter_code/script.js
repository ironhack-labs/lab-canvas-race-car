var myObstacles = [];
var car = new Car(275, 650);
var ctx;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    car.drawCar();
  };

  /// The road
  function startGame() {
    var canvas = document.getElementById("example");
    ctx = canvas.getContext("2d");
    ctx.save();
    ctx.fillStyle = "#008500";
    ctx.fillRect(0, 0, 700, 850);
    ctx.save();
    ctx.fillStyle = "#7F7F7F";
    ctx.fillRect(30, 0, 630, 850);
    ctx.restore();
    ctx.fillStyle = "#FFF";
    ctx.fillRect(50, 0, 20, 850);
    ctx.beginPath();
    ctx.setLineDash([15, 35]);
    ctx.moveTo(350, 15);
    ctx.lineTo(350, 850);
    ctx.lineWidth = "10";
    ctx.strokeStyle = "#FFF";
    ctx.stroke();
    ctx.fillStyle = "#FFF";
    ctx.fillRect(620, 0, 20, 850);
  }
};

/// The Car
function Car(x, y) {
  this.posX = x;
  this.posY = y;
  this.speedX = 0;
  this.speedY = 0;
}

Car.prototype.moveLeft = function() {
  this.posX -= 1;
  console.log("left");
};

Car.prototype.moveRight = function() {
  this.posX += 1;
  console.log("right");
};

Car.prototype.drawCar = function() {
  var img = new Image();
  var that = this; // reflexe que je dois avoir...
  img.onload = function() {
    ctx.drawImage(img, that.posX, that.posY, 150, 180);
  };
  img.src = "images/car.png";
};


  /// The keys
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        car.moveLeft();
        break;
      case 39:
        car.moveRight();
        break;
    }
  };