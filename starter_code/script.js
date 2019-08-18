const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class background {
  constructor() {
    this.y = 0;
  }
  draw() {
    this.y += 2;
    if (this.y > canvas.height) this.y = 0;
    ctx.fillStyle = "green";
    ctx.fillRect(0, 0, 30, 600);
    ctx.fillRect(370, 0, 30, 600);
    ctx.fillStyle = "gray";
    ctx.fillRect(30, 0, 340, 600);
    ctx.fillStyle = "white";
    ctx.fillRect(40, 0, 10, 600);
    ctx.fillRect(350, 0, 10, 600);
    ctx.strokeStyle = "white";
    ctx.beginPath();
    ctx.setLineDash([25, 25]);
    ctx.lineWidth = 5;
    ctx.moveTo(200, this.y);
    ctx.lineTo(200, 600);
    ctx.stroke();
    // drawing the second line
    ctx.moveTo(200, this.y - canvas.height);
    ctx.lineTo(200, this.y);
    ctx.stroke();
  }
}

class vehicle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.x = 175;
    this.y = canvas.height - this.height - 20;
    this.image = new Image();
    this.image.src = "./images/car.png";
  }
  draw() {
    if (this.x > 350 - this.width) {
      ctx.drawImage(this.image, 350 - this.width, canvas.height - this.height - 20, this.width, this.height);
    } else if (this.x < 50) {
      ctx.drawImage(this.image, 50, canvas.height - this.height - 20, this.width, this.height);
    } else {
      ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
  }
  collision(item) {
    return (this.x < item.x + item.width) &&
      (this.x + this.width > item.x) &&
      (this.y < item.y + item.height) &&
      (this.y + this.height > item.y);
  }
}

class obstacles {
  constructor(x, width) {
    this.x = x;
    this.y = 0;
    this.width = width;
    this.height = 20;
  }
  draw() {
    this.y += 2;
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

var frames = 0;

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };
}

function startGame() {
  // creating objects
  const street = new background();
  const car = new vehicle(50, 101);
  // starting moving!


  let interval = setInterval(function () {
    frames++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    street.draw();
    car.draw();
    generateObstacles();
    drawingObstacles();
  }, 1000 / 60)

  addEventListener('keydown', function (event) {
    if (event.keyCode === 39) {
      car.x += 45;
    }
    if (event.keyCode === 37) {
      car.x -= 45;
    }
  });
  var obs = [];

  function generateObstacles() {
    if (frames % 130 == 0) {
      let width = Math.round(Math.random() * 100) + 100;
      // random position between 50 y 350 - width
      let x = Math.round(Math.random() * (300 - width)) + 50;
      var muro = new obstacles(x, width);
      obs.push(muro);
    }
  }

  function drawingObstacles() {
    obs.forEach(function (obstacle) {
      obstacle.draw();
      if (car.collision(obstacle)) {
        console.log("te morriste");
        clearInterval(interval);
      }
    })
  }
};

