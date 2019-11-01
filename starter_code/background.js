class Background {
   constructor(game){
        this.height = game.height
        this.width = game.width
        this.context = game.context
    }

    drawGrid() {
    context.fillStyle = "grey";
    context.fillRect(0, 0, 420, 588);
    context.fillStyle = "green";
    context.fillRect(0, 0, 45, 588);
    context.fillRect(375, 0, 45, 588);
    context.fillStyle = "white";
    context.fillRect(49, 0, 12, 588);
    context.fillRect(357, 0, 12, 588);
    
    for (let i = 20; i < this.height; i += 50) {
      context.lineWidth = 10;
      context.strokeStyle = "white";
      context.beginPath();
      context.moveTo(207, i);
      context.lineTo(207, i + 20);
      context.stroke();
      context.closePath();
    }
  }
}