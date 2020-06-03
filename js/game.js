class Game {
    constructor(ctx) {
        this._ctx = ctx

        this._intervalId = null

        this._bg = new Background(ctx)
        this._car = new Car(ctx)
        this.tick = 0

        this.points = -2

        this.obstacles = []
    }

    start() {
        this._intervalId = setInterval(() => {
            this._clear()
            this._draw()
            this._move()
            this._addObstacle()
            this._clearObstacles()
            this._checkCollisions()
            if (this.tick++ >= 10000) {
                this.tick = 0;
            }
        }, 1000 / 60);
    }

    _clearObstacles() {
        this.obstacles = this.obstacles.filter(o => o.isVisible())

    }

    _addObstacle() {
        if (this.tick % 50 === 0) {
            this.obstacles.push(new Obstacles(this._ctx))
            this._pointsCount()
        }
    }

    _pointsCount() {
        this.points++
    }

    _clear() {
        this._ctx.clearRect(0, 0, this._ctx.canvas.width, this._ctx.canvas.height)
    }

    _draw() {
        this._bg.draw()
        this._car.draw()
        this.obstacles.forEach(e => e.draw())
    }

    _move() {
        this._bg.move()
        this._car.move()
        this.obstacles.forEach(e => e.move())
    }

    _checkCollisions() {
        this.obstacles.forEach(o => {
            const colY = this._car.y < o._y + o._h && this._car.y + this._car.h > o._y
            const colX = this._car.x < o._x + o._w && this._car.x + this._car.w > o._x

            if (colY && colX) {
                this._gameOver()
            }
        })
    }

    _gameOver() {
        clearInterval(this._intervalId)

        this._ctx.font = "40px Comic Sans MS";
        this._ctx.textAlign = "center";
        this._ctx.fillText(
            `GAME OVER`,
            this._ctx.canvas.width / 2,
            this._ctx.canvas.height / 2
        );
        this._ctx.font = "20px Comic Sans MS";
        this._ctx.textAlign = "center";
        this._ctx.fillText(
            `Your Score: ${this.points}`,
            this._ctx.canvas.width / 2,
            this._ctx.canvas.height / 2 + 30
        );


    }
}