class Game {
    constructor (ctx) {
        this.ctx = ctx;
        this.background = new Background(ctx);
        this.car = new Car(ctx);
        this.obstacles = [];
        this.tick = 0;
        this.intervalId = null;
        
    }

    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            this.addObstacle();

        },1000 / 60)
    }

    draw() {
        this.background.draw();
        this.car.draw();
        this.obstacles.forEach(obst => {
            obst.draw();
        });
    }

    move() {
        this.car.move();
        this.obstacles.forEach(obst => {
            obst.move();
        });
    }

    addObstacle() {
        if (this.tick++ === 150) {
            this.tick = 0;
            this.obstacles.push(new Obstacle(ctx))
        }
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
    }
}