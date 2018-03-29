
function Game (id) {

  this.canvas = document.getElementById(id);
  this.ctx = this.canvas.getContext("2d");

  this.board = [
    new Board(this.canvas, this.ctx),
    new Board(this.canvas, this.ctx)
  ];

  this.car = new Car(this.canvas, this.ctx);

}

var game = new Game('otro')


setInterval(function() {
  this.board[0].clear();


  this.board[0].y += 10
  this.board[1].y = this.board[0].y - this.canvas.height;

  if (this.board[0].y > this.canvas.height) {
    this.board[0].y = 0;
  }

  this.board[0].draw();
  this.board[1].draw();
  this.car.draw();

}.bind(game) , 50)

