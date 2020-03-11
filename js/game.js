class Game {
    constructor(canvas){
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(this);
        this.player.setControls();
        // this.animationId;
        // this.obstacles = [];
        // this.frame = 0;
        // this.obstaclesArray = [];
        // this.scoreArray = [];
        // this.gameOn = true;
    }
    start() {
        // this.reset();
        // this.animation();
        this.draw();
        this.player.draw();

    }

    draw(){
        // this.context.clearRect(0,0, this.width, this.height);

    }
}