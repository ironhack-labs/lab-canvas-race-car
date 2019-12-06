console.log('yo runner!')

const myGameArea = {
  canvas: document.createElement('canvas'),
  start: function () {
    this.canvas.width = 400;
    this.canvas.height = 800;
    this.ctx = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  clear: function () {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  stop: function () {
    clearInterval(this.interval);
  },
  style: function () {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(0, 0, 500, 1000);
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.lineTo(50, 0);
    this.ctx.lineTo(50, 800);
    this.ctx.lineTo(0, 800);
    this.ctx.lineTo(0, 0);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 50, 800);
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(400, 0);
    this.ctx.lineTo(350, 0);
    this.ctx.lineTo(350, 800);
    this.ctx.lineTo(400, 800);
    this.ctx.lineTo(0, 0);
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(350, 0, 50, 800);
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(60, 0);
    this.ctx.lineTo(85, 0);
    this.ctx.lineTo(85, 800);
    this.ctx.lineTo(60, 800);
    this.ctx.lineTo(60, 0);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(60, 0, 25, 800);
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(315, 0);
    this.ctx.lineTo(315, 800);
    this.ctx.lineTo(340, 800);
    this.ctx.lineTo(340, 0);
    this.ctx.lineTo(315, 0);
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(315, 0, 25, 800);
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.strokeStyle = "white";
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([15, 35]);
    this.ctx.moveTo(200, 0);
    this.ctx.lineTo(200, 800);
    this.ctx.stroke();
    this.ctx.closePath();
  }
};

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
  }
  update() {
    const context = myGameArea.ctx;
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }
}

const myCar = new Component(30, 30, "red", 200, 800);
console.log(myCar);

function updateGameArea() {
  console.log('updating...');
  myGameArea.clear();
  myGameArea.style();
  myCar.update();
}

window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    myGameArea.start();
  }
}