window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var offset = 0;


  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {}

  function Canvas() {
    this.canvas = document.getElementById("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.fps = 60;
    this.obstacles = [];
  }

  function getObjRan(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

//////////////////////

  function Obstacles(canvas) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.y = 0;
    this.x = getObjRan(50,200);
    this.width = getObjRan(40,100);
    this.height = 5;
  }

  Obstacles.prototype.draw = function() {
    this.ctx.fillStyle="brown";
    this.ctx.fillRect(this.x, this.y++, this.width, this.height);
  }


/////////////////////////

  function Car(canvas, vx) {
    this.canvas = canvas;
    this.ctx = canvas.ctx;
    this.originalVx = vx;
    this.vx = vx;
    this.x = 175;
    this.y = 480;
    this.imgCar = new Image();
    this.imgCar.src =
      "https://github.com/YaredMyers/lab-canvas-race-car/blob/master/starter_code/images/car.png?raw=true";
  }

  Car.prototype.draw = function() {
      this.ctx.drawImage(this.imgCar, this.x, this.y, 50, 100);
      this.setListeners();
  };

  var KEY_RIGHT = 39;
  var KEY_LEFT = 37;

  Car.prototype.setListeners = function() {
    document.onkeydown = function(e) {
      e.preventDefault();
      switch (e.keyCode) {
        case KEY_LEFT:
        if(this.x >= 50){
          this.x -= this.vx;
        }
          break;
        case KEY_RIGHT:
        if(this.x <= 300){
      this.x += this.vx;}
          break;
      }
    }.bind(this);
  };

  function Road(canvas) {
    this.x = 0;
    this.y = 0;
    this.height = canvas.canvas.height
  }

  Road.prototype.draw = function() {
   //fondo
   ctx.fillStyle = "grey";
   ctx.fillRect(this.x, this.y, 400, this.height);

   // cesped
   ctx.fillStyle = "green";
   ctx.fillRect(0, 0, 30, 600);
   ctx.fillStyle = "green";
   ctx.fillRect(370, 0, 30, 600);

   // arcen
   ctx.fillStyle = "white";
   ctx.fillRect(40, 0, 10, 600);
   ctx.fillStyle = "white";
   ctx.fillRect(350, 0, 10, 600);

   // linea medio
   ctx.beginPath();
   ctx.lineWidth = 4;
   ctx.strokeStyle = "white";
   ctx.setLineDash([25, 20]);
   ctx.lineDashOffset = -offset;
   ctx.moveTo(200, 0);
   ctx.lineTo(200, 800);
   ctx.stroke();
   ctx.closePath();
  }



  var canvas = new Canvas();
  var road = new Road(canvas);
  var car = new Car(canvas, 15);

  var counter = 0;

  Canvas.prototype.moveAll = function () {
    setInterval(function(){
    road.draw();
    car.draw();
    offset++;

    counter++
      console.log(canvas.obstacles)
    if (counter % 100 === 0) {
      this.obstacles.push(new Obstacles(canvas.canvas))
    }

    this.obstacles.forEach(function(obstacle) {
      obstacle.draw();
    });
  }.bind(this),1000/canvas.fps)
    car.setListeners();
};
canvas.moveAll();

}
