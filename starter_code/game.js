
class Game{
    constructor($canvas){
    this.canvas = $canvas;
    this.context = $canvas.getContext("2d");
    this.height = $canvas.height;
    this.width = $canvas.width;
    this.player = new Player(this);
    this.background = new Background(this);
    this.obstacles = [];
    this.speed = 3000;
    this.obstacleTimer = 0;
    this.obstacle = new Obstacle(this)
    this.controls = new Controls(this);
    this.controls.setControls();

}
}

function drawAll(){
    game.background.drawGrid();
    game.player.drawPlayer();
    game.obstacle.drawObst();
}

function animation(){
    
    this.obstacles.push(new Obstacle(this))
    for(let i = 0; i < this.obstacles.length; i++){
    this.obstacles[i].drawObst()
}
}
