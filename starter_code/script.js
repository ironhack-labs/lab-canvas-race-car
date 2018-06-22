var ctx;
window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    canvas = new startGame();
    canvas.createBoard();
  };

  function car() {
    this.x = 190;
    this.y = 700;
    this.maxSpeed = 1;
    this.sX = 1;
    this.img = new Image();
    this.img.src = "./images/car.png";
    this.img.onload = this.printCar.bind(this);
  }
  car.prototype.moveLeft = function () { 
    this.sX = -this.maxSpeed }
  car.prototype.moveRight = function () { 
    this.sX = this.maxSpeed }
  car.prototype.move = function () {
    this.x += this.sX;
  }
  car.prototype.move = function(){
    this.car.move();
    
  }
  document.onkeydown = function (e) {
    switch (e.keyCode) {
      case 37: this.car.moveLeft(); break;
      case 39: this.car.moveRight(); break;
    }
  }
  car.prototype.printCar = function () {
    ctx.drawImage(this.img, this.x, this.y, 50, 100);
  };
  


  function startGame() {
    ctx = document.getElementById('raceCar').getContext('2d');
    this.ctx = ctx
    this.car = new car();

  }
  startGame.prototype.createBoard = function () {
    this.ctx.clearRect(0, 0, 800, 700);
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, 400, 800);
    this.ctx.moveTo(0, 0);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 30, 800);
    this.ctx.moveTo(400, 0);
    this.ctx.fillRect(400, 0, 30, 800);
    this.ctx.moveTo(40, 0);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(40, 0, 20, 800);
    this.ctx.moveTo(200, 0);
    this.ctx.fillRect(368, 0, 20, 800);
    this.ctx.moveTo(210, 0);
    this.ctx.fillRect(210, 0, 15, 800);
    this.ctx.fillStyle = "grey";
    this.ctx.moveTo(210, 0);
    this.ctx.fillRect(210, 0, 15, 5);
    this.ctx.moveTo(210, 50);
    this.ctx.fillRect(210, 50, 15, 50);
    this.ctx.moveTo(210, 150);
    this.ctx.fillRect(210, 150, 15, 50);
    this.ctx.moveTo(210, 250);
    this.ctx.fillRect(210, 250, 15, 50);
    this.ctx.moveTo(210, 350);
    this.ctx.fillRect(210, 350, 15, 50);
    this.ctx.moveTo(210, 450);
    this.ctx.fillRect(210, 450, 15, 50);
    this.ctx.moveTo(210, 550);
    this.ctx.fillRect(210, 550, 15, 50);
    this.ctx.moveTo(210, 650);
    this.ctx.fillRect(210, 650, 15, 50);
    this.ctx.moveTo(210, 750);
    this.ctx.fillRect(210, 750, 15, 50);
    this.ctx.stroke();

    
  }

  car.prototype.updateCanvas = function (){
    ctx.clearRect(0,0,800,700);
    car.createBoard();
    car.printCar();
    car.move();
  window.requestAnimationFrame(updateCanvas);
  }
  window.requestAnimationFrame(updateCanvas);



};
