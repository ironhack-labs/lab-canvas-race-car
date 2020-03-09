class Background {
	constructor (game) {
		this.context = game.context
	}
	draw() {
		const trackImg = new Image ();
		trackImg.src = "/images/road.png"
		this.context.drawImage(trackImg, 0, 0)
	}
}