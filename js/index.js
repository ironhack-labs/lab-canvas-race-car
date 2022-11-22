const myGameArea = {
  canvas: document.createElement("canvas"),
  frames: 0,

  start: function () {
    this.canvas.width = 700;
    this.canvas.height = 500;
    this.canvas.style.border = "solid blue 10px";
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },

  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },

  stop: function () {
    clearInterval(this.interval);
  },

  score: function () {
    const points = Math.floor(this.frames / 5);
    this.context.font = "18px sans-serif";
    this.context.fillStyle = "blue";
    this.context.clearRect(300, 25, 100, 30);
    this.context.fillText(`Score: ${points}`, 350, 50);
  },
};

class drawPic {
  constructor(x, y, pic, width, height) {
    this.x = x;
    this.y = y;
    this.pic = pic;
    this.width = width;
    this.height = height;
  }

  update() {
    const ctx = myGameArea.context;
    const myImage = new Image();
    myImage.src = this.pic;
    ctx.drawImage(myImage, this.x, this.y, this.width, this.height);
  }
}

class drawCarPic {
  constructor(x, y, pic, width, height) {
    this.x = x;
    this.y = y;
    this.pic = pic;
    this.width = width;
    this.height = height;
    this.DX = 0;
  }

  update() {
    const ctx = myGameArea.context;
    const myImage = new Image();
    myImage.src = this.pic;
    ctx.drawImage(myImage, this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.DX;
  }

  left() {
    return this.x;
  }
  right() {
    return this.x + this.width;
  }

  bottom() {
    return this.y;
  }
  top() {
    return this.y + this.height;
  }

  newPos() {
    this.x += this.DX;
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

class Component {
  constructor(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.speedX = 0;
    this.speedY = 0;
  }

  update() {
    const ctx = myGameArea.context;
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
}

class writeText {
  constructor(x, y, text) {
    this.x = x;
    this.y = y;
    this.text = text;
  }

  update() {
    const ctx = myGameArea.context;
    ctx.font = "14px sans-serif";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText(this.text, this.x, this.y);
  }
}

const minWidth = 0;
const midWidth = this.canvas.width / 2;
const maxWidth = this.canvas.width;
const carX = 500;
const carY = 400;

const carPic = new drawCarPic(carX, carY, "./images/car.png", 50, 50);
const roadPic = new drawPic(midWidth, 0, "./images/road.png", maxWidth - midWidth, 500);
const logoPic = new drawPic(80, 0, "./images/logo.png", 200, 200);
const messageText = new writeText(175, 300, "Use the left and right arrow to control the car!");
const arrowsPic = new drawPic(120, 350, "./images/arrows.png", 100, 100);

function updateGameArea() {
  myGameArea.clear();
  roadPic.update();
  logoPic.update();
  arrowsPic.update();
  messageText.update();

  carPic.newPos();
  carPic.update();

  updateObstacles();
  checkGameOver();

  myGameArea.score();
}

myGameArea.start();

document.addEventListener("keydown", (event) => {
  const minWidth = 0;
  const midWidth = this.canvas.width / 2;
  const maxWidth = this.canvas.width - 40;

  switch (event.keyCode) {
    case 37: // left arrow
      carPic.DX = -1;
      if (carPic.x <= midWidth) {
        carPic.DX = 0;
        console.log("CRASH!");
      }
      break;
    case 39: // right arrow
      carPic.DX = 1;
      if (carPic.x >= maxWidth) {
        carPic.DX = 0;
        console.log("CRASH!");
      }
      break;
  }
});

document.addEventListener("keyup", (e) => {
  carPic.DX = 0;
});

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    myGameArea.start();
    roadPic.update();
  }
};

function drawRoad(x, y) {
  myGameArea.clear();
  Road.update();

  document.getElementById("road-map").style.visibility = "visible";
}

const myObstacles = [];

function updateObstacles() {
  myGameArea.frames += 1; //
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].y += 1;
    myObstacles[i].update();
  }
  if (myGameArea.frames % 60 === 0) {
    let y = 0;
    const minX = this.canvas.width / 2;
    const maxX = this.canvas.width;

    let edge1 = Math.floor(Math.random() * (maxX - minX + 1) + minX);
    let edge2 = Math.max(
      edge1,
      Math.floor(Math.random() * (maxX - minX + 1) + minX)
    );

    let minWidth = 20;
    let maxWidth = 200;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );

    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Component(edge2 - edge1, 10, "red", edge1, y));
    myObstacles.push(
      new Component(y - width - gap, 10, "blue", y, width + gap)
    );
  }
}

function checkGameOver() {
  const crashed = myObstacles.some(function (obstacle) {
    return carPic.crashWith(obstacle);
  });

  if (crashed) {
    console.log("Crashed!");
    myGameArea.stop();
  }
}
