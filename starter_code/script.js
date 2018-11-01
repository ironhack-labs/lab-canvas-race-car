window.onload = function () {

  var KEY_UP = 38;
  var KEY_RIGHT = 39;
  var KEY_DOWN = 40;
  var KEY_LEFT = 37;

  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function Canvas(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext("2d");
  }

  function Road(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 0;
    this.y = 0;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }

  Road.prototype.draw = function () {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.x + 40, this.y, this.width - 80, this.height);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x + 60, this.y, this.width - 120, this.height);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.x + 80, this.y, this.width - 160, this.height);
  }

  Road.prototype.lines = function () {
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + 225, this.y + 1);
    this.ctx.lineTo(this.x + 225, this.y + 700);
    this.ctx.lineWidth = 8;
    this.ctx.setLineDash([30, 45])
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
    this.ctx.closePath();

  }

  function Car(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 170;
    this.y = 470;
    this.width;
    this.height;
    this.vx = 5;
  }

  Car.prototype.draw = function () {
    this.img = new Image();
    this.img.src = "images/police.png";
    this.img.onload = function () {
      this.ctx.drawImage(this.img, this.x, this.y, 70, 120);
    }.bind(this)
  }
  // Car.prototype.move = function() {
  //   this.x += this.vx;}


  Car.prototype.move = function () {
    document.onkeydown = function (e) {
      e.preventDefault();
      switch (e.keyCode) {
        case KEY_LEFT:
          this.x -= this.vx;
          break;
        case KEY_RIGHT:
          this.x += this.vx;
          break;
      }
    }.bind(this);
  }



  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d');
  // var canvas = new Canvas('game');
  var road = new Road(canvas);
  var car = new Car(canvas);

  function startGame() {

   
      road.draw();
      car.move();
      road.lines();
      setInterval(function() {
     
      car.draw();
    },1000/60)
  }
};