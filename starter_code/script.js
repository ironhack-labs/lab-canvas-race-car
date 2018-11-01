window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    var canvas = new Canvas('myCanvas');
    var road = new Road(canvas.ctx);
   
    
    startGame(road);
  };
  var offset = 0;
  function Canvas(myCanvas) {
    var canvas = document.getElementById(myCanvas);
    this.fps=60;
    this.w = 350;
    this.h = 600;
    this.ctx = canvas.getContext("2d");
    
  }

  
  function Road(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.carX = 150;
    this.carY = 450;
    this.obstacleX=60;
    this.obstacleY= 50;
    this.obstacleW=150;
    this.obstacleH=30;
    this.vx = 5;
    this.vyObstacle= 0.5;
    this.width = 350;
    this.height = 600;
    this.imageCar= new Image();
    this.imageCar.src="./images/car.png";

    this.setListeners();
  }

  Road.prototype.green = function() {
    this.ctx.fillStyle = 'green'
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  };

  Road.prototype.grey = function() {
    this.ctx.fillStyle = 'gray'
    this.ctx.fillRect(this.x +25, this.y, this.width-50, this.height );
  }
  
  Road.prototype.white= function(){
    this.ctx.fillStyle= "white"
    this.ctx.fillRect(this.x +37,this.y,this.width -337,this.height);
    this.ctx.fillRect(this.x+300,this.y, this.width-337,this.height)
  }
  Road.prototype.line=function(){
   
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 5;
    this.ctx.beginPath();
    this.ctx.lineDashOffset = offset;
    offset -=0.75;
    this.ctx.setLineDash([20,15]);
    this.ctx.moveTo(this.x+175, this.y);
    this.ctx.lineTo(this.x+175, this.y+600);
    this.ctx.stroke();
    this.ctx.closePath();
  }

  Road.prototype.car =function(){
  
  this.ctx.drawImage(this.imageCar, this.carX, this.carY, 50, 100);

}

  Road.prototype.move=function(){
    
    if(this.carX < 0){
      this.carX = 10;
    } if (this.carX >= 300 ){
      this.carX= 290;
    }
    }
  
  Road.prototype.clear=function(){
    this.ctx.clearRect(0,0,350,600);
  }

//to move car
var KEY_RIGHT = 39;
var KEY_LEFT = 37;

  Road.prototype.setListeners =function(){
    document.onkeydown = function(e) {
      e.preventDefault();
      switch(e.keyCode) {
        case KEY_LEFT: 
          this.carX -= this.vx;
          break; 
        case KEY_RIGHT: 
          this.carX += this.vx;
          break; 
      }
    }.bind(this);
  }

  Road.prototype.obstacle1 =function (){
    this.ctx.fillStyle = 'red'
    this.ctx.fillRect(this.obstacleX, this.obstacleY, this.obstacleW, this.obstacleH);
    this.ctx.fillRect(this.obstacleX+125, this.obstacleY-350, this.obstacleW-40, this.obstacleH);
    this.ctx.fillRect(this.obstacleX, this.obstacleY-700, this.obstacleW+10, this.obstacleH);
    
  }

  Road.prototype.moveObstacle1= function(){
    
    this.obstacleY+=this.vyObstacle;
      }
    
  


    function startGame(road) {
      setInterval(function(){
        road.clear();
        road.move();
        road.car();
        road.green();
        road.grey();
        road.white();
        road.line();
        road.car();
        road.obstacle1();
        road.moveObstacle1();

      }.bind(this), 1000/this.fps);
    }
};
