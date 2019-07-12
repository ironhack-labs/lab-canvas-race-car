class Car {
  constructor(x, y, width, height, ctx) {
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
    this._ctx = ctx;
    this._keys = {
      ARROW_LEFT = 37,
      ARROW_RIGHT = 39
    }
  }

  drawCar() {
    let img = new Image();
    img.src = "images/car.png";
    this._ctx.drawImage(img, this._x, this._y, this._width, this._height);
  }
}
