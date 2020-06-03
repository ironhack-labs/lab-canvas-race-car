class Game {
    constructor(canvasElement) {
		this.canvas = canvasElement;
		this.ctx = this.canvas.getContext("2d");
        this.background = new Background(ctx)
        this.racecar = new Car(ctx)
        this.obstacle = []
        this.tick = 0
        this.intervalId = null;

	}
	
    start() {
        this.intervalId = setInterval(() => {
            this.clear();
            this.draw();
            this.move();
            this.addObstacle()
        }, 1000 / 60)
    }

    addObstacle() {
        if (this.tick++ === 100) {
            this.tick = 0
          this.obstacle.push(new Obstacle(ctx))
        }
      }

    draw() {
        this.background.draw()
        this.racecar.draw()
        this.obstacle.forEach(e => {
            e.draw()
        })
    }
    clear() {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    }

    move() {
        this.racecar.move()
        this.obstacle.forEach(e => {
            e.move()
        })
    }
}