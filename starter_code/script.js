var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

document.getElementById("start-button").onclick = function() {
  startGame();
};

function startGame() {
  var gameBoard = {
    width: 600,
    height: 900,
    speed: 10
  };
  var w = gameBoard.width;
  var Rectangle = function(ctx, x, width, color, isDashed) {
    this.isDashed = isDashed;
    this.color = color;
    this.x = x;
    this.width = width;
    this.ctx = ctx;
  };

  Rectangle.prototype.draw = function() {
    if (!this.isDashed) {
      this.ctx.fillStyle = this.color;
      this.ctx.fillRect(this.x, 0, this.width, gameBoard.height);
    } else {
      this.ctx.fillStyle = this.color;
      for (let y = 0; y < 900; y += 30) {
        this.ctx.fillRect(this.x, y, this.width, 15);
      }
    }
  };

  var rectangles = [
    new Rectangle(ctx, 0, w, "green", false),
    new Rectangle(ctx, w * 0.09, w * 0.82, "grey", false),
    new Rectangle(ctx, w * 0.14, w * 0.72, "white", false),
    new Rectangle(ctx, w * 0.19, w * 0.62, "grey", false),
    new Rectangle(ctx, w * 0.49, w * 0.02, "white", true)
  ];

  for (let i = 0; i < rectangles.length; i++) {
    rectangles[i].draw();
  }
}
