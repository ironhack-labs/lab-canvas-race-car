class Car {
    constructor(ctx, x, y) {
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.width = 50
        this.img = new Image();
		this.img.src = "/images/car.png";
		this.img.onload = () => {
			this.height = this.width * this.img.height / this.img.width;
			this.isReady = true;
        }
    }

    draw () {
		if (this.isReady) {
			this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		}
	}
}