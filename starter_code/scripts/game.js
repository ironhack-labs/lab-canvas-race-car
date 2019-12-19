class Game {
    constructor() {
        this.canvas = undefined;
        this.ctx = undefined;
        this.car = new Player(this, 200, 550, 100, 150);
        this.obstacles = [];
        this.background = undefined;
        this.score = 0;
        this.backgroundImg = new Image();
        this.x = undefined;
        this.y = undefined;
        this.width = 500;
        this.height = 700;
        this.score = 0;
        this.interval;
    }

    // initiates the game
    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
    }

    // starts and loops the game
    start() {
        this.drawBackground();
        this.drawCar();
        this.createObstacles();
        this.interval = setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawCar();
            this.car.move();
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].draw();
                this.obstacles[i].move();
                if(this.car.detectCollision(this.obstacles[i])){
                    clearInterval(this.interval);
                    alert(`YOU CRASHED! Final Score: ${this.score}`);
                }
                if (this.obstacles[i].y > 720) {
                    this.obstacles.splice(i, 1);
                    this.score++;
                    document.getElementById('score').innerHTML = `Score: ${this.score}`;
                }
            }
        }, 1000 / 60);
    }

    // creates the objects and pushes them into an array
    createObstacles() {
        if (Math.floor(Math.random() * 24) % 2 === 0) {
            this.obstacles.push(new Obstacle(this));
            console.log("obstacle == ", this.obstacles);
        }

        setTimeout(() => {
            this.createObstacles();
        }, 2500);
    }

    // draws the background image to the canvas
    drawBackground() {
        this.backgroundImg.src = "./images/road.png";
        this.ctx.drawImage(
            this.backgroundImg,
            this.x,
            this.y,
            this.width,
            this.height
        );
    }

    // clears the canvas
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // draws the car to the canvas
    drawCar() {
        this.car.drawComponent("./images/car.png");
    }
}