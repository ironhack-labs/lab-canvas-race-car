class Obstacle {
	constructor(canvasContext, positionX, positionY, width, height, speed) {
		(this.ctx = canvasContext),
			(this.x = positionX),
			(this.y = positionY),
			(this.width = width),
			(this.height = height),
			(this.color = 'black');
      this.speed = speed
	}

	draw() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	move() {
		this.y += this.speed;
	}
}