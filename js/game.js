class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background(this.ctx);
        this.car = new Car(this.ctx);
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.move()
            this.tickObstacle++;

            if (this.tickObstacle % 100 === 0) {
                this.addObstacle()
            }
        }, 1000 / 60)
    }
    
    clear() {
        this.ctx.clearRect(
            0,
            0,
            this.ctx.canvas.width,
            this.ctx.canvas.height
        )
    }

    draw() {
        this.background.draw();
        this.car.draw();
    }

    move() {
        this.background.move()
        this.car.move()

    }
}