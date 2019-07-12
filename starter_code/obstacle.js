class Obstacle {
	constructor(x, y, length) {
		this.x = x
		this.y = y
		this.length = length
		this.height = 30
	}

	draw(ctx) {
		ctx.fillStyle = 'red'
		ctx.fillRect(this.x, this.y, this.length, this.height)
	}

	moveObstacle() {
		this.y += 1
	}
}
