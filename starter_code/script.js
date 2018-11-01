window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  
  function CanvasLogic(x, y, vLine){
    //Nuestro juego
    this.xCar = 210;
    this.yCar = 430;
    this.vLine = vLine;
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.offsetCounter = 0;
    this.img = new Image();
    this.img.src="images/car.png";
    this.key_rigth = 39;
    this.key_left = 37;


   }

   CanvasLogic.prototype.setListeners = function() {
      document.onkeydown = function(e) {
        e.preventDefault();
        switch(e.keyCode) {

          case this.key_left:
          if (this.xCar>=40){
            this.xCar -= 10;
            break; 
          }
          case this.key_rigth: 
          if(this.xCar<=380){
            this.xCar += 10;
            break; 
          }
      }
      }.bind(this);


  }

    CanvasLogic.prototype.start = function(){

        setInterval(function(){ 
        this.eraseScreen();
        this.draw();
        this.drawLine();
        this.drawCar();
        this.setListeners()
        console.log(this.xCar);
        console.log(this.xCar>30 && this.xCar<390);
        this.offsetCounter++;

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

      this.ctx.drawImage(this.img,this.xCar,this.yCar, 50,100);


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
