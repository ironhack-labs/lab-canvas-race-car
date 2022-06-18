class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background(this.ctx);
        this.car = new Car(this.ctx);
        this.obstacle = [];
        this.tickObstacle = 0
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.checkCollisions()
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
        this.obstacle.forEach(obs => obs.draw())
    }

    move() {
        this.background.move()
        this.car.move()
        this.obstacles.forEach(obs => obs.move())
    }

    addObstacle() {
        this.obstacle.push(new Obstacle(this.ctx))
    }

    checkCollisions() {
        let carVsObs = this.obstacle.find(obs => obs.collide(this.car))

        if (carVsObs || this.car.y + this.car.h >= this.ctx.canvas.height) {
            this.gameOver()
        }
    }

    gameOver() {
        clearInterval(this.intervalId);
        this.intervalId = null
        this.ctx.font = "30px Arial";
        this.ctx.fillStyle = "black";
        this.ctx.textAlign = "center";
        this.ctx.fillText("GAME OVER", this.ctx.canvas.width / 2, this.ctx.canvas.height / 2);
    }
} 