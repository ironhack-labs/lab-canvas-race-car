class Obstacle  {


    constructor(game) {
    
        this.context = game.context;
        
        this.xPosition = Math.floor(Math.random()*255)+55;
        this.yPosition = -50;
    
    }
    
    draw(){
        
        console.log('drawing stone')
            this.context.fillStyle = 'red';
            this.context.fillRect(this.xPosition, this.yPosition, 50, 50);
                        
           this.yPosition +=2;
           
        }
    }
    