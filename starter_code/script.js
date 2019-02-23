window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  
//var myObstacles = [];

  function startGame() {
    myGameArea.start();
  //  player = new component(30, 30, "red", 0, 110);
  }

var myGameArea = {
  canvas : document.createElement("canvas"),
  start : function() {

    this.canvas.width = 400;
    this.canvas.height = 625;
    this.context = this.canvas.getContext("2d");
    this.ctx = myGameArea.context;
    this.ctx.fillStyle = "#298A08";
    this.ctx.fillRect(0, 0, 400, 625);
    this.ctx.fillStyle = "#848484";
    this.ctx.fillRect(35, 0, 327, 624);
    this.ctx.lineWidth = 10;
    this.ctx.strokeStyle = "#FFFFFF";
    this.ctx.beginPath();
    this.ctx.moveTo(50, 0);
    this.ctx.lineTo(50, 625);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(345, 0);
    this.ctx.lineTo(345, 625);
    this.ctx.stroke();
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([20, 20]);
    this.ctx.beginPath();
    this.ctx.moveTo(195,0);
    this.ctx.lineTo(195, 625);
    this.ctx.stroke();
   
    document.getElementById("game-board").appendChild(this.canvas);
},

  }

};