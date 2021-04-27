window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    startGame();
  };

  function startGame() {
    let canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d");
    let background = new Image();
    background.src = "../images/road.png";

    background.onload = function () {
      ctx.drawImage(background, 0, 0);
    };
  }
};

class Component {
  constructor() {
    this.width = 500;
    this.height = 700;
    this.x = undefined;
    this.y = undefined;
    this.car = new player(this, 200, 550, 100, 150);
    this.ctx = undefined;
    this.canvas = undefined;
  }

  update() {
    let img = new Image();
    img.src = "../images/car.png";
    ctx.drawImage(img, this.x, this.y, this.width, this.height);
  }
}

const player = new Component(30, 30, "red", 0, 110);
