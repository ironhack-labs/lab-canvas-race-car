class Court {
  constructor(x, y, width, height, color, ctx) {
    this._x = x
    this._y = y
    this._width = width
    this._height = height
    this._color = color

    //this._ctx = ctx //ctx de Teo, pero hace lo mismo sin él
  }
  draw() {
    this.fillStyle = this.color
    this.fillRect = (this.x, this.y, this.width, this.height)
    console.log("try") //Esto sale, el código llega, pero no hace nada
  }
}
