class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.w = this.ctx.canvas.width;
        this.h = this.ctx.canvas.heigth;

        this.background = new Background(ctx);
        this.car = new Car(ctx);
        this.obstacles = [];
        
        this.intervalId = null;
        this.ticks = 0;
    }

    start() {
        this.intervalID = setInterval(() => {
            this._newObstacle();
            this.clear();
            this.draw();
            this.move();

            this.ticks++;
            if (this.ticks >= 10000) this.ticks = 0;
        }, 1000/60);
    }

    draw() {
        this.background.draw();
        this.car.draw() ;
        this.obstacles.forEach(o => o.draw());
    }

    _newObstacle() {
        if (this.ticks % 100 === 0) this.obstacles.push(new Obstacle(this.ctx))
    }

    clear() {
        this.ctx.clearRect(0, 0, this.w, this.h);
        this._clearObstacles()
        
    }

    _clearObstacles() {
        this.obstacles.filter(o =>(o.y <= this.h));
        console.log(this.obstacles.length)
    }

    move() {
        this.background.move()
        this.obstacles.forEach(o => o.move());
        this.car.move()
    }
}