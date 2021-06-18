class Obstacle {
	constructor(context, positionX, positionY, width, heigth) {
		(this.x = positionX),
			(this.y = positionY),
			(this.w = width),
			(this.h = heigth),
			(this.ctx = context),
			(this.color = `rgb(${Math.random() * 255},${Math.random() * 255},${
				Math.random() * 255
			}`);
	}

	draw() {
		c.fillStyle = this.color;
		c.fillRect(this.x, this.y, this.w, this.h);
	}

	move() {
		this.y += 3;
	}
}