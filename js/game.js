class Game {
    constructor(ctx) {
        this._ctx = ctx

        this._intervalId = null

        this._bg = new Background(this._ctx)
        this._car = new Car(this._ctx)

        this._tick = 0

        this._obstacles = []

        this._score = 0

    }

    start() {
       this._intervalId = setInterval(() => {
           this.clear()
           this.draw()
           this.move()
           this.addObstacle()
           this.score()
           this.clearObstacles()
           this.checkCollisions()
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

    checkCollisions() {
        const c = this._car
        this._obstacles.forEach(o => {
            const collisionX = c.x < o.x + o.w && c.x + c.w > o.x
            const collisionY = c.y < o.y + o.h
            if (collisionY && collisionX) {
                this.gameOver()
            }
        })

    }

    gameOver() {
        clearInterval(this._intervalId)
        this._ctx.font = "30px Comic Sans MS";
        this._ctx.textAlign = "center";
        ctx.fillStyle = '#000';
        this._ctx.fillText(
            "GAME OVER",
            this._ctx.canvas.width / 2,
            this._ctx.canvas.height / 2
        );
        
        this._ctx.fillText(
            `YOUR FINAL SCORE: ${this._score}`,
            this._ctx.canvas.width / 2,
            400
          );
        
    }

    score() {
        this._obstacles.forEach((obs) => {
            if (obs.y > this._car.y + this._car.h) {
                this._score ++
            }
        }) 
    }

}