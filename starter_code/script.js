window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var ctx = document.getElementById("track").getContext("2d");
  ctx.font = "24px serif";

  function TrackCanvas() {
    this.ctx = document.getElementById("track").getContext("2d");
  }

  TrackCanvas.prototype.createBoard = function() {
    this.ctx.clearRect(0, 0, 400, 600);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.fillStyle = "rgb(100, 100, 100)";
    this.ctx.fillRect(0, 0, 400, 600);
    this.ctx.fillStyle = "rgb(0, 255, 0)";
    this.ctx.fillRect(0, 0, 30, 600);
    this.ctx.fillRect(370, 0, 30, 600);
    this.ctx.fillStyle = "rgb(255, 255, 255)";
    this.ctx.fillRect(40, 0, 10, 600);
    this.ctx.fillRect(350, 0, 10, 600);
    this.ctx.strokeStyle = "rgb(255, 255, 255)";
    this.ctx.lineWidth = 10;
    this.ctx.setLineDash([40, 50]);
    this.ctx.moveTo(195, 10);
    this.ctx.lineTo(195, 600);
    this.ctx.stroke();
    this.ctx.fill();
  };

  function Car(img) {
    this.ctx = document.getElementById("track").getContext("2d");
    this.posX = 170;
    this.posY = 400;
    this.maxSpeed = 1;
    this.sX = 1;
    this.minX = 55;
    this.maxX = 270;
    this.img = new Image();
    this.img.src = img;
    this.score = 0;
  }

  Car.prototype.moveLeft = function() {
    this.sX -= this.maxSpeed;
  };

  Car.prototype.moveRight = function() {
    this.sX += this.maxSpeed;
  };

  Car.prototype.move = function() {
    if (this.posX >= this.minX) {
      this.posX += this.sX;
    } else {
      this.posX++;
      this.sX = 0;
    }
    if (this.posX <= this.maxX) {
      this.posX += this.sX;
    } else {
      this.posX--;
      this.sX = 0;
    }
  };

  Car.prototype.draw = function() {
    imgScale = 158 / 310;
    this.ctx.drawImage(this.img, this.posX, this.posY, 150 * imgScale, 150);
    this.ctx.fillStyle = "black";
    this.ctx.fillText("Score: " + this.score, 80, 30);
  };

  function Obstacles(x, y, width, height) {
    this.posX = x;
    this.posY = y;
    this.width = width;
    this.height = height;
  }

  Obstacles.prototype.draw = function(obj) {
    this.ctx = document.getElementById("track").getContext("2d");
    this.ctx.fillStyle = "red";
    this.ctx.fillRect(this.posX, this.posY, this.width, this.height);
  };

  Obstacles.prototype.animate = function(obj) {
    this.posY += 3;
  };

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var track = new TrackCanvas();
  var car = new Car("./images/car.png");
  var obs1 = new Obstacles(50, 0, 100, 20);
  var obs2 = new Obstacles(250, -100, 120, 30);
  var obs3 = new Obstacles(100, -500, 150, 10);
  var obs4 = new Obstacles(230, -900, 100, 30);

  /*   var obstacles = [];
function generateObstacles(){
  for(var i = 0; i < 20; i++){
    obstacles.push(new Obstacles(Math.round(Math.random() * (300 - 0) + 0), Math.round(Math.random() * (0 - (-10000)) + (-10000)), 100, 20))
  }
} */

  function startGame() {
    // generateObstacles();
    updateCanvas();
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

    function updateCanvas() {
      ctx.clearRect(0, 0, 400, 600);
      track.createBoard();
      car.draw();
      car.move();
      obs1.draw(obs1);
      obs1.animate(obs1);
      obs2.draw(obs2);
      obs2.animate(obs2);
      obs3.draw(obs3);
      obs3.animate(obs3);
      obs4.draw(obs4);
      obs4.animate(obs4);
      car.score++;
      window.requestAnimationFrame(updateCanvas);
    }
  }
};
