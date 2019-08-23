class Board{
    constructor(game){
        this.game = game;
    }
    paint (){
        const context = this.game.context;
        context.fillStyle = "grey";
        context.fillRect(20, 0, 460, 600);
        
        context.fillStyle = "white";
        context.fillRect(40, 0, 10, 600);
        
        context.fillStyle = "white";
        context.fillRect(450, 0, 10, 600);
    
        context.strokeStyle= "white";
        context.beginPath();
        context.lineWidth = 5;
        context.setLineDash([20, 15]);
        context.moveTo(250, 15);
        context.lineTo(250, 600);
        
        context.stroke();

        // context.fillStyle = "brown";
        // context.fillRect(120, 50, 170, 35);

        // context.fillStyle = "brown";
        // context.fillRect(120, 60, 170, 35);

        // // context.fillStyle = "brown";
        // // context.fillRect(70, 30, 200, 30);
    }
}