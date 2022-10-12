window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  addEventListener("keydown", (event) => {
    event.preventDefault();
    switch (event.key) {
      case "ArrowUp":
        break;
      case "ArrowDown":
        break;
      case "ArrowLeft":
        break;
      case "ArrowRight":
        break;
    }
  });

  function startGame() {
    isStarted = !isStarted;
  }
};

// The Road
let isStarted = false;

const img = new Image();
img.src = "images/road.png";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const backgroundImage = {
  img: img,
  y: 0,
  speed: 1,

  move: function () {
    this.y += this.speed;
  },

  draw: function () {
    ctx.drawImage(
      this.img,
      0,
      this.y % canvas.height,
      canvas.width,
      canvas.height
    );

    ctx.drawImage(
      this.img,
      0,
      (this.y % canvas.height) - canvas.height,
      canvas.width,
      canvas.height
    );
  },
};

// moveUp: function () {
//   this.y -= this.carSpeed;
// },
// moveRight: function () {
//   this.x += this.carSpeed;
// },

function updateCanvas() {
  if (isStarted === true) {
    backgroundImage.move();
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  backgroundImage.draw();

  requestAnimationFrame(updateCanvas);
}

// start calling updateCanvas once the image is loaded
img.onload = updateCanvas;

// The Car
