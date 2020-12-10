class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.background = new Background(ctx);
        this.car = new Car(ctx);
        this.interval = undefined;
        // this.obstacles = [ new Obstacles(ctx) ]
    }

    start() {
        this.setListeners();

        this.inverval = setInterval(() => {
            this.clear()
            this.draw()
            this.move()
        }, 1000 / 60)
    }

    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    draw() {
        this.background.draw();
        this.car.draw();
        /* this.obstacles.forEach((obstacle) => {
            obstacle.draw()
        }) */
    }

    move() {
        this.car.move();
    }

    setListeners() {
        document.onkeydown = (event) => {
            switch(event.keyCode){
                case 37:
                    this.car.vx = -10;
                    break;
                case 39:
                    this.car.vx = 10;
                    break;
            }
        }
        document.onkeyup = () => {
            this.car.vx = 0;
        }
    }
}