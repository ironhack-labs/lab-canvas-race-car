class Game {
    constructor(ctx) {
      this._ctx = ctx
  
      this._intervalId = null
  
      this._road = new Road(ctx)
      this._car = new Car(ctx)
    }
  
    start() {
      this._intervalId = setInterval(() => {
        this._clear()
        this._draw()
        this._move()
      }, 1000 / 60);
    }
  
    _clear() {
      this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
    }
  
    _draw() {
      this._road.draw()
      this._car.draw()
    }
  
    _move() {
      this._road.move()
      this._car.move()
    }
}