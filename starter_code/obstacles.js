class Obstacles{
    constructor (game, posX, width){
        this.game = game;
        this.x = posX;
        this.y = -10;
        this.width = width;
        this.height = 20;
        this.vy = 4;
    }

    drawObstacle(game,posY,width){
        game.context.fillStyle = 'brown';
        game.context.fillRect(this.x,this.y,this.width, this.height);

    }


}