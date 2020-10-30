const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const img = new Image();
img.src = "../images/road.png";

const carImg = new Image();
carImg.src = "../images/car.png";

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(carImg, 225, 550, 50, 110);
  }
};

const backgroundImage = {
  img: img,
  x: 0,
  y: 0,
  speed: +1,

  move: function () {
    this.y += this.speed;
    this.y %= bcanvas.height;
  },

  draw: function () {
    ctx.drawImage(this.img, 0, this.y);
    if (this.speed < 0) {
      ctx.drawImage(this.img, 0, this.y + this.img.height);
    } else {
      ctx.drawImage(this.img, 0, this.y - backgroundCanvas.height);
    }
  },
};

function updateCanvas() {
  backgroundImage.move();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}
updateCanvas();
