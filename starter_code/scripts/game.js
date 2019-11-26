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
    }

    init() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.x = 0;
        this.y = 0;
        this.start();
        this.createObstacles();
    }

    start() {
        this.drawBackground();
        this.drawMainCharacters();
        setInterval(() => {
            this.clear();
            this.drawBackground();
            this.drawMainCharacters();
            this.car.move();
            for (let i = 0; i < this.obstacles.length; obstacles++) {
                this.obstacles[i].move();
                this.obstacles[i].draw();
                this.car.crashCollision(this.obstacles[i]);
                if (this.obstacles[i].y > 800) {
                    this.obstacles.splice(i, 1);
                }
            }
        }, 1000 / 60);
    }

    createObstacles() {
        if (Math.floor(Math.random() * 25) % 2 === 0) {
            this.obstacles.push(new Obstacle(this));
            console.log("obstacle == ", this.obstacles);
        }

        setTimeout(() => {
            this.createObstacles();
        }, 3000);
    }

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

    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawMainCharacters() {
        this.car.drawComponent("./images/car.png");
    }
}
