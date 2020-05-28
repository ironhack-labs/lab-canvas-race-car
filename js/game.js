class Game {
    constructor(ctx) {
        this.ctx = ctx

        this.road = new Road (ctx)
        this.car = new Car (ctx)

        this.count = 0
        this.spaceObstacles = 400
        this.obstacles = []

        this.difficulty = 1

        
    }

    draw() {
        setInterval(()=>{
            this._clearRoad()
            this._drawElements()
            if (!(this.count % this.spaceObstacles)) {
                this.obstacles.push(new Obstacle(ctx))
            } 
            if (this.count > 0 && !(this.count % 1000)) {
                this.spaceObstacles /= 2
            }
            this.count++

            
            
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

    _clearRoad() {
        this.ctx.clearRect(0, 0, this.w, this.h)
    }
}