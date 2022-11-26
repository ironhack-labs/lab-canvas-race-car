class Background {
	constructor(ctx) {
		this.ctx = ctx
		this.x = 0
		this.y = 0
		this.width = this.ctx.canvas.width
		this.height = this.ctx.canvas.height
		this.img = new Image()
		this.img.src = "images/road.png"
		this.isReady = false
		this.img.onload = () => {
			this.isReady = true
		}
	}

	draw() {
    if (this.isReady) {
      this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
      this.ctx.drawImage(this.img, this.x, this.y - this.height, this.width, this.height);
     }
    }
  }