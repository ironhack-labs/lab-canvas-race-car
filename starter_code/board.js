class Board {

	constructor(ctx) {
		this.ctx = ctx;
		this.x = 0
		this.y = 0;
		this.vy = 0.5;
		this.w = this.ctx.canvas.width
		this.h = this.ctx.canvas.height

		this.img = new Image()
		this.img.src = "./images/Carretera.png"
	}

	draw() {

		// Se superponen las dos imágenes
		this.ctx.drawImage(
			this.img,
			this.x,
			this.y,
			this.w,
			this.h
		)

		this.ctx.drawImage(
			this.img,
			this.x,
			this.y - this.h,
			this.w,
			this.h
		)
	}

	move() {
		// Cuando llegue al límite se vuelve a empezar
		this.y += this.vy
		if (this.y - this.h >= 0) {
			this.y = 0
		}
	}

}