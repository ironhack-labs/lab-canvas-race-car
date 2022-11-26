class Obstacle {
	constructor(ctx, x, y, width) {
		this.ctx = ctx
		this.x = x
		this.y = y
		this.width = width
		this.img = new Image()
		this.img.src = "/images/señoras.png"
		this.isReady = false
		this.img.onload = () => {
			this.isReady = true
			this.height = (this.width * this.img.height) / this.img.width
		}

		this.vy = 4
	}

	draw() {
		if (this.isReady) {
			this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
		}
	}

	move() {
		if (this.isReady) {
			this.y += this.vy
		}
	}
}
