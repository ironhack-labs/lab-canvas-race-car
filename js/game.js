class Game {
	constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
		this.height = canvas.height;
    this.background = new Background (this)
		this.player = new Player (this)
		this.player.setControls();
    this.obstacle = []
    this.animationId;
		this.frame = 0;
		this.gameON = true;
  }
  start() {
    this.animation()
	}
	draw() {
		this.context.clearRect(0, 0, this.width, this.height)
		this.player.draw();
		this.background.draw();
		for (let i = 0; i < this.obstacle.length; i++) {
			this.obstacle[i].draw();
	 }
	}	 
  update() {
		this.frame++;
		this.player.update();
		if (this.frame % 100 === 0) {
			this.obstacle.push(new Obstacle(this));
		}
		for (let i = 0; i < this.obstacle.length; i++) {
			this.obstacle[i].update();
			if (this.obstacle[i].y + this.obstacle[i].height < 0) {
				this.obstacle.shift();
			}
		}
	}
	gameOver() {
		// window.cancelAnimationFrame(this.animationId);
		this.context.fillStyle = "red";
		this.context.fillText("GAME OVER!", this.width / 2, this.height / 2);
	}
  animation() {
		this.draw();
		this.player.draw();
		this.update();
		this.animationId = window.requestAnimationFrame(() => {
			if (this.gameON) {
				this.animation();
			} else {
				this.gameOver();
			}
    })
	}
}


 

