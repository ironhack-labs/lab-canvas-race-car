class Game {
	constructor(canvasId) {
		this.canvas = document.getElementById(canvasId);
		this.ctx = this.canvas.getContext("2d");
        this.intervalId = null;
        this.bg = new Background(this.ctx);
	}

    start () {
        this.intervalId = setInterval (() => {
            this.clear();
            this.draw();
        }, 1000 / 60);
    }

    draw () {
        this.bg.draw();
    }

    clear() {
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}
}