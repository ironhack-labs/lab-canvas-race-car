class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");
        this.player = new Player(this.ctx);
        this.background = new Background(this.ctx);
        this.intervalId = null;
        this.obstacles = [];
        this.tick = 0;
    }

    start() {
        this.intervalId = setInterval (() => {
            this.clear();
            this.move();
            this.draw();
            //this.checkCollisions();
            this.tick++;
            if (this.tick % 80 === 0) {
                this.addObstacle();
            }
        }, 1000 / 60);
    }

    draw() {
        this.background.draw();
        this.player.draw();
        this.obstacles.forEach(obstacle => {
            obstacle.draw();
        });
    }

    move() {
        this.background.move();
        this.player.move();
        this.obstacles.forEach(obstacle => {
            obstacle.move();
        });
    }

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		//this.obstacles = this.obstacles.filter(obstacle => obstacle.y < this.canvas.height);
    }

    addObstacle() {
        const randomX = Math.random() * (this.ctx.canvas.width - 200) + 50;
        this.obstacles.push(new Obstacle(this.ctx, randomX, -100, 100))
    }

    checkCollisions() {
		if (this.obstacles.some(obstacle => this.player.isColliding(obstacle))) {
			this.gameOver();
		}
	}


}
