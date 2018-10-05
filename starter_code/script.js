var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var img = new Image();
var imgScale = 158 / 319;
var imgHeight = 100;
img.src = "./images/car.png";
var LEFT_KEY = 37;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
var UP_KEY = 38;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    //startGame();
    updateCanvas();
    car.draw();
    //drawBoard();
  };
};

function drawBoard() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, 500, 700);
  ctx.fillStyle = "grey";
  ctx.fillRect(50, 0, 400, 700);
  ctx.fillStyle = "white";
  ctx.fillRect(60, 0, 10, 700);
  ctx.fillRect(430, 0, 10, 700);
  for (var y = 50; y < canvas.height; y += 100) {
    ctx.fillRect(canvas.width / 2, y, 10, 50);
  }
  window.onload = function() {
    ctx.drawImage(img, 100, 0, 100 * imgScale, 100);
  };
}

var car = {
  x: canvas.width / 2 - 100,
  y: canvas.height,
  width: imgScale * imgHeight,
  height: imgHeight,
  speed: -5,

  move: function(direction) {
    if (direction === "up") {
      this.y -= this.speed;
    } else if (direction === "down") {
      this.y += this.speed;
    } else if (direction === "left") {
      this.x -= this.speed;
    } else {
      this.x += this.speed;
    }
    this.x = Math.min(canvas.width - this.width, Math.max(0, this.x));
    this.y = Math.min(canvas.height - this.height, Math.max(0, this.y));
  },
  draw: function() {
    ctx.drawImage(img, this.x, this.y, 100 * imgScale, 100);
  },

  isColliding: function(wall) {
    return (
      this.x < wall.x + wall.w &&
      this.x + this.width > wall.x &&
      this.y < wall.y + wall.h &&
      this.height + this.y > wall.y
    );
  },

  isDead: function(walls) {
    return walls.some(this.isColliding.bind(this));
  }
};

var keysPressed = {
  left: false,
  right: false,
};

document.onkeydown = function(event) {
  switch (event.keyCode) {
    case LEFT_KEY:
      keysPressed.right = true;
      break;
    case RIGHT_KEY:
      keysPressed.left = true;
      break;
  }
};

document.onkeyup = function(event) {
  switch (event.keyCode) {
    case LEFT_KEY:
      keysPressed.right = false;
      break;
    case RIGHT_KEY:
      keysPressed.left = false;
      break;
  }
};

var obstacles = {
  walls: [],
  height: 10,
  speed: 3,
  maxWidth: 50,
  minWidth: 10,
  wallCounter: 0,

  createWall: function() {
    var wallWidth =
      Math.random() * (this.maxWidth - this.minWidth) + this.minWidth;
    var posX = Math.random() * (canvas.width - wallWidth);
    this.wallCounter += 1;

    this.walls.push({
      x: posX,
      y: 0,
      w: wallWidth,
      h: this.height
    });
  },

  moveWall: function(wall) {
    wall.y += this.speed;
  },

  move: function() {
    this.walls.forEach(this.moveWall.bind(this));
  },

  drawRectangle: function(wall) {
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
  },

  draw: function() {
    ctx.fillStyle = "maroon";
    this.walls.forEach(this.drawRectangle);
  },

  clearWalls: function() {
    for (var i = 0; i < this.walls.length; i++) {
      if (this.walls[i].x < 0) {
        this.walls.splice(this.walls.indexOf(this.walls[i]), 1);
      }
    }
  }
};

setInterval(function() {
  obstacles.createWall();
}, 500);

function updateCanvas() {
  // move the car
  Object.keys(keysPressed).forEach(function(direction) {
    if (keysPressed[direction]) {
      car.move(direction);
    }
  });

  drawBoard();
  obstacles.move();
  obstacles.clearWalls();

  if (car.isDead(obstacles.walls)) {
    alert("You lose! Your score: " + obstacles.wallCounter);
    location.reload();
    obstacles.wallCounter = 0;
  }

  car.draw();
  obstacles.draw();

  requestAnimationFrame(updateCanvas);
}