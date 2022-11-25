class Game {
	constructor(canvas) {
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
        this.player = new Player(this.ctx, this.canvas.width / 2, this.canvas.height - 100);
        this.bg = new Background(this.ctx);

    }

    start (){
        this.draw();
    }

    draw (){
        this.bg.draw();
        this.player.draw();

    }
}