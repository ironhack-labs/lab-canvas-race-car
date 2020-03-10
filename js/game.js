class Game {
	constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
		this.height = canvas.height;
    this.background = new Background (this)
    this.player = new Player (this)
    this.obstacle = []
    this.animationId;
    this.frame = 0;
  }
  start() {
    this.background.draw()
    this.player.draw()
    this.animation
  }
  update() {
		this.frame++;
		this.player.update();
		if (this.frame % 100 === 0) {
			this.obstacle.push(new Obstacle(this));
		}
		for (let i = 0; i < this.obstacle.length; i++) {
			this.obstacle[i].update();
			if (this.obstacle[i].x + this.obstacle[i].width < 0) {
				this.obstacle.shift();
			}
			if (this.player.crashWith(this.obstacle[i])) {
				this.gameON = false;
      }
    }
  }
  animation() {
		this.draw();
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




