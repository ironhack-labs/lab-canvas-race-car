

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  var game = new Game();
  

  
  
  
  
  function startGame() {
    
    game.drawBackground()
    game.Grass()
    game.LineWhite()
    game.MoveLine()
    
  }
  
  
  function Game(){
    
    this.canvasDom = document.getElementById('myCanvas')
    this.ctx = this.canvasDom.getContext('2d')
    this.width = this.canvasDom.width
    this.height = this.canvasDom.height
    
    
    
    
  }
  
  Game.prototype.drawBackground = function (){
    this.ctx.fillStyle = "green"
    this.ctx.fillRect(0,0,this.width,this.height);
  }

  Game.prototype.Grass = function (){
    this.ctx.fillStyle = "gray"
    this.ctx.fillRect(40,0,220,600);
  }

  Game.prototype.LineWhite =  function (){
    this.ctx.fillStyle = "white"
    this.ctx.fillRect(45,0,5,600);
    this.ctx.fillRect(250,0,5,600);
    
  }

  Game.prototype.MoveLine = function (){

    // var posY = 50
    // var w = this.canvasDom.width
    // var h = this.canvasDom.height
    // console.log(w)
    // ctx.clearRect(0, 0, w, h)

    // setInterval(function () {

    this.ctx.strokeStyle = "white"
    this.ctx.beginPath();
    this.ctx.setLineDash([30, 30]);
    this.ctx.lineWidth = 8;
    this.ctx.moveTo(150, -600);
    this.ctx.lineTo(150, 1800);
    // posY++
    this.ctx.stroke();

    //  }, 10)
    
  }
  



};

