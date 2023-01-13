class Block {
	constructor() {
		this.width = Math.floor(Math.random() * (300 - 100) + 100);
		this.height = 30;
		this.x = Math.floor(Math.random() * (400 - this.width) + 50);
		this.y = 0;
	}

	draw() {
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	update() {
		ctx.fillStyle = 'red';
		ctx.fillRect(this.x, this.y, this.width, this.height);
		this.y += 3;
	}

	clear() {
		ctx.clearRect(this.x, this.y, this.width, this.height);
	}

	add() {
		myBlocks.push(new Block());
		myBlocks.forEach((block) => {
			block.draw();
			block.update();
		});
	}

	isCrashed(car) {
        return (this.x < car.x + car.width
		 && this.x + this.width > car.x
		 && this.y < car.y + car.width
		 && this.y + this.height > car.y)
    }

}
