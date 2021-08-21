class Animal {
	constructor(ctx, width, height, canvasSize, position, speed) {
		this.ctx = ctx;
		this.obstacleSize = { w: width, h: height };
		this.canvasSize = canvasSize;
		this.obstaclePosition = { x: -100, y: position };
		this.randomImage = Math.trunc(Math.random() * (4 - 1) + 1);
		this.speed = speed;
		this.imageInstance = new Image();
		this.imageInstance.src = `../images/rotatedCars/car${this.randomImage}.png`;
	}

	draw() {
		this.ctx.drawImage(
			this.imageInstance,
			this.obstaclePosition.x,
			this.obstaclePosition.y,
			this.obstacleSize.w,
			this.obstacleSize.h
		);

		this.move();
	}

	move() {
		this.obstaclePosition.y += this.speed;
	}
}
