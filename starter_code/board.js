class Board {
  constructor (game) {
    this.canvas = game.canvas
    this.context = game.context
  }

drawBoard() {
  this.context.fillStyle = '#228B22';
  this.context.fillRect(0, 0, 600, 700);
  this.context.fill();

  this.context.fillStyle = '#808080';
  this.context.fillRect(40, 0, 420, 700);

  this.context.fillStyle = '#FFFFFF';
  this.context.fillRect(50, 0, 10, 710);
  this.context.fillRect(440, 0, 10, 710);
  this.context.setLineDash([20,15]);
  this.context.strokeStyle = '#FFFFFF';
  this.context.lineWidth = 5;
  this.context.beginPath();
  this.context.moveTo(250, 0);
  this.context.lineTo(250, 700);
  this.context.stroke();
  this.context.closePath();

}
}