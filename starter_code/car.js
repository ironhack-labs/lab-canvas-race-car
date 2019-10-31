class Car {
  constructor(ctx, name) {
    this._ctx = ctx;
    this._image = new Image();
    this._image.src = `images/${name}`;
    this._posX = 178;
    this._posY = 520;
    this._vel = 20;
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

class Obstacle {
  constructor(ctx, width, height, x, y) {
    this._width = width;
    this._height = height;
    this._posX = x;
    this._posY = y;
    this._ctx = ctx;

    this._speedX = 0;
    this._speedY = 0;
  }

  update() {
    this._posY += 1;
    this._ctx.fillStyle = "white";
    this._ctx.fillRect(this._posX, this._posY, this._width, this._height);
  }
}
