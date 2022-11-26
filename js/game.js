class Game {
	constructor(canvas) {
		this.canvas = document.getElementById("canvas");
		this.ctx = this.canvas.getContext("2d");
        this.intervalId = null;
        this.bg = new Background(this.ctx);

        this.player = new Player(this.ctx, this.canvas.width / 2, this.canvas.height - 100);
        
        

    }

    start (){
        this.intervalId = setInterval(() => {
        this.draw();
    } , 1000 / 60)
    }

    draw (){
        this.bg.draw();// pinto primero el background
        this.player.draw(); // pinto después el player

    }
}