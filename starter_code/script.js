window.onload = function() {
  document.getElementById('start-button').onclick = function() {
    startGame();
  };
 
  function startGame() {
    var road = new Road('canvas');
  road.draw();
  }

  function Road(canvas, ctx) {
    this.canvas = document.getElementById(canvas);
    this.ctx = this.canvas.getContext('2d');
    this.x = 0;
    this.y = 0;
  }

  Road.prototype.greenBorder = function() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.x, this.y, this.canvas.width, this.canvas.height);
  }
  Road.prototype.greyBorder = function (){
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(20, this.y, this.canvas.width - 40, this.canvas.height);
  }
  Road.prototype.whiteBorder = function (){
    this.ctx.fillStyle = "white";
    this.ctx.fillRect(30, this.y, 7, this.canvas.height);
    this.ctx.fillRect(260, this.y, 7, this.canvas.height);
  }
  Road.prototype.whiteDiscontinua = function() {

    for (var i = this.y; i < this.canvas.height; i += 25) {
      this.ctx.fillRect(this.x + (this.canvas.width / 2) - 5,i,10,15);
    }
  }
  Road.prototype.draw = function() {
    this.greenBorder();
    this.greyBorder();
    this.whiteBorder();
    this.whiteDiscontinua();
    
  };
 };
 