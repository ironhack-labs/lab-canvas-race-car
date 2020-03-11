class Obstacle {
	constructor(game) {
    this.game = game
		this.context = game.context;
		this.width = 3;
		this.height = 20;
		this.x = Math.floor(Math.random() * this.game.width);
		this.y = -20
		this.speed = 3;
	}
	draw () {
		this.context.save();
		this.context.fillStyle = "red";
		this.context.fillRect(this.x, this.y, this.width, this.height);
		this.context.restore();
	}
	update() {
		this.y += this.speed;
	}
}