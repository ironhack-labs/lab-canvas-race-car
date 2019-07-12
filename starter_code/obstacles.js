class Obstacle {
    constructor(ctx, x, y, color, width, height) {
    this._ctx = ctx
    this._x = x
    this._y = y
    this._color = color
    this._width = width
    this._height = height
    }


  draw() {
    this._ctx.fillStyle = this._color;
    console.log(this._y)
    this._ctx.fillRect(this._x, this._y, this._width, this._height);
  }

    moveObstacle() {
        this._y += 0.001
    }
    
}