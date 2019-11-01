class Line{
    constructor(game){
    this.height = game.height;
    this.width = game.width;
    this.x = 174
    this.y = - 10
    this.game = game;
    this.lines = []
    }


    drawLines(){
    game.context.fillStyle = "white";
    game.context.fillRect(this.x, this.y, 4, 30);
    }


    update() {
        this.y += 3
    }
}