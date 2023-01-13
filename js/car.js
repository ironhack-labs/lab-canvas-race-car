class Car {
	constructor() {
		this.width = 50;
		this.height = 100;
		this.x = 225;
		this.y = 400;
		this.img = new Image();
		this.img.src = 'images/car.png';
		this.speed = 10;
	}

	drawCar() {
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
	}

	clear() {
		ctx.clearRect(this.x, this.y, this.width, this.height);
	}

	moveLeft() {
		this.x -= this.speed;
	}

	moveRight() {
		if (this.x >= 50) {
		}
		this.x += this.speed;
	}

	keyControls() {
		document.addEventListener('keydown', (e) => {
			switch (e.key) {
				case 'ArrowRight':
					this.moveRight();
					break;

				case 'ArrowLeft':
					this.moveLeft();
					break;
			}
		});
	}
}
