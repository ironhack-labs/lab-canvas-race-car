window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  document.onkeydown = function(event){
    if(event.keyCode== 37 || event.keyCode == 39){
      if(event.keyCode == 37) game.posCar -= 10;
      else game.posCar += 10;
    }
  }
  

  function startGame(){
    game.drawBackground();
    game.moveDiscLines();
    game.drawCar();
    game.obstacles();
  }

  var game = new Game();

  function Game(){
    this.canvas = document.querySelector("#canvasRoad");
    this.ctx = this.canvas.getContext("2d");
    this.w = 700;
    this.h = 800;
    this.posCar = 340;
      
    }
    Game.prototype.drawBackground = function(){
      this.ctx.fillStyle = "#068200";
      this.ctx.fillRect(0, 0, 700, 800);
      
      this.ctx.fillStyle = "#808080";
      this.ctx.fillRect(80, 0, 540, 800);
      
      this.ctx.fillStyle = "#ffff";
      this.ctx.fillRect(100, 0, 10, 800);

      this.ctx.fillStyle = "#ffff";
      this.ctx.fillRect(590, 0, 10, 800);

      // this.ctx.strokeStyle = "#FFFFFF";
      // this.ctx.lineWidth = 5;
      // this.ctx.setLineDash([30, 30]);
      // this.ctx.moveTo(350, 0);
      // this.ctx.lineTo(350, 900);
      // this.ctx.stroke();
  }

  Game.prototype.drawCar = function(){
    var img = document.querySelector("#car");
    this.ctx.drawImage(img, this.posCar, this.h - 200, 70, 100);
  }

  Game.prototype.moveDiscLines = function(){
    var yPos = -600;
    var that = this;
    intervalID = setInterval(function () {
        that.ctx.clearRect(0, 0, that.w, that.h);
        that.drawBackground();
        that.ctx.beginPath();
        that.ctx.strokeStyle = "#fff";
        that.ctx.lineWidth = 5;
        that.ctx.setLineDash([30, 30]);
        that.ctx.moveTo(345, yPos);
        that.ctx.lineTo(345, that.h);
        that.ctx.stroke();
        that.ctx.closePath();
        if(yPos == 0){
            yPos = -600;
        }
        yPos+=4;
        game.drawCar();
    }, 500/60)
 }
};