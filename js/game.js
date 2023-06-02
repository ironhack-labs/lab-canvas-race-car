class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.background = new Background(this.ctx)
        this.obstacles = []
        this.player = new Player(ctx);

        this.intervalId = null;
        this.counter = 0;
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.move();
            this.draw();
            this.checkCollisions();
            this.counter++;

            if (this.counter % 190 === 0) {
                this.addObstacle();
            }


        }, 1000 / 60)
    }

    draw() {
        this.background.draw();

        this.obstacles.forEach((obs) => {
            obs.draw();
        });
        this.player.draw();
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
        const randomWidth = Math.floor(Math.random() * 250) + 50;
        const height = 30;
        const randomX = Math.floor(Math.random() * (this.ctx.canvas.width - randomWidth));
        const color = "brown";
        const newObstacle = new Obstacle(this.ctx, randomX, 0, randomWidth, height, color);
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

    gameOver(){
        clearInterval(this.intervalId);
    }

}
