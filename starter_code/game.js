// function startGame() {}
class Game {
    constructor() {
        this.car = new Car();
        this.speed = 3000;
        this.obstacleTimer = 0;
        this.obstacles = [];
        this.height = 600;
        this.width = 400;
    }

    start() {
        this.animation();
    }

    animation(timestamp) {
        this.updateEverything(timestamp)
        this.drawAll()
        window.requestAnimationFrame((timestamp) => this.animation(timestamp));
    }
    updateEverything(timestamp) {
        if (this.obstacleTimer < timestamp - this.speed) {
            this.obstacles.push(new Obstacle(this))
            this.obstacleTimer = timestamp
        }

        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].moveObstacle();
        }
    }

    drawAll() {
        this.clearAll();
        drawRoad();
        this.car.drawCar();
        console.log(this.obstacles.length)
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].paintObstacle();
        }
    }

    clearAll() {
        context.clearRect(0, 0, 400, 600);
    }

    resetGame() {
        this.car = new Car();
    }
}

console.log("I am connected")