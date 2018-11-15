window.onload = function() {
  var gameArea = {
    canvas: document.createElement("canvas"),
    start: function() {
      (this.canvas.width = 500),
        (this.canvas.height = 500),
        (this.context = this.canvas.getContext("2d"));
      document.body.insertBefore(this.canvas, document.body.childNodes[0]);
      this.interval = setInterval(updateGameArea, 20);
    },
    clear: function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  };

  function Component(width, height, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
    this.update = function() {
      ctx = myGameArea.context;
      ctx.fillRect(this.x, this.y, this.width, this.height);
      ctx.drawImage(this.x, this.y, this.width, this.height);
    };
    this.newPos = function() {
      this.x += this.speedX;
      this.y += this.speedY;
    };
  }

  function updateGameArea() {
    gameArea.clear();
    car.update();
  }

  car = new Component(200, 300, 100, 200);

  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var positionXCar = 200;
  var positionYObstacle = 0;
  var img = new Image();

  function startGame() {
    img.src = "./images/car.png";
    img.onload = function() {
      ctx.drawImage(img, positionXCar, 300, 100, 200);
      ctx.fillStyle = "#551A8B";
      ctx.fillRect(0, positionYObstacle, 200, 60);
    };
  }

  document.getElementById("start-button").onclick = function() {
    startGame();
    updateCanvas();
  };

  document.onkeydown = function(event) {
    var key = event.keyCode;
    if (key === 37) {
      positionXCar -= 5;
    } else if (key === 39) {
      positionXCar += 5;
    }
  };

  function updateCanvas() {
    if (
      intersect(
        { x: 0, y: positionYObstacle, width: 200, height: 60 },
        { x: positionXCar, y: 300, width: 100, height: 200 }
      )
    ) {
      alert("Game over");
      positionYObstacle = 0;
    } else {
      positionYObstacle++;
      ctx.clearRect(0, 0, 500, 500);
      ctx.drawImage(img, positionXCar, 300, 100, 200);
      ctx.fillRect(positionYObstacle, 0, 200, 60);
      window.requestAnimationFrame(updateCanvas);
    }
  }

  function intersect(rect1, rect2) {
    rect1left = rect1.x;
    rect1top = rect1.y;
    rect1right = rect1.x + rect1.width;
    rect1bottom = rect1.y + rect1.height;

    rect2left = rect2.x;
    rect2top = rect2.y;
    rect2right = rect2.x + rect2.width;
    rect2bottom = rect2.y + rect2.height;

    return !(
      rect1left > rect2right ||
      rect1right < rect2left ||
      rect1top > rect2bottom ||
      rect1bottom < rect2top
    );
  }

  function nextObstacle() {
    if (positionYObstacle === 300) {
      ctx.fillRect(positionYObstacle, 0, 200, 60);
    }
  }
};
