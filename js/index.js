window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    board.start();
  }
};
const myObstacles = [];

const board = {
  canvas: document.getElementById("canvas"),
  context: this.canvas.getContext("2d"),
  frames: 0,
  start: function () {
    // let bgImage = new Image();
    // bgImage.src = "../images/road.png";
    // bgImage.onload = () => {
    //   //draw image size equals the canvas size
    //   this.context.drawImage(bgImage, 0, 0, 500, 700);
    // };
    this.interval = setInterval(updateBoard, 20);
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

class Auto {
  constructor(xPosition, yPosition) {
    //Car position and speed
    this.xPosition = xPosition;
    this.yPosition = yPosition;

    //Speed Properties
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
  update() {
    //Create Image
    const carImage = new Image();
    carImage.src = "../images/car.png";
    //Resize Image
    const width = carImage.width / 3;
    const height = carImage.height / 3;

    //Add img to canvas
    let context = board.context;
    context.drawImage(carImage, this.xPosition, this.yPosition, width, height);
  }

  newPosition() {
    this.xPosition += this.xSpeed;
    this.yPosition += this.ySpeed;
  }
  left() {
    return this.xPosition;
  }
  right() {
    return this.xPosition + this.width;
  }
  top() {
    return this.yPosition;
  }
  bottom() {
    return this.yPosition + this.height;
  }

  // crashWith(obstacle) {
  //   return !(
  //     this.right() < obstacle.left() ||
  //     this.left() > obstacle.right() ||
  //     this.top() < obstacle.bottom() ||
  //     this.bottom() > obstacle.top()
  //   );
  // }
}
let car = new Auto(220, 580);

class Obstacle extends Auto {
  constructor(xPosition, yPosition, color, width, height) {
    super(xPosition, yPosition);

    this.width = width;
    this.height = height;
    this.color = color;

    //Speed Properties
    this.xSpeed = 0;
    this.ySpeed = 0;
  }
  update() {
    //Add img to canvas
    let context = board.context;
    context.fillStyle = this.color;
    context.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  }
}

let obs = new Obstacle(50, 50, "green", 0, 0);
function updateBoard() {
  board.clear();
  car.newPosition();
  car.update();
  obs.update();
  updateObstacles();
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38:
      car.ySpeed -= 1;
      break;
    case 40:
      car.ySpeed += 1;
      break;
    case 37:
      car.xSpeed -= 1;
      break;
    case 39:
      car.xSpeed += 1;
      break;
  }
};

document.onkeyup = function (e) {
  car.xSpeed = 0;
  car.ySpeed = 0;
};

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].update();
  }

  board.frames += 1;
  //let test = new Obstacle(xPosition,yPosition,color,with,height)
  if (board.frames % 120 === 0) {
    let y = board.canvas.width;

    let minWidth = 150;
    let maxWidth = 400;

    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Obstacle(0, y, "green", width, 10));
    myObstacles.push(
      new Obstacle(width + gap, y, "green", y - width - gap, 10)
    );
  }
}
//let obs = new Obstacle(50, 50, "green", 50, 50);
//xPosition, yPosition, color, width, height
//myObstacles.push(new Obstacle(0, y, "green", 10, width));
