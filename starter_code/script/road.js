class Road {
  constructor (game) {
    this.game = game;
    this.height = game.height;
    this.width = game.width;
  }

  paint () {
    const context = this.game.context;
    context.fillStyle = 'green';
    context.fillRect(0, 0, 30, this.height);
    context.fillRect(320, 0, 30, this.height);
    context.fillStyle = 'white';
    context.fillRect(40, 0, 10, this.height);
    context.fillRect(300, 0, 10, this.height);
    context.lineWidth = 4;
    context.strokeStyle = 'white';
    context.beginPath();
    context.setLineDash([20, 25]);
    context.moveTo(this.width/2, this.height)
    context.lineTo(this.width/2, 0)
    context.stroke();
    context.closePath();
  }
}

