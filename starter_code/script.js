window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  
  function CanvasLogic(x, y, vLine){
    //Nuestro juego
    this.xCar = 210;
    this.yCar = 430;
    this.intervalId;
    this.xob1 = 100;
    this.yob1 = 50;
    this.vLine = vLine;
    this.canvas = document.getElementById("myCanvas");
    this.ctx = this.canvas.getContext("2d");
    this.offsetCounter = 0;
    this.img = new Image();
    this.img.src="images/car.png";
    this.key_rigth = 39;
    this.key_left = 37;
    this.obstacles= [];
    

    

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

        this.intervalId =
      setInterval(function(){ 
        this.eraseScreen();
        this.draw();
        this.drawLine();
        this.drawCar();
        this.setListeners()
        this.offsetCounter++;
        this.colisions();
        this.yob1++
        this.obstacles.forEach(function(element){
          element.draw(this.ctx);
        }.bind(this))
        if(this.offsetCounter %200 ==0){
          this.obstacles.push(new Obstacle(Math.floor(Math.random()*250 ),Math.floor(Math.random()*250 )));
        }
      }.bind(this), 500/60);
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

    CanvasLogic.prototype.colisions = function(){
      this.obstacles.forEach(function(element){
        if( this.xCar+ 50 >= element.x && element.x+element.width >= this.xCar &&
          this.yCar+100 >= element.y && element.y+ 30 >= this.yCar){
              clearInterval(this.intervalId);
              this.obstacles = [];
              this.offsetCounter = 0;
          }
        
      }.bind(this))
    }


  

  function Obstacle(x,width){

    this.x=x;
    this.y=-30;
    this.height=30;
    this.width=width;
    this.color="red";


  }

  Obstacle.prototype.draw = function(ctx){
    ctx.fillStyle = "brown";
    ctx.fillRect(this.x, this.y++, this.width, this.height);
    
  }
    var canvasGame = new CanvasLogic(0,0,5);


    function startGame() {
     canvasGame.start();

    }

};
