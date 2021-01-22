let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

window.onload = () => {
  frames: 0;
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    road.drawImage();
    player.drawImage();
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      player.x -= 10;
      console.log("carro para esquerda");
    } else {
      player.x += 10;
      console.log("carro para direita");
    }
  });
};

function updateGameArea() {
  road.clear();
  road.drawImage();
  player.drawImage();
  updateObstacles();
}

const myObstacles = [];

function updateObstacles() {
  for (i = 0; i < myObstacles.length; i++) {
    myObstacles[i].x += -1;
    myObstacles[i].road.drawImage();
  }

  road.frames += 1;
  if (road.frames % 120 === 0) {
    let x = road.canvas.width;
    let minWidth = 20;
    let maxWidth = 200;
    let width = Math.floor(
      Math.random() * (maxWidth - minWidth + 1) + minWidth
    );
    let minGap = 50;
    let maxGap = 200;
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);
    myObstacles.push(new Road(10, width, "red", x, 0));
    myObstacles.push(new Road(10, x - width - gap, "red", x, width + gap));
  }
}

class Road {
  constructor() {
    this.road = new Image();
    this.road.src = "images/road.png";
    this.interval = setInterval(updateGameArea, 20);
    this.frames = 1;
  }

  drawImage() {
    ctx.drawImage(this.road, 0, 0, 500, 700);
  }

  clear() {
    ctx.clearRect(0, 0, 500, 700);
  }
}

class Player {
  constructor() {
    this.width = 40;
    this.height = 80;
    this.x = 230;
    this.y = 600;
    this.car = new Image();
    this.car.src = "images/car.png";
  }

  drawImage() {
    console.log("Oi");
    ctx.drawImage(this.car, this.x, this.y, 40, 80);
  }
}

const road = new Road();

const player = new Player();
