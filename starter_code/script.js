var myObstacles = [];

var myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,
  start: function() {
    this.canvas.width = 270;
    this.canvas.height = 480;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    // call updateGameArea() every 20 milliseconds
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function() {
    clearInterval(this.interval);
  },
  score: function() {
    var points = Math.floor(this.frames / 5);
    this.context.font = "18px serif";
    this.context.fillStyle = "black";
    this.context.fillText("Score: " + points, 350, 50);
  }
};

class Component {
  constructor(width,height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    // new speed properties
    this.speedX = 0;
    this.speedY = 0;
  }

  update() {
    var ctx = myGameArea.context;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }
  top() {
    return this.y;
  }
  bottom() {
    return this.y + this.height;
  }

  crashWith(obstacle) {
    return !(
      this.bottom() < obstacle.top() ||
      this.top() > obstacle.bottom() ||
      this.right() < obstacle.left() ||
      this.left() > obstacle.right()
    );
  }
}

var player = new Component(30, 30, "yellow", 135,400);

function updateGameArea() {
  myGameArea.clear();
  // update the player's position before drawing
  player.newPos();
  player.update();
  // update the obstacles array
  updateObstacles();
  // check if the game should stop
  checkGameOver();
  // update and draw the score
  myGameArea.score();
}


document.onkeydown = function(e) {
  switch (e.keyCode) {
    case 38: // up arrow
      player.speedY -= 5;
      break;
    case 40: // down arrow
      player.speedY += 5;
      break;
    case 37: // left arrow
      player.speedX -= 5;
      break;
    case 39: // right arrow
      player.speedX += 5;
      break;
  }
};

document.onkeyup = function(e) {
  player.speedX = 0;
  player.speedY = 0;
};

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }

  myGameArea.frames += 1;
  if (myGameArea.frames % 120 === 0) {
    var y = myGameArea.canvas.height;
    var minWidth = 20;
    var maxWidth = 200;
    var width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    var minGap = 50;
    var maxGap = 200;
    var gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(width, 20, "red", 0, 0));
   // myObstacles.push(
   //   new Component(10, x - height - gap, "green",  height + gap,y)
   // );
  }
}

function checkGameOver() {
  var crashed = myObstacles.some(function(obstacle) {
    return player.crashWith(obstacle);
  });

  if (crashed) {
    myGameArea.stop();
  }
}



window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
       myGameArea.start();
  }
};
