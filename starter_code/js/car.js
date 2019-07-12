
class Car {
  constructor(ctx, url) {
      this._ctx = ctx
      this._img = new Image()
      this._img.src = url
      this._carWidth = 50
      this._carHeight = 100 
      this._vel = 15

      this._posX = 220
      this._posY = 500
  }

  drawCar(){
    this._ctx.drawImage(this._img, this._posX, this._posY, this._carWidth, this._carHeight)
  }
  goLeft() {
      this._posX -= this._vel
  }

  goRight() {
      this._posX += this._vel
  }
}
