window.onload = function () {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext('2d');
  var car = new Car(150, 700, "images/car.png");

  document.getElementById("start-button").onclick = function () {
    updateCanvas();
  };


  function startGame() {
    //rectangulo verde
    ctx.rect(0, 0, 400, 800);
    ctx.stroke();
    ctx.fillStyle = "rgb(36, 131, 33)";
    ctx.fillRect(0, 0, 400, 800);
    //rectangulo gris
    ctx.fillStyle = "rgb(131, 129, 129)";
    ctx.fillRect(80, 0, 250, 800);
    //lineas paralelas blancas
    ctx.fillStyle = "#FFF";
    ctx.fillRect(310, 0, 9, 800);
    ctx.fillRect(90, 0, 9, 800);
    ctx.strokeStyle = "#FFF";
    // lineas discontinuas blancas
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.setLineDash([20, 30]);
    ctx.moveTo(200, 10);
    ctx.lineTo(200, 800);
    ctx.stroke();

  }

  function Car(x, y, img) {
    var obs = [];
    this.x = x;
    this.y = y;
    this.maxSpeed = 1;
    this.sX = 1;
    this.sY = 1;
    this.img = new Image();
    this.img.src = img;

  }

  Car.prototype.moveLeft = function () { this.sX = -this.maxSpeed; };
  Car.prototype.moveRight = function () { this.sX = this.maxSpeed; };
  Car.prototype.moveUp = function () { this.sY = -this.maxSpeed; };
  Car.prototype.moveDown = function () { this.sY = this.maxSpeed; };
  Car.prototype.move = function () {
    this.x += this.sX;
    this.y += this.sY;
  };
  Car.prototype.draw = function (ctx) {
    ctx.drawImage(this.img, this.x, this.y, 50, 101);
  };

  function move() {
    car.move();

  }

  function draw(ctx) {
    car.draw(ctx);
  }


  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37: car.moveLeft(); break;
      case 39: car.moveRight(); break;
      case 38: car.moveUp(); break;
      case 40: car.moveDown(); break;
    }
  };

  function updateCanvas() {
    ctx.clearRect(0, 0, 600, 800);
    startGame();
    move();
    draw(ctx);
    window.requestAnimationFrame(updateCanvas);
  }


};  
