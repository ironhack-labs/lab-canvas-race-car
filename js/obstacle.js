class Obstacle {
    constructor() {
        this.x = this.getRandomX();
        this.y = 0;
        this.width = this.getRandomSize();
        this.height = 20;
        this.down = 5;
        this.draw();
    }
    getRandomX() {
        return Math.floor(Math.random() * (250));
    }
    getRandomSize() {
        return Math.floor(Math.random() * (150) + 100);
    }
    draw() {
        game.context.fillStyle = 'aqua';
        game.context.fillRect(this.x, this.y, this.width, this.height);
    }
    move() {
        this.y += this.down;
        if (this.x < car.x + car.width && this.x + this.width > car.x && this.y < car.y + car.height && this.y + this.height > car.y) {
            clearInterval(canvasUpdate);
            clearInterval(obstacles);
            clearInterval(points);
            game.gameOver();
        }
        obstacleArray = obstacleArray.filter((obstacle) => {
            return obstacle.y < game.canvas.height;
        })
    }
}