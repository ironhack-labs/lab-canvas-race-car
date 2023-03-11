class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 158 / 3;
    this.height = 319 / 3;

    this.image = new Image();
    this.image.src = "./images/car.png";

    this.posX = this.gameWidth / 2 - this.width / 2;
    this.posY = this.gameHeight - this.height;

    this.keys = keys;
    this.velX = 15;

    this.setListeners();
  }

  draw(framesCounter) {
    this.ctx.drawImage(
      this.image,
      this.posX,
      this.posY,
      this.width,
      this.height
    );
  }

  setListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.LEFT:
          this.posX -= this.velX;
          break;

        case this.keys.RIGHT:
          this.posX += this.velX;
          break;
      }
    });
  }
}
