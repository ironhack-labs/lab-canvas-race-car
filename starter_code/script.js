window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  


  function CanvasLogic(x, y, vLine){
    //Nuestro juego
    this.x = x;
    this.y = y;
    this.vLine = vLine;
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.offsetCounter = 0;
    var img = new Image();
    this.img.src="images/car.png";


   }

    CanvasLogic.prototype.start = function(){

        setInterval(function(){ 
        this.eraseScreen();
        this.draw();
        this.drawLine();
        this.offsetCounter++;
        console.log(this.draw);

      }.bind(this), 1000/60);
    }
    
    
    CanvasLogic.prototype.draw = function(){
      this.ctx.beginPath();
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(0, 0, 30, 550);
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.fillStyle = "green";
      this.ctx.fillRect(440, 0, 30, 550);
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(30, 0, 10, 550);
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(430, 0, 10, 550);
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(40, 0, 10, 550);
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.fillStyle = "white";
      this.ctx.fillRect(420, 0, 10, 550);
      this.ctx.closePath();

      this.ctx.beginPath();
      this.ctx.fillStyle = "grey";
      this.ctx.fillRect(50, 0, 370, 550);
      this.ctx.closePath();

    }

    CanvasLogic.prototype.drawCar = function(){

      this.ctx

    }

    CanvasLogic.prototype.drawLine = function(){

      this.ctx.setLineDash([40, 30]);
      this.ctx.lineDashOffset = -this.offsetCounter;
      this.ctx.beginPath();
      this.ctx.strokeStyle = "white";
      this.ctx.moveTo(230, 0);
      this.ctx.lineWidth =10;
      this.ctx.lineTo(230, 550);
      this.ctx.stroke();
      this.ctx.closePath();

    }

    CanvasLogic.prototype.eraseScreen = function(){

      this.ctx.clearRect(0,0,470,550);

    }
  
    var canvasGame = new CanvasLogic(0,0,5);



    function startGame() {
     canvasGame.start();

    }

};
