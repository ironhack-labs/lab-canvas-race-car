class Background {
	constructor(image, context, positionX, positionY, width, heigth) {
		(this.x = positionX),
			(this.y = positionY),
			(this.w = width),
			(this.h = heigth);
		this.ctx = context;
		this.image = image;
	}

	draw() {
		this.ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
	}
}
