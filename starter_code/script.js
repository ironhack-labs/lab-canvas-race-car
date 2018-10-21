window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var game = new Game();

  function startGame() { 
    game.drawStreet();
    game.drawCar();
    game.obstacle();
  }

  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37 : game.car.moveLeft(); startGame(); break;
      case 39 : game.car.moveRight();startGame(); break;
    }
  }

  function Game() {
    var canvas = document.getElementById('canvas-race');
    this.ctx = canvas.getContext('2d');
    this.ctx.clearRect(0, 0, 500, 800);
    this.car =  {x:185, y:650,
      moveLeft : function() {this.x -=25},
      moveRight : function() {this.x +=25},
    }
  }

  //CREATE STREET
  Game.prototype.drawStreet = function() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 50, 800);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(50, 0, 10, 800);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(60, 0, 10, 800);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(70, 0, 360, 800);
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(360, 0, 10, 800);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(370, 0, 10, 800);
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(380, 0, 50, 800);
    //dotted street
    this.ctx.beginPath();
    this.ctx.setLineDash([20]);
    this.ctx.moveTo(215, 0);
    this.ctx.lineTo(215, 800);
    this.ctx.lineWidth = 7;
    this.ctx.strokeStyle = 'white';
    this.ctx.stroke();
  };

  //CAR IMAGE
  Game.prototype.drawCar= function () {
    var img = new Image();
    img.onload = function() {
      this.ctx.drawImage(img,this.car.x,this.car.y,60,90);
    }.bind(this);
    img.src = "./images/car.png";
  };

   
  //GENERATE CREATE OBSTACLES
  Game.prototype.obstacle = function () {
    this.randomX = Math.floor(Math.random()*((360-70))+70);
    this.randomLength = Math.floor(Math.random()*((360-70))+70);
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.randomX, 0, this.randomLength, 20);
  }

  // Game.prototype.intervalObstacle = function () {
  //   this.intervalID = setInterval(function(){

  //   }.bind(this), 5000);
  // }
 


};


