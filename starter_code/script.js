window.onload = function () {

  var KEY_RIGHT = 39;
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
    this.offset=0;
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
    this.ctx.setLineDash([30, 45]);
    this.ctx.lineDashOffset =this.offset;
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
    this.ctx.drawImage(this.img, this.x, this.y, 70, 120);
    
  }
  

  Car.prototype.move = function () {
    document.onkeydown = function (e) {
      e.preventDefault();
      switch (e.keyCode) {
        case KEY_LEFT:
        if(this.x>75){this.x -= this.vx;}
         else {this.x += this.vx}
          break;
        case KEY_RIGHT:
        if(this.x<305){this.x += this.vx;}
        else {this.x -= this.vx}
         break;
      }
    }.bind(this);
  }

  Car.prototype.clear = function() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }



  var canvas = document.getElementById("game");
  var ctx = canvas.getContext('2d');
  // var canvas = new Canvas('game');
  var road = new Road(canvas);
  var car = new Car(canvas);


  function startGame() {
      var counter=0;


      setInterval(function() {
      car.clear();
      road.draw();
      road.lines();
      car.draw();
      road.offset= -counter%75;
      car.move();
      counter++;
      
      
    },1000/60)
  }
};