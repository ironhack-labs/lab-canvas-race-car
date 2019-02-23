var myObstacles = [];

var myGameArea = {
  canvas : document.createElement('canvas'),
  frames: 0,
  start: function () {
    this.canvas.width = 400;
    this.canvas.height = 550;
    this.ctx = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() { // DGG: Para limpiar la pantalla antes de cada refresco
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.drawnRoad();
  },
  stop: function() {
    clearInterval(this.interval);
  },
  drawnRoad: function () {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 25, this.canvas.height);
    this.ctx.fillRect(375, 0, 25, this.canvas.height);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(25, 0, 10, this.canvas.height);
    this.ctx.fillRect(365, 0, 10, this.canvas.height);
    this.ctx.fillRect(45, 0, 310, this.canvas.height);
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([20, 10]);
    this.ctx.moveTo(200, 0);
    this.ctx.lineTo(200, 550);
    this.ctx.stroke();
  },
  score: function() {
    points = ( Math.floor( this.frames/5 ) );
    this.ctx.font = '18px serif';
    this.ctx.fillStyle = 'white';
    this.ctx.fillText('Score: ' + points, 60, 50);
    return points;
  },
}

function Car (width, height, x, y) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.img = new Image();
  this.img.src = './images/car.png';

  this.update = function() {
    ctx = myGameArea.ctx;

    //this.img.onload = function() {
      ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    //}
  };
  this.newPos = function() {
    this.x += this.speedX;
  };
  this.left   = function() { return this.x };
  this.right  = function() { return (this.x + this.width) };
}



function Obstacle (width, height, color, x, y) { // DGG: Para crear el personaje y los obstáculos
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.speedX = 0;
  this.speedY = 0;
  this.update = function() {
    ctx = myGameArea.ctx;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  };
  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  };
  this.left   = function() { return this.x };
  this.right  = function() { return (this.x + this.width) };
  this.top    = function() { return this.y };
  this.bottom = function() { return (this.y + this.height) };
}



function moveLeft() {
  if (car.x > 50) { car.speedX -= 1; } // DGG: Limita por la izquierda
}

function moveRight() {
  if (car.x < 300) { car.speedX += 1; } // DGG: Limita por la derecha
}

document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;  
  }
}

document.onkeyup = function(e) {
  stopMove();
}

function stopMove() {
  car.speedX = 0;
}

function updateGameArea() {
  myGameArea.clear();
  car.update();
  car.newPos();
  myGameArea.score();
  myGameArea.frames += 1;

  if ( myGameArea.frames % 140 === 0 ) { // DGG: Separación entre obstáculos
    minPosX = 45;
    maxPosX = 225;
    posX = Math.floor( Math.random() * (maxPosX - minPosX + 1) + minPosX );
    minWidth = 30; // DGG: Aumentando este valor se sube la dificultad
    maxWidth = 130;
    width = Math.floor( Math.random() * (maxWidth - minWidth + 1) + minWidth );
    myObstacles.push( new Obstacle(width, 20, "brown", posX, 0) );
  }

  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update(); 
  }  

  function crashWith(car, obstacle) {
    //console.log('Coche: ' + 'X=' + car.left() + ' ,Y=' + car.y + '; X=' + car.right() + ' ,Y=' + car.y);
    //console.log('Obstáculo: ' + 'X=' + obstacle.left() + ' ,Y=' + obstacle.bottom() + '; X=' + (obstacle.right()) + ' ,Y=' + obstacle.bottom() );
    return  !(
              ( car.right() < obstacle.left() )                   
              ||
              ( car.left()  > obstacle.right() )
            )
            && 
            ( obstacle.bottom() > car.y );
  }

  //console.log(myGameArea.score());

  var myGameOver = {
    canvas : document.createElement('canvas'),
    draw: function () {
      this.canvas.width = 300;
      this.canvas.height = 150;
      //this.canvas.style.border = "2px dotted yellow";
      this.canvas.style.backgroundColor = "black";

      this.ctx = this.canvas.getContext('2d');
      document.body.insertBefore(this.canvas, null);

      this.ctx.font = '24px serif';
      this.ctx.fillStyle = 'red';
      this.ctx.fillText('Game Over!', 100, 45);
      this.ctx.fillStyle = 'white';
      this.ctx.fillText('Your final score', 80, 80);
      //this.ctx.fillStyle = 'white';
      this.ctx.fillText(myGameArea.score(), 130, 115);
    },
  }

  var crashed = myObstacles.some(function(obstacle) {
    return crashWith(car, obstacle);
  })
  if (crashed) {
    myGameArea.stop();
    myGameOver.draw();
  }
}

function startGame() {
  myGameArea.start();
  myGameArea.drawnRoad();
  car = new Car( 50, 100, 175, 425);
}

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
  startGame();
  };
};
