class Car {
	constructor() {
		this.width = 80
		this.height = 120
		this.x = 223
		this.y = 500
		this.keys = {
			ARROW_RIGHT: 39,
			ARROW_LEFT: 37
		}
	}

	draw(ctx) {
		let img = new Image()
		img.src = './images/car.png'
		ctx.drawImage(img, this.x, this.y, this.width, this.height)
	}

	moveCar() {
		document.onkeydown = e => {
			switch (
				e.keyCode //Gestion del movimiento.
			) {
				case this.keys.ARROW_RIGHT:
					this.x += 10
					break

				case this.keys.ARROW_LEFT:
					this.x -= 10
					break
			}
		}
	}
}
