window.onload = function () {
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
    this.ctx.fillRect(this.x+40, this.y, this.width-80, this.height);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(this.x+60, this.y, this.width-120, this.height);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(this.x+80, this.y, this.width-160, this.height);
  }

  function Car(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext("2d");
    this.x = 170;
    this.y = 470;
    this.width;
    this.height;
  }

  Car.prototype.draw = function () {
    this.img = new Image();
    this.img.src="images/police.png";
    this.img.onload = function(){
      this.ctx.drawImage(this.img,this.x,this.y, 100, 180);
    }.bind(this)
  }

  function Lines(id) {

  }

  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d');
  // var canvas = new Canvas('game');
  var road = new Road(canvas);
  var car = new Car(canvas);

  function startGame() {

    road.draw();
    car.draw();
  }
};