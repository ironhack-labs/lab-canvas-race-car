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
  }
}

const player = new Player();

function startGame() {
  backgroundImg = new Image();
  backgroundImg.src = "images/road.png";
  backgroundImg.onload = () => {
    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  };
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);
  player.draw();
  requestAnimationFrame(animate);
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
