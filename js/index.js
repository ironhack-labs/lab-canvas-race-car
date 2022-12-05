class Game {
  constructor() {
    this.ctx = null;
    this.bg = null;
    this.player = null;
  }

  startGame() {
    const canvas = document.getElementById("canvas");

    this.ctx = canvas.getContext("2d");

    const car = new Car(45, 100, 250, 400);

    this.player = car;

    const background = new Image();

    background.src = "./images/road.png";

    background.onload = () => {
      this.bg = background;
      this.updateCanvas();
      this.drawPlayer();
    };
  }

  drawPlayer() {
    this.ctx.drawImage(
      this.player.img,
      this.player.posX - this.player.width / 2,
      this.player.posY,
      this.player.width,
      this.player.height
    );
  }

  updateCanvas() {
    setInterval(() => {
      this.ctx.clearRect(0, 0, 500, 600);

      this.ctx.drawImage(this.bg, 0, 0, 500, 600);

      this.drawPlayer();
    }, 20);
  }
}

class Car {
  constructor(width, height, posX, posY) {
    this.width = width;
    this.height = height;
    this.posX = posX;
    this.posY = posY;
    this.img = this.createCar();
  }

  createCar() {
    const car = new Image();

    car.src = "./images/car.png";

    return car;
  }

  moveRight() {
    this.posX += 10;
  }

  moveLeft() {
    this.posX -= 10;
  }

  move(event) {
    switch (event) {
      case "ArrowRight":
        this.moveRight();
        console.log(this.posX);
        break;
      case "ArrowLeft":
        this.moveLeft();
        console.log(this.posX);
        break;
    }
  }
}

window.onload = () => {
  document.getElementById("start-button").onclick = () => {
    const game = new Game();
    game.startGame();
    document.addEventListener("keydown", (e) => {
      game.player.move(e.key);
    });
  };
};
