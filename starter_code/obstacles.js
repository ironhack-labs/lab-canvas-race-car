let y =0;
let vY =0;
let timestamp=0;
let previousTimeStamp=0;
const timestampDelta = timestamp-previousTimeStamp;

class Obstacle {
    constructor(game){
      this.x = Math.floor(Math.random() * (500) + 40);
      this.y = 0;
      this.height = game.height;
      this.width = Math.floor(Math.random() * (70) + 20);
      this.context = game.context;
      this.vY = 5;
      
    }
        
    drawObst(){
        this.context.save();
        this.context.fillStyle="darkred";
        this.context.fillRect(this.x, this.y, this.width, 50);
        this.context.restore();
    }

    update(){
      this.x +=this.vY
      
    }
}


  