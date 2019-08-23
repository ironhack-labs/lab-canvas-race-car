class Board {
    constructor(game) {
    this.canvas = game.canvas;
    this.context = game.context;
    }
    
    paint () {
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, width, height)
        this.context.fillStyle = 'grey';
        this.context.fillRect(30, 0, width-60, height)
        this.context.strokeStyle = 'white'
        this.context.lineWidth = 6;
        this.context.beginPath();
        this.context.moveTo(40, 0);
        this.context.lineTo(40, height);
        this.context.stroke()
        this.context.closePath(); 
        this.context.beginPath();
        this.context.moveTo(width - 40, 0);
        this.context.lineTo(width - 40, height);
        this.context.stroke()
        this.context.closePath();
        
        
        for(var i = 10; i <= height; i+=30){
        this.context.lineWidth = 3;
        this.context.beginPath();
        this.context.moveTo(width/2, i);
        this.context.lineTo(width/2, i+20);
        this.context.stroke()
        this.context.closePath();
        }
    }
      
    
} 
   



