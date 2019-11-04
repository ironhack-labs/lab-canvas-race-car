class Obstacle {
    constructor(game){
        this.height = 50
        this.boundaryLeft = game.boundaryLeft
        this.obstMaxwidth = 180;
        this.borderRight = 250;
        this.y = -100
        this.veloY = 4;
        this.rndmX = Math.floor((Math.random() * this.borderRight) + 1);
        this.rndmObstWidth = Math.floor((Math.random() * this.obstMaxwidth) + 100);
        this.colided = false;
        
    }
    
    drawObstacle(){
        context.fillStyle = 'darkred';
        context.save();
        //context.translate(this.boundaryLeft, 0);
        context.fillRect(this.rndmX, this.y, this.rndmObstWidth, this.height);
        context.restore();
    }
    updateObst() {
        this.y += this.veloY
    }
}