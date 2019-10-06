class Game {
    constructor (ctx){
        this.ctx = ctx;
        this.bg = new Road(ctx);
        this.car = new Car(ctx);

        this.obstacles = [];
        this.intervalId = null;
        this.tick = 0
    }

    _run() {
        this.intervalId = setInterval(() => {
            this._clear();
            this._draw();
            this._move();
            this._addObstacle()
            this._checkCollisions()
            this._clearObstacles()
      
            if (this.tick++ > 10000) {
              this.tick = 0
              debugger
            }
        }, 1000 / 60);
    }

    _clearObstacles() {
        this.obstacles = this.obstacles.filter(o => {
          return o.isVisible()
        })
      }

    _clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }

    _draw() {
        this.bg.draw();
        this.car.draw();
        this.obstacles.forEach(o => o.draw())
    }

    _addObstacle() {
      if(this.tick % 200 === 0){
        this.obstacles.push(new Obstacle(this.ctx))
      }
    }

    _move(){
        this.bg.move();
        this.car.move();
        this.obstacles.forEach(o => o.move())
    }

    _checkCollisions() {
      // TODO:
      const col = this.obstacles.some(o => {
        return o.collide(this.car)
      })

      if (col) {
        this._gameOver()
      }
    }

    _gameOver() {
      clearInterval(this.intervalId)
      this.ctx.fillStyle = "black"
      this.ctx.font = "40px Comic Sans MS";
      this.ctx.textAlign = "center";
      this.ctx.fillText(
        "GAME OVER",
        this.ctx.canvas.width / 2,
        this.ctx.canvas.height / 2
      );
    }
}