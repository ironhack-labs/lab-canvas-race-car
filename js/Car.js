class Car {
	constructor(ctx, width, height, canvasSize) {
		this.ctx = ctx;
		this.carSize = { w: width, h: height };
		this.canvasSize = canvasSize;
		this.image = undefined;
		this.carPosition = {
			x: this.canvasSize.w / 2 - 50,
			y: this.canvasSize.h - 140
		};
		this.moveLeft = false;
		this.moveRight = false;
		this.moveUp = false;
		this.moveDown = false;
		this.moveLeftGamer = false;
		this.moveRightGamer = false;
		this.moveUpGamer = false;
		this.moveDownGamer = false;
		this.image = new Image();
		this.image.src = `./images/car.png`;
	}

	drawCar() {
		//Primer parametro Image, posicion X, posicion Y, dimension coche W, dimension coche H
		this.ctx.drawImage(this.image, this.carPosition.x, this.carPosition.y, this.carSize.w, this.carSize.h);
		//console.log(this.ctx.drawImage(this.carImage, 20, 10, this.width, this.height));
	}

	move() {
		(this.carPosition.x <= this.canvasSize.w - 130 && this.moveRight) ||
		(this.carPosition.x <= this.canvasSize.w - 130 && this.moveRightGamer)
			? (this.carPosition.x += 4)
			: null;
		(this.carPosition.x >= 30 && this.moveLeft) || (this.carPosition.x >= 30 && this.moveLeftGamer)
			? (this.carPosition.x -= 4)
			: null;

		//testing with up and down arrows
		(this.carPosition.y <= this.canvasSize.h - 130 && this.moveDown) ||
		(this.carPosition.y <= this.canvasSize.h - 130 && this.moveDownGamer)
			? (this.carPosition.y += 4)
			: null;
		(this.carPosition.y >= 30 && this.moveUp) || (this.carPosition.y >= 30 && this.moveUpGamer)
			? (this.carPosition.y -= 4)
			: null;
	}

	// moveRight() {
	// 	this.carPosition.x += 10;
	// }

	// moveLeft() {
	// 	this.carPosition.x -= 10;
	// }
}
