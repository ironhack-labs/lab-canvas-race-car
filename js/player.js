class Player {
  constructor(ctx, gameW, gameH, keys) {
    this.ctx = ctx;

    this.gameWidth = gameW;
    this.gameHeight = gameH;

    this.width = 5;
    this.height = 5;

    this.image = new Image();
    this.image.src = "../images/car.png";

    this.posX = 0;
    this.posY = 0;

    this.velX = 1;

    this.keys = keys;

    this.setListeners();
  }

  draw() {
    this.ctx.drawImage(this.image, this.posX, this.posY);
  }

  setListeners() {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case this.keys.TOP:
          // Check if its on the floor 👀
          if (this.posY >= this.posY0) {
            this.jump();
          }
          break;
        case this.keys.SPACE:
          // .shoot
          this.shoot();
          break;
      }
    });
  }
}
