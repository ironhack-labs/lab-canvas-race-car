class Road {
	constructor() {
		this.ctx = ctx;
		this.x = 0;
		this.y = 0;
		this.width = this.ctx.canvas.width;
		this.height = this.ctx.canvas.height;
		this.img = new Image();
		this.img.src = 'images/road.png';
		this.isLoaded = false;
		this.img.onload = () => {
			this.isLoaded = true;
		};
	}

	paveRoad() {
		if (this.isLoaded) {
			ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		}
	}
}
