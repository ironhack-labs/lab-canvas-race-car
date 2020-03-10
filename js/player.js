class Player {
	constructor (game) {
		this.context = game.context

	}
	draw () {
		const carImg = new Image ();
		carImg.src = "images/car.png"
		this.context.drawImage(carImg, 125, 350, 30, 60)
	}
}