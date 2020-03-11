class Background {
	constructor (game) {
		this.context = game.context
	}
	draw() {
		this.context.save()
		this.context.fillStyle = "green"
		this.context.fillRect(0, 0, 30, 500)
		this.context.fillStyle = "grey";
		this.context.fillRect(30, 0, 8, 500)
		this.context.fillStyle = "white";
		this.context.fillRect(38, 0, 8, 500)
		this.context.fillStyle = "grey";
		this.context.fillRect(46, 0, 300, 500)
		this.context.fillStyle = "white";
		this.context.fillRect(346, 0, 8, 500)
		this.context.fillStyle = "grey";
		this.context.fillRect(354, 0, 8, 500)
		this.context.fillStyle = "green";
		this.context.fillRect(362, 0, 30, 500)
		this.context.restore()
	}
}