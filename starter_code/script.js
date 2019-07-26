let canvas;
let ctx;
let framecounter = 0;
let moving;
let score = 0;

let car = {
  x: 150,
  y: 200,
  width: 50,
  height: 100,
  moveLeft: function() {
    if (this.x === 0) {
      this.x = 0;
    } else {
      this.x -= 50;
    }
  },
  moveRight: function() {
    if (this.x === 300) {
      this.x = 300;
    } else {
      this.x += 50;
    }
  }
};

class obstacle {
  constructor() {
    (this.x = 20 + Math.random() * 200),
      (this.y = 0),
      (this.width = 10 + Math.random() * 100),
      (this.height = 10);
  }
}
let obstacles = [];

function drawRoad() {
  ctx.fillStyle = "green";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "grey";
  ctx.fillRect(25, 0, 300, canvas.height);

  ctx.fillStyle = "white";
  ctx.fillRect(40, 0, 10, canvas.height);
  ctx.fillRect(300, 0, 10, canvas.height);

  ctx.strokeStyle = "white";
  ctx.setLineDash([5, 10]);
  ctx.moveTo(175, 0);
  ctx.lineTo(175, 500);
  ctx.stroke();
  ctx.fillStyle = "red";
  obstacles.forEach(obstacle => {
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
  ctx.fillStyle = "white";
  ctx.font = "20px Georgia";
  ctx.fillText("Score:" + score, 60, 480);
}

function startGame() {
  moving = setInterval(updateCanvas, 1000 / 60);
  document.onkeydown = function(e) {
    switch (e.keyCode) {
      case 37:
        car.moveLeft();
        break;
      case 39:
        car.moveRight();
        break;
    }
  };
}
let img = new Image();
img.src = "images/car.png";

function draw(car) {
  ctx.drawImage(img, car.x, car.y, car.width, car.height);
}

function updateCanvas() {
  ctx.clearRect(0, 0, 350, 500);
  drawRoad();
  draw(car);
  if (framecounter % 10 === 0) {
    obstacles.forEach(obstacle => {
      obstacle.y += 20;
    });
  }
  if (framecounter % 100 === 0) {
    obstacles.push(new obstacle());
    score++;
  }
  obstacles.forEach(obstacle => {
    if (intersect(obstacle, car)) {
      clearInterval(moving);
      ctx.fillStyle = "red";
      ctx.font = "40px Georgia";
      ctx.fillText("Game Over!", 10, 50);
    }
  });
  framecounter++;
}

function intersect(a, b) {
  var aLeft = a.x;
  var aTop = a.y;
  var aRight = a.x + a.width;
  var aBottom = a.y + a.height;

  var bLeft = b.x;
  var bTop = b.y;
  var bRight = b.x + b.width;
  var bBottom = b.y + b.height;

  return !(
    aLeft > bRight ||
    aRight < bLeft ||
    aTop > bBottom ||
    aBottom < bTop
  );
}

window.onload = function() {
  canvas = document.getElementById("road");
  ctx = canvas.getContext("2d");
  drawRoad();
  draw(car);
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
};
