class Board{
    constructor(game){
    this.game = game;
    }

    paint (){
        const context = this.game.context;
        context.fillStyle='grey';
        context.fillRect(40,0,520,600);

        context.fillStyle='white';
        context.fillRect(50,0,10,600);

        context.fillStyle='white';
        context.fillRect(540,0,10,600);
        
        context.strokeStyle='white';
        context.lineWidth=10;
        context.beginPath();
        context.setLineDash([20,15]);
        context.moveTo(300,20);//start in 15 for the measure of line dash
        context.lineTo(300,600);
        context.stroke();
        //this.context.lineTo(300,265);
        //this.context.lineTo(300,280);
  
        console.log('is painting?');
    }
}