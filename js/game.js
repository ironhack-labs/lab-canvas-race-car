class Game {
	constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
		this.height = canvas.height;
    this.background = new Background (this)
    this.player = new Player (this)
  }
  start() {
    this.background.draw()
    this.player.draw()
    // this.Background.draw()
  }
}




