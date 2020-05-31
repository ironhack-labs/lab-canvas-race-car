class Game {
    constructor (ctx) {
        this._ctx = ctx
        this._idInterval = null
        this._bg = new BackgroundGame (ctx)
        this._car = new Car (ctx)
        this._score = new Score (ctx)
        this.frameNumber = 0
        this._obstacles = []
        this._speed = 0
        this._intervalObstacles = 150
    }

    start() {
        this._idInterval = setInterval(() => {
            this._clear()
            this._draw()
            this._move()
            this._collision()
        }, 1000/60);
    }

    _stop() {
       clearInterval(this._idInterval)
    }


    _clear() {
        this._ctx.clearRect(0 , 0, this._ctx.canvas.width, this._ctx.canvas.height)
    }

    _draw() {
        this.frameNumber += 1
        this._bg.draw()
        this._car.draw()
        if (this._everyinterval(this._intervalObstacles)) {
            this._addObstacle()
            this._increaseSpeed()
        }
       this._obstacles.forEach(obstacle => obstacle.draw())
       this._score.draw(this.frameNumber)
       console.log(this._obstacles)
       
    }

    _move() {
        this._bg.move()
        this._car.move()
        this._obstacles.forEach(obstacle => obstacle.move())
        this._obstacles = this._obstacles.filter(obstacle => obstacle.y < this._ctx.canvas.height)
    }

    _collision() {
        this._obstacles.forEach (obstacle => {
            if (!obstacle.collision(this._car)) {
                this._stop()
                this._clear()
                this._score.scoreFinal()
            }
            
        })
    }


    _addObstacle() {
        const maxHeight = this._ctx.canvas.height * 0.60
        const minHeight = this._ctx.canvas.height * 0.35
        const minGap = 40
        const maxGap = 50
        let x
        let xSize;
        const color = this._randomRgb()
        const gap = Math.floor(Math.random() * (maxGap -  minGap + 1) + minGap);

        if (gap % 2) {
            x = 0
            xSize = Math.floor( Math.random() * ((maxHeight - gap) - minHeight) + minHeight)
        } else {
            x =  Math.floor( Math.random() * (minHeight  - (gap * 3)) + (gap * 3))
            xSize = Math.floor( Math.random() * (this._ctx.canvas.height - x) + x)
        }
        this._obstacles.push (new Obstacles (this._ctx, x, xSize, this._speed, color))

    }

    _increaseSpeed() {
        this._speed += 1
        this._bg.vy += 1
        this._obstacles.forEach (obstacle => obstacle.vy += 1)
        this._intervalObstacles -= 2
    }


    _everyinterval (n) {
        return this.frameNumber % n === 0
    }

    _randomRgb() {
        const r = this._randomColor()
        const g = this._randomColor()
        const b = this._randomColor()
    
        return `rgb(${r}, ${g}, ${b})`
      }
    _randomColor() {
        return Math.random() * 255;
    }

}