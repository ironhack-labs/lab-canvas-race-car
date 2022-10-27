class Obstacle {
	constructor(ctx, canvasSize) {
		this.ctx = ctx;
		this.obsSizew = Math.floor(Math.random() * 100) + 100;
		this.obsSizeh = 30;
		this.obsPosx = Math.floor(Math.random() * 180) + 100;
		this.obsPosy = 0;
		this.obsSpeed = 5;
		this.obsColor = "darkred";

		this.obsSpeed = 10;
		this.canvasSize = canvasSize;
	}

	drawObstacle() {
		this.ctx.fillStyle = this.obsColor;
		this.ctx.fillRect(this.obsPosx, this.obsPosy, this.obsSizew, this.obsSizeh);
		this.obstacleMoves();
	}

	obstacleMoves() {
		this.obsPosy += this.obsSpeed;
	}
}
