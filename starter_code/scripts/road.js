class Road {
  constructor(game){
    this.game = game;
  }
  paint () {
    const context = this.game.context;
    context.beginPath();
    context.fillStyle = "grey";
    context.fillRect(50, 0, 350, 600);
    context.fillStyle = "white";
    context.fillRect(75, 0, 10, 600);
    context.fillStyle = "white"
    context.fillRect(360, 0, 10, 600);
    context.beginPath();
    context.strokeStyle = 'white';
    context.setLineDash([20, 10]);
    context.moveTo(225, 0);
    context.lineTo(225, 600);
    context.stroke();
    context.closePath();
  }
}


