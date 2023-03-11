class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.image = new Image();
    this.image.src = "../images/car.png";

    this.width = 50;
    this.height = 100;
    this.image.frames = 1;
    this.image.framesIndex = 0;

    this.posX = 224;
    this.posY = 550;

    this.velX = 20;

    this.keys = keys;

    this.setListeners();
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY, this.width, this.height);
  }


  setListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.RIGHT:
          this.posX += this.velX;
          break;
        case this.keys.LEFT:
          this.posX -= this.velX;
          break;
      }
    });
  }
}
