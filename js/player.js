class Player {
	constructor (game) {
		this.game = game
		this.context = game.context
		this.x = 181
		this.y = 400
		this.width = 30;
		this.height = 60;
		this.speedX = 0;
		this.speedY = 0;
	}
	draw () {
		const carImg = new Image ();
		carImg.src = "images/car.png"
		this.context.drawImage(carImg, this.x, this.y, this.width, this.height)
	}
	update () {
		this.x += this.speedX;
		this.y += this.speedY;
		// if(this.x <= 0) {
		// 	this.speedX = 0;
		// }
		// if (this.x >= this.game.width - this.width) {
		// 	this.speedX = 0
		// }
	}
	setControls() {
		window.addEventListener ("keydown", event => {
			switch(event.keyCode) {
				case 38: // upkey
					this.speedY = - 2
					break;
				case 40: // downkey
					this.speedY = 2
					break;
				case 39: // right key
					this.speedX = 2
					break;
				case 37: // left key
					this.speedX = - 2
					break;
			}
		})
		window.addEventListener ("keyup", event => {
			this.speedX = 0;
			this.speedY = 0;
		})
	}
}
	
