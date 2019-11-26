class MyCar {
  constructor(game, x, y, w, h) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.img = new Image();
  }

  carImg(source) {
    this.img.src = source;
    this.game.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }
  drive() {
    document.addEventListener('keydown', event => {
      const key = event.keyCode;
      if (key === 37) this.x -= 20;
      else if (key === 39) this.x += 20;
    });
  }
  getLeftSide() {
    return this.x;
  }
  getRightSide() {
    return this.x + this.width;
  }
  getTop() {
    return this.y;
  }
  getBottom() {
    return this.y + this.height;
  }
  collision(otherVehicle) {}
}
