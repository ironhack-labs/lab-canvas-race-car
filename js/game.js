class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background (this.ctx);
        this.car = new Car (this.ctx);
        this.obstacles = [];
        this.intervalId = null;
        this.tickObstacles = 0;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.checkCollisions()
            this.move()
            this.tickObstacles++;

            if (this.tickObstacles % 100 === 0) {
                addObstacle()
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
        this.obstacles.forEach(obs => obs.draw());
    }

    move() {
        this.background.move()
        this.car.move()
        this.obstacles.forEach(obs => obs.move());
    }

    addObstacle() {
        this.obstacles.push(new Obstacle(this.ctx))
    }

    checkCollisions() {
        let carVsObs = this.obstacles.find(obs => obs.collide(this.car))

        if (carVsObs || this.car.y + this.car.h >= this.ctx.canvas.height) {
            this.gameOver()
        }

        console.log(carVsObs)
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