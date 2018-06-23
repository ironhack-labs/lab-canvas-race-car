window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function Car() {
    this.x = 300 - 108 / 2;
    this.y = 550;
    this.maxX = 600;
    this.minX = 0;
    this.img = new Image();
    this.img.src = "images/car.png";
  }
  Car.prototype.moveRight = function() {
    this.x += 20;
    if (this.x > this.maxX - 108) {
      this.x = this.maxX - 108;
    }
  };
  Car.prototype.moveLeft = function() {
    this.x -= 20;
    if (this.x < this.minX) {
      this.x = this.minX;
    }
  };
  var car = new Car();

  function drawRoad() {
    ctx.fillStyle = "#008000";
    ctx.fillRect(0, 0, 600, 800);
    ctx.fillStyle = "grey";
    ctx.fillRect(50, 0, 500, 800);
    ctx.fillStyle = "white";
    ctx.clearRect(60, 0, 10, 800);
    ctx.clearRect(530, 0, 10, 800);
    ctx.clearRect(297, 0, 6, 40);
    ctx.clearRect(297, 50, 6, 40);
    ctx.clearRect(297, 100, 6, 40);
    ctx.clearRect(297, 150, 6, 40);
    ctx.clearRect(297, 200, 6, 40);
    ctx.clearRect(297, 250, 6, 40);
    ctx.clearRect(297, 300, 6, 40);
    ctx.clearRect(297, 350, 6, 40);
    ctx.clearRect(297, 400, 6, 40);
    ctx.clearRect(297, 450, 6, 40);
    ctx.clearRect(297, 500, 6, 40);
    ctx.clearRect(297, 550, 6, 40);
    ctx.clearRect(297, 600, 6, 40);
    ctx.clearRect(297, 650, 6, 40);
    ctx.clearRect(297, 700, 6, 40);
    ctx.clearRect(297, 750, 6, 40);
    ctx.clearRect(297, 800, 6, 40);
  }

  function drawCar() {
    //imgScale = 158 / 310;

    ctx.drawImage(car.img, car.x, car.y, 108, 250);
  }

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

  function startGame() {
    ctx.clearRect(0, 0, 1000, 1000);
    drawRoad();
    drawCar();
    window.requestAnimationFrame(startGame);
  }

  // window.requestAnimationFrame(updateCanvas);
};
