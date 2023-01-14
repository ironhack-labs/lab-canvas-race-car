const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Player {
  constructor() {
    this.width = 100;
    this.height = 200;
    this.x = canvas.width / 2;
    this.y = canvas.height / 2;
    this.image = new Image();
    this.image.src = "images/car.png";
  }
  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
  update() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

const player = new Player();

function startGame() {
  const backgroundImg = new Image();
  backgroundImg.src = "images/road.png";
  backgroundImg.onload = () => {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
    player.draw();
  };
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };
};
