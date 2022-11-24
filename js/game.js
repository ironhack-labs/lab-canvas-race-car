class Game {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
        this.intervalId = null;
        this.bg = new Background(this.ctx);
        this.car = new Car(this.ctx, this.canvas.width / 2 - 27, this.canvas.height - 120)
	}

    start () {
        this.intervalId = setInterval (() => {
            this.clear();
            this.draw();
            this.move();
        }, 1000 / 60);
    }

    draw () {
        this.bg.draw();
        this.car.draw();
    }

    move () {
        this.car.move();
    }

    clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}