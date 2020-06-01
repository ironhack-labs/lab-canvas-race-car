class Game {
    constructor(ctx) {
        this._ctx = ctx;
        this._intervalId = null;
        this.tick = 0;

        this._bg = new Background(ctx)
        this._car = new Car(ctx)
        this._obstacles = []
    }

    start() {
        this._intervalId = setInterval(() => {
          this._clear()
          this._draw()
          this._move()
          this._addObstacle()
          this._clearObstacles()
          this.tick++
          if (this.tick >= 10000) {
            this.tick = 0
          }
        }, 1000 / 60);
      }
    
      _clearObstacles () {
        this._obstacles = this._obstacles.filter(obstacle => obstacle.isVisible())
      }

      _addObstacle() {
        if (this.tick % 100) return
        this._obstacles.push(new Obstacle(this._ctx))
      }

      _clear() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
      }
    
      _draw() {
        this._bg.draw()
        this._car.draw()
        this._obstacles.forEach(obstacle => obstacle.draw())
      }
    
      _move() {
        this._bg.move()
        this._car.move()
        this._obstacles.forEach(obstacle => obstacle.move())
        }
}


