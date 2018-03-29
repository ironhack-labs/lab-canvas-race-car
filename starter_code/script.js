window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    new startGame().draw();
    
  };

  function startGame() {
    this.canvas = document.getElementById("canvas");
    this.ctx = canvas.getContext("2d");
    
  }

  startGame.prototype.drawGreen = function() {
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(0, 0, 35, 500);
    this.ctx.fillRect(315, 0, 35, 500);
  }
  
  startGame.prototype.drawRoad = function () {
    this.ctx.fillStyle = "grey";
    this.ctx.fillRect(35, 0, 290, 500);
  }

  startGame.prototype.drawWhiteBorder = function() {
  this.ctx.fillStyle = "white";
  this.ctx.fillRect(45, 0, 10, 500);
  this.ctx.fillRect(305, 0, 10, 500);
 }
 startGame.prototype.drawWhiteLines = function () {
   for (let i = 5; i < 500; i+=30) {
     this.ctx.fillRect(172.5, i, 5, 25);    
   }
 }
  
  startGame.prototype.draw = function () {
    this.drawGreen();
    this.drawRoad();
    this.drawWhiteBorder();
    this.drawWhiteLines();
  }

};
