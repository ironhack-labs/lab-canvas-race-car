class Player {
	constructor (game) {
		this.context = game.context
		this.x = game.width / 4;
		this.y = game.height / 2;
		this.width = 5;
		this.height = 5;
	}
	draw () {
		const carImg = new Image ();
		carImg.src = "/images/car.png"
		this.context.drawImage(carImg, 0, 0)
	}
}