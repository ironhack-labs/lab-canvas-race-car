class Game {
  constructor (canvas) {
    this.canvas = canvas;
    this.context = this.canvas.getContext('2d');
    this.board = new Board (this);
    this.player = new Player (this);
  }

  draw() {
    this.board.drawBoard ();
    this.player.drawPlayer (this.image, this.y, 50, 65);
  }
}