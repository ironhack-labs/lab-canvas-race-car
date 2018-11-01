window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
  }

  class Canvas {
    constructor(id) {
      this.canvas = document.getElementById(id);
      this.ctx = this.canvas.getContext("2d");
      this.x = 0;
      this.y = 0;
      this.width = 10;
      this.height = 500;

    }

    drawLimit(){
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(this.x + 10, this.y, this.width, this.height);

      this.ctx.fillStyle = "white";
      this.ctx.fillRect(this.canvas.width - this.width * 2, this.y, this.width, this.height);
    }
    moveStreet(){      
      
        this.ctx.beginPath();
        this.ctx.strokeStyle = "white";  
        this.ctx.setLineDash([40,25]);
        this.ctx.moveTo(this.canvas.width/2,this.y++)
        this.ctx.lineTo(this.canvas.width/2,this.canvas.height)
        this.ctx.lineWidth=8;
        this.ctx.stroke();
        this.ctx.closePath()
        
    }

  }

  class Coche{
    constructor(id){
      this.canvas = document.getElementById(id);
      this.ctx = this.canvas.getContext("2d");
      this.modelo = new Image();

    }
    drawCoche(){
      this.modelo.src = "images/car.png";
      this.modelo.onload=function(){
      this.ctx.drawImage(this.modelo ,this.canvas.width/2-25,this.canvas.height-110 ,50 ,100)
      }.bind(this);
    }
  }
  
  var street = new Canvas("pista");
  street.drawLimit();
  street.moveStreet();
  var coche = new Coche("pista");
  coche.drawCoche();
};
