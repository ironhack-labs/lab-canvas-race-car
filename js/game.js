class Game {
    constructor(ctx) {
        this._ctx = ctx

        this._intervalId = null

        this._bg = new Background(this._ctx)
        this._car = new Car(this._ctx)

        this._tick = 0

        this._obstacles = []

    }

    start() {
       this._intervalId = setInterval(() => {
           this.clear()
           this.draw()
           this.move()
           this.addObstacle()
           this.clearObstacles()
       }, 1000/60)
    }

    clear() {
        this._ctx.clearRect(0,0, this._ctx.canvas.width, this._ctx.canvas.height)

    }

    draw(){
        this._bg.draw()
        this._car.draw()
        this._obstacles.forEach((obs) => {
            obs.draw()
        })   
    }

    move(){
        this._car.move()
        this._obstacles.forEach((obs) => {
            obs.move()
        }) 
    }

    addObstacle() {
        if (this._tick++ === 100) {
            this._tick = 0
            this._obstacles.push(new Obstacle(this._ctx))
        }
    }

    clearObstacles() {
        this._obstacles = this._obstacles.filter((obst) => obst.isVisible())
    }

}