class Background {
	constructor(ctx) {
	  this.ctx = ctx
  
	  this.x = 0
	  this.y = 0
	  this.w = this._ctx.canvas.width
	  this.h = this._ctx.canvas.height
  
	  this.img = new Image()
	  this.img.src = "./images/road.png";
	}

	/* load() {
		window.onload = () => {
			document.getElementById('start-button').onclick = () => {
			  startGame();
			}
	} */

	draw() {
		this.ctx.drawImage(
		  this.img,
		  this.x,
		  this.y,
		  this.w,
		  this.h
		)
	}
  
}