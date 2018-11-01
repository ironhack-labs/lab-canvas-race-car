window.onload = function() {
  var keyLeft = 37;
  var keyRight = 39;
  // var carretera = "(this.canvas.width-200)"
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
  
  
  

  class Canvas {
    constructor(id) {
      this.canvas = document.getElementById(id);
      this.ctx = this.canvas.getContext("2d");
      this.x = 100;
      this.y = 0;
      this.yCalle = 0;
      this.width = 10;
      this.height = 500;
      this.coche = new Coche("pista");
  
    }

    drawLimit(){
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(400,this.y,this.x, this.canvas.height);
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0,this.y,this.x, this.canvas.height);
      this.ctx.fillStyle = "gray";
      this.ctx.fillRect(this.x,this.y,this.canvas.width-200, this.canvas.height);
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(this.x + 10, this.y, this.width, this.height);
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(this.canvas.width-100 - this.width * 2, this.y, this.width, this.height);
    }
    moveStreet(){      

      if(this.yCalle==25)
        this.yCalle=-40;
        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";  
        this.ctx.setLineDash([40,25]);
        
        this.ctx.moveTo((this.canvas.width)/2,this.yCalle++)
        this.ctx.lineTo((this.canvas.width)/2,this.canvas.height)
        this.ctx.lineWidth=8;
        this.ctx.stroke();
        this.ctx.closePath()
        
    }

    drawCoche(){
      this.coche.drawCoche();
    }

    moveCoche(){
      this.coche.move();
    }
    clear(){
      this.ctx.clearRect(0,0,this.canvas.width-100,this.canvas.height);
    }
  }

  class Coche{
    constructor(id){
      this.canvas = document.getElementById(id);
      this.ctx = this.canvas.getContext("2d");
      this.modelo = new Image();
      this.x=(this.canvas.width)/2-25;
      this.vx=10;

      this.move();
    }

    drawCoche(){
      this.modelo.src = "images/car.png";
      //this.modelo.onload=function(){
      this.ctx.drawImage(this.modelo ,this.x,this.canvas.height-110 ,50 ,100)
      //}.bind(this);
    }

    move(){
        
        document.onkeydown= function(e){

        e.preventDefault();
        switch(e.keyCode){
          case keyLeft:
            if(this.x>=100)
            this.x-=this.vx;
            break;
          case keyRight:
            if(this.x+50<=this.canvas.width-100)
            this.x+=this.vx;
            break;
        }
      }.bind(this);
    }
  }
  
  var street = new Canvas("pista");
  setInterval(function(){
  street.clear();
  

  street.moveCoche();
  street.drawLimit();
  street.moveStreet();
  street.drawCoche();
  },1000/60)
}
};
