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
      }, 1000 / 60)
      this._initKeyEvents()
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

    _initKeyEvents() {
        document.addEventListener('keydown', event => {
            switch (event.keyCode) {
                case RIGHT_KEY:
                    console.log('right key down')
                    this._car.vx = 0
                    this._car.vx += this._car.ax
                    break
                case LEFT_KEY:
                    console.log('left key down')
                    this._car.vx = 0
                    this._car.vx += -this._car.ax
                    break
            }
        })

        document.addEventListener('keyup', event => {
            switch (event.keyCode) {
                case RIGHT_KEY:
                    console.log('right key up')
                    this._car.vx = 0
                    break
                case LEFT_KEY:
                    console.log('left key up')
                    this._car.vx = 0
                    break
            }
        })
    }
}