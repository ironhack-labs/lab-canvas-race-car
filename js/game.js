class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background(this.ctx)
        this.obstacles = []
        this.player = new Player(ctx);

        this.intervalId = null;
        this.counter = 0;
        this.score = 0;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollisions();
            this.counter++;

            if (this.counter % 250 === 0) {
                this.addObstacle();
            }

            if (this.counter % 10 === 0) {
                this.score++;
            }


        }, 1000 / 60)
    }

    draw() {
        this.background.draw();

        this.obstacles.forEach((obs) => {
            obs.draw();
        });
        this.player.draw();
        this.drawScore();
    }

    move() {
        this.background.move();
        this.player.move();
        this.obstacles.forEach((obs) => {
            obs.move();
        });
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.x > -obstacle.width);
    }

    addObstacle() {
        const randomWidth = Math.floor(Math.random() * 250) + 10;
        const height = 30;
        const randomX = Math.floor(Math.random() * (this.ctx.canvas.width - randomWidth));
        const color = 'rgba(250,250,250,0.1)';
        const stroke = 'rgba(250,250,250,0.5)';
        const newObstacle = new Obstacle(this.ctx, randomX, 0, randomWidth, height, color, stroke);
        this.obstacles.push(newObstacle);
    }

    checkCollisions() {
        this.obstacles.forEach((obs) => {
            if (this.player.x + this.player.width >= obs.x &&
                this.player.x <= obs.x + obs.width &&
                this.player.y + this.player.height >= obs.y &&
                this.player.y <= obs.y + obs.height) {
                this.gameOver();
            }
        });

    }

    gameOver() {
        clearInterval(this.intervalId);
        setTimeout(() => {
            this.clear();
            this.ctx.font = "bolder 30px Arial";
            this.ctx.fillStyle = "black";
            this.ctx.fillText(
                "El Impero ha vencido",
                this.ctx.canvas.width / 2 - 60,
                this.ctx.canvas.height / 2 - 100,
                400);
            this.ctx.font = "18px Arial";
            this.ctx.fillText(
                `Los rebeldes han acabado con: ${this.score} cazas imperiales`,
                this.ctx.canvas.width / 2 - 80,
                this.ctx.canvas.height / 2 - 50);

        }, 0);
    }
    drawScore() {
        this.ctx.font = "22px Arial";
        this.ctx.fillStyle = "white";
        this.ctx.fillText(`Score: ${this.score}`, 10, 30);

    }
}
