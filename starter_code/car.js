class Car {
  constructor(ctx, name) {
    this._ctx = ctx;
    this._image = new Image();
    this._image.src = `images/${name}`;
    this._posX = 178;
    this._posY = 520;
    this._vel = 4;
  }

  draw() {
    this._ctx.drawImage(this._image, this._posX, this._posY, 36, 80);
  }

  goLeft() {
    this._posX -= this._vel;
  }

  goRight() {
    this._posX += this._vel;
  }
}
