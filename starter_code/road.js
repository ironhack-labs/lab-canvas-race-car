class Road{
  constructor(game){
    this.game=game;
  }

  paint(){
    const context=this.game.context;

    context.save();
    context.fillStyle="green";
    context.fillRect(0,0,500,650);
    context.fillStyle="gray";
    context.fillRect(40,0,410,650);
    context.fillStyle="white";
    context.fillRect(55,0,15,650);
    context.fillRect(420,0,15,650);
    context.beginPath();
    context.lineWidth = 5;
    context.strokeStyle = "white";
    context.setLineDash([40, 25]);
    context.moveTo(250,0);
    context.lineTo(250,650);
    context.stroke();
    context.restore();
  }
}