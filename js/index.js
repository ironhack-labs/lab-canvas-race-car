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

  update(e) {
    switch (e.keyCode) {
      case 37:
        this.x -= 10;
        break;
      case 38:
        this.y -= 10;
        break;
      case 39:
        this.x += 10;
        break;
      case 40:
        this.y += 10;
        break;
    }

    this.x = Math.max(0, Math.min(this.x, canvas.width - this.width));
    this.y = Math.max(0, Math.min(this.y, canvas.height - this.height));
  }
}

class Obstacle {
  constructor() {
    this.width = Math.floor(Math.random() * (canvas.width - player.width - 100 + 1)) + 100; // Math.floor(Math.random() * (max - min + 1)) + min;
    this.height = 20;
    this.x = Math.floor(Math.random() * (canvas.width + 1));
    this.y = 0;
  }

  draw() {
    ctx.fillStyle = "dark red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update() {
    ctx.fillStyle = "dark red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.y += 3;
  }
}

const player = new Player();
const obstacle = new Obstacle();
const obstacles = [];

function startGame() {
  backgroundImg = new Image();
  backgroundImg.src = "images/road.png";
  backgroundImg.onload = () => {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  };
  setInterval(() => {
    obstacles.push(new Obstacle());
  }, 2000);
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  player.draw();
  requestAnimationFrame(animate);
  obstacles.forEach((obstacle) => obstacle.update());
}

window.onkeydown = (e) => {
  player.update(e);
};

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
    animate();
    canvas.focus();
  };
};
