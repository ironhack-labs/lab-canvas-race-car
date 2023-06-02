class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.background = new Background(this.ctx)
        //this.obstacle
        this.player = new Player (ctx);

        this.intervalId = null;
    }

start(){
    this.intervalId = setInterval(() => {
        this.clear();
        this.move();
        this.draw();
    }, 1000/200)
}

draw(){
    this.background.draw();
    this.player.draw();
}

move(){
    this.background.move();
    this.player.move();
}

clear(){
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
}

}