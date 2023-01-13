class Block {
	constructor() {
		this.width = Math.floor(Math.random() * (200 - 100) + 100);
		this.height = 30;
		this.x = Math.floor(Math.random() * (300 - this.width) + 100);
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

	add() {
		myBlocks.push(new Block());
		myBlocks.forEach((block) => {
			block.draw();
			block.update();
		});
	}
}
