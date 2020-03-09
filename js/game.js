class Game {
	constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.width = canvas.width;
		this.height = canvas.height;
    this.Background = new Background (this)
  }
  start() {
    this.Background.draw()
    // this.Background.draw()
  }
}




