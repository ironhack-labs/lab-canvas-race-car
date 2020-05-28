class Game {
    constructor(ctx) {
        this.ctx = ctx
        this.w = ctx.canvas.width
        this.h = ctx.canvas.height

        this.road = new Road (ctx)
        this.car = new Car (ctx)

        this.count = 0
        this.spaceObstacles = 400
        this.obstacles = []

        this.difficulty = 1

        this.score = 0

        this.intervalId = null
    }

    draw() {
        
        this.intervalId = setInterval(()=>{
            if (this._checkCrash()) {
                this._clearRoad()
                this._drawElements()
                this._drawScore()
                this._createObstacles()
            } else {
                clearInterval(this.intervalId)
                this._gameOver()
            } 
        }, 1000 / 60)
    }

    startGame() {
        this.draw()
    }

    move(direction) {
        this.car.move(direction)
    }

    _drawElements() {
        this.road.draw()
        this.car.draw()
        this.obstacles.forEach(obs => obs.draw());
    }

    _createObstacles() {
        if (!(this.count % this.spaceObstacles)) {
            this.obstacles.push(new Obstacle(ctx))
            this.score++
        } 
        if (this.count > 0 && !(this.count % 1000)) {
            this.spaceObstacles /= 2
        }
        this.count++
    }

    _clearRoad() {
        this.ctx.clearRect(0, 0, this.w, this.h)
    }

    _checkCrash() {
        let noCrash = true
        this.obstacles.forEach(obs => {
            if (this.car.y == (obs.y + obs.h)) {
                if (this.car.x >= obs.x && this.car.x <= obs.x + obs.w) {
                    noCrash = false
                } else if ((this.car.x  + this.car.w) >= obs.x && (this.car.x  + this.car.w) <= obs.x + obs.w ) {
                    noCrash = false
                }
            }
        })
        return noCrash
    }

    _drawScore() {
        this.ctx.fillStyle = 'white'
        this.ctx.font = '14px Arial'
        this.ctx.fillText(`Score: ${this.score}`, 60, 20, 100)
    }

    _gameOver() {
        this.ctx.clearRect(0, 0, this.w, this.h)
        this.ctx.fillStyle = 'black'
        this.ctx.fillRect(0, 0, this.w, this.h)

        this.ctx.fillStyle = 'red'
        this.ctx.textAlign = 'center'
        this.ctx.font = '48px Arial'
        this.ctx.fillText('GAME OVER!', this.w / 2, this.h / 2, 400)

        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center'
        this.ctx.font = '48px Arial'
        this.ctx.fillText(`Your final score: ${this.score}`, this.w / 2, this.h / 2 + 40, 400)
    }
}