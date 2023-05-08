const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let gameFrames=0

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};

class Background {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = canvas.width;
    this.height = canvas.height;
    this.img = new Image();
    this.img.src = "../images/road.png";
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
}

class Car {
  constructor() {
    this.x = canvas.width / 2 - 30;
    this.y = canvas.height - 120;
    this.width = 60;
    this.height = 100;
    this.img = new Image();
    this.img.src = "../images/car.png";
    this.img.onload = () => {
      this.draw();
    };
  }

  draw() {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  moveLeft() {
    if(this.x>45){
    this.x -= 7;
    }
  }
  moveRight() {
    if(this.x<400){
    this.x += 7;
    }
  }
}

function startGame() {
  gameArea = new Background();
  playerCar = new Car();
  gameLoop()
}

function gameLoop() {
  gameFrames++;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  gameArea.draw();
  playerCar.draw();
  playerCar.x
  console.log(playerCar.x)
  requestAnimationFrame(gameLoop)
}

document.addEventListener("keydown", function(e) {
  if (e.key == "ArrowLeft") {
    playerCar.moveLeft();
  }
  if (e.key == "ArrowRight") {
    playerCar.moveRight();
  }
});
