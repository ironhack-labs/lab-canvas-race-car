window.onload = function() {
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  drawCanvas();

  // CAR DEFINITION

  function Car() {
    this.x = 236;
    this.y = 500;
    this.MAX_X = 470;
    this.MIN_X = 0;
    this.img = new Image();
    this.img.src = "images/car.png";
  }
  Car.prototype.moveLeft = function() {
    this.x -= 10;
    if (this.x < this.MIN_X) {
      this.x = 0;
    }
  };
  Car.prototype.moveRight = function() {
    this.x += 10;
    if (this.x > this.MAX_X) {
      this.x = 470;
    }
  };

  var car = new Car();

  // OBSTACLE DEFINITION

  function Obstacle(x, y, width) {
    this.x = 50 + x;
    this.y = y;
    this.width = width;
    this.height = 50;
  }

  var obstacle1 = new Obstacle(30, 0, 200);
  var obstacle2 = new Obstacle(180, -500, 100);
  var obstacle3 = new Obstacle(300, -1000, 200);
  var obstacle4 = new Obstacle(30, -1500, 200);
  var obstacle5 = new Obstacle(-50, -10000, 550);
  obstacle5.height = 8000;

  //BIND KEY/CLICK EVENT

  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 37) {
      car.moveLeft();
    } else if (e.keyCode == 39) {
      car.moveRight();
    }
  });

  //RENDER FUNCTIONS

  function drawCanvas() {
    var canvasContainer = document.getElementById("game-board");
    canvas.setAttribute("height", 700);
    canvas.setAttribute("width", 550);
    canvasContainer.appendChild(canvas);
  }

  function drawRoad() {
    ctx.fillStyle = "#999999";
    ctx.fillRect(50, 0, 450, 700);
    ctx.fillStyle = "#008100";
    ctx.fillRect(0, 0, 50, 700);
    ctx.fillRect(500, 0, 50, 700);
    ctx.fillStyle = "#fff";
    ctx.fillRect(60, 0, 10, 700);
    ctx.fillRect(480, 0, 10, 700);
    ctx.moveTo(275, 0);
    ctx.lineTo(275, 700);
    ctx.lineWidth = 7;
    ctx.setLineDash([30, 17]);
    ctx.strokeStyle = "#fff";
    ctx.stroke();
  }

  function drawCar() {
    imgScale = 158 / 310;
    ctx.drawImage(car.img, car.x, car.y, 150 * imgScale, 150);
  }

  var score = 0;
  function drawScore() {
    ctx.fillStyle = "blue";
    ctx.font = "30px sans-serif";
    ctx.fillText("Score: " + animateScore(), 10, 40);
  }

  function drawObstacle(obj) {
    ctx.fillStyle = "#870007";
    ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
  }


  //ANIMATION FUNCTIONS

  function animateRoad() {
    ctx.lineDashOffset = (ctx.lineDashOffset - 1) % 47;
  }

  function animateScore() {
    if (score > 520) {
      return "ESQUIVA ESTA";
    }
    return score++;
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, 5550, 700);
  }

  function moveObstacle(obj) {
    obj.y += 5;
  }

  //COLLISION FUNCTION

  function checkCollision(obj){
    if((car.x >= obj.x && car.x <= obj.width + obj.x) && (car.y >= obj.y && car.y <= obj.y + obstacle1.height)){
      alert('Game Over');
    }
  }

  //UPDATE CANVAS FUNCTIONS

  function drawAll() {
    drawRoad();
    drawCar();
    drawObstacle(obstacle1);
    drawObstacle(obstacle2);
    drawObstacle(obstacle3);
    drawObstacle(obstacle4);
    drawObstacle(obstacle5);
    drawScore();
  }

  function animateAll() {
    animateRoad();
    moveObstacle(obstacle1);
    moveObstacle(obstacle2);
    moveObstacle(obstacle3);
    moveObstacle(obstacle4);
    moveObstacle(obstacle5);
  }

  function updateCanvas() {
    checkCollision(obstacle1);
    checkCollision(obstacle2);
    checkCollision(obstacle3);
    checkCollision(obstacle4);
    clearCanvas();
    drawAll();
    animateAll();
    window.requestAnimationFrame(updateCanvas);
  }

  //START GAME

  function startGame() {
    drawCanvas();
    drawRoad();
    drawCar();
    window.requestAnimationFrame(updateCanvas);
  }
};
