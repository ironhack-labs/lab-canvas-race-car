
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();}
 
function RaceCarCanvas() {
  
  this.ctx = document.getElementById("game-board").getContext('2d');
}

RaceCarCanvas.prototype.createBoard = function () {

  
  
  this.drawLines(0,100,25,800,"green");
  this.drawLines(595,100,15,800,"green");
  this.drawLines(20,100,15,800,"grey");
  this.drawLines(580,100,15,800,"grey");
  this.drawLines(300,100,500,800,"grey");
  for (var i=0;i<10;i++)
    {
      this.drawLines(300,100+i*100,7,30,"white");
      
    }
  
} 


RaceCarCanvas.prototype.drawLines = function (coordX,coordY,width,heigth,color) {


    
        this.ctx.beginPath();
        this.ctx.lineWidth = width;
        this.ctx.strokeStyle = color;	
        
        this.ctx.moveTo(coordX, coordY);
        this.ctx.lineTo(coordX, coordY+heigth);
     
        this.ctx.stroke();
        this.ctx.closePath();    

};


function Car(x,imag) {
  
  this.x=x;
  this.img=new Image();
  this.img.src=imag;
  this.maxSpeed = 3;
  this.sX = 2;
  
}

Car.prototype.moveLeft = function() { this.sX = -this.maxSpeed }
Car.prototype.moveRight = function() { this.sX = this.maxSpeed  }






Car.prototype.drawCar=function(ctx){

  
  
   ctx.drawImage(this.img, this.x, 800,50,100); 
  
}





Car.prototype.moveLeft = function() { this.sX = -this.maxSpeed; }
Car.prototype.moveRight = function() { this.sX = this.maxSpeed;  }




function Obstacle(width,heigth,x,y)

{
  this.x=Math.floor(Math.random() * (500 - 50)) + 50;
  this.y=0;
  this.width=Math.floor(Math.random() * (300 - 50)) + 50;
  this.heigth=Math.floor(Math.random() * (300 - 50)) + 50;
  
  if (this.x+this.width>500) this.width=500-this.x;
}
   
   
   
    

Obstacle.prototype.drawObstacle=function(ctx){

 ctx.fillRect(this.x,this.y,this.width,this.heigth);

}



  function startGame() {
    
    raceCarCanvas=new RaceCarCanvas();
    raceCarCanvas.createBoard();
    car=new Car(280,"../starter_code/images/car.png");//limits 50 to 500
    car.img.addEventListener("load",function(){car.drawCar(raceCarCanvas.ctx)},false);
    obs=new Obstacle();
    obs.drawObstacle(raceCarCanvas.ctx);



    function move (ca,obs) {
      if (((ca.sX>0)&&(ca.x<500))||((ca.sX<0)&&(ca.x>50)))
      ca.x += ca.sX;

      obs.y+=1;




   
   
    }
    
    document.onkeydown = function(e) {
      switch (e.keyCode) {
        case 37: car.moveLeft();   break;
        case 39: car.moveRight();  break;
      }
    }
    
    
    

  function updateCanvas() {
    raceCarCanvas.ctx.clearRect(0,0,1500,1700);
    move(car,obs);

    raceCarCanvas.createBoard();
    car.drawCar(raceCarCanvas.ctx)
    obs.drawObstacle(raceCarCanvas.ctx);
    window.requestAnimationFrame(updateCanvas);
    
  }
  
  window.requestAnimationFrame(updateCanvas);
   
  }
};


