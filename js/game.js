class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background(ctx);
        this.car = new Car(ctx, 225, 550);
        this.obtacle = new Obstacle(ctx, 150, 0);
        this.interval = undefined;
        this.obstacleArray = [];
        this.obstacleDrawCount = 0;
        this.points = 0;
    }

    start() {
        this.setListeners();
        this.interval = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            this.checkCollisions();
            this.obstacleDrawCount++

            if (this.obstacleDrawCount % PIPE_FRAMES === 0) {
                this.addObstacles();
                this.obstacleDrawCount = 0;
            }
        }, 1000 / 60)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.obstacleArray = this.obstacleArray.filter(obstacle => obstacle.y <= this.ctx.canvas.height);
    }

    draw() {
        this.background.draw();
        this.car.draw();
        this.obstacleArray.forEach(obstacle => obstacle.draw());
        this.ctx.save();
        this.ctx.font = '20px Arial';
        this.ctx.fillStyle = 'white';
        this.ctx.fillText(`Score: ${this.points}`, 110, 30);
        this.ctx.restore();
    }

    move() {
        this.background.move();
        this.car.move();
        this.obstacleArray.forEach(obstacle => obstacle.move(this.obstacleArray.length));
    }

    addObstacles() {
        let x = Math.floor(Math.random() * 500);
        let width = this.obtacle.createObst(this.car.w);
        this.obstacleArray.push(new Obstacle(this.ctx, width, x));
        this.points += 1;
    }

    checkCollisions() {
        if (this.obstacleArray.some(obstacle => this.car.collidesWith(obstacle))) {
            this.gameOver();
        }
    }

    gameOver() {
        clearInterval(this.interval);
        this.ctx.save();
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.font = '50px Verdana';
        this.ctx.fillStyle = 'white'
        this.ctx.textAlign = 'center';
        this.ctx.fillText(
            'Game Over',
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2 - 50
        )
        this.ctx.font = '25px Verdana';
        this.ctx.fillStyle = '#870007';
        this.ctx.fillText(
            `Your final score:`,
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2
        )
        this.ctx.fillText(
            this.points,
            this.ctx.canvas.width / 2,
            this.ctx.canvas.height / 2 + 40
        )
        this.ctx.restore();
    }

    setListeners() {
        document.onkeydown = (event) => {
            switch (event.keyCode) {
                case RIGHT:
                    this.car.vx = 5;
                    break;
                case LEFT:
                    this.car.vx = -5;
                    break;
            }
        }

        document.onkeyup = (event) => {
            if (event.keyCode) {
                this.car.vx = 0
            }
        }
    }
}