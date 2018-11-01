  
  
  var KEY_RIGHT = 39;
  var KEY_LEFT = 37;

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };


  function Car (canvas,ctx) {
    this.canvas = canvas;
    this.img=new Image();
    this.ctx=canvas.getContext("2d");
    this.img.src='images/car.png';
    this.xCar=170;
    this.yCar=500;
    this.widthCar=60;
    this.heightCar=100;
    this.xv=5;
    
    this.setListeners();
    
    this.offset=0;
  }
  Car.prototype.draw=function(){
    this.ctx.drawImage(this.img,this.xCar,this.yCar, this.widthCar,this.heightCar); 
    
  }

  Car.prototype.setListeners=function(){
    document.onkeydown=function(e){
      e.preventDefault();
      switch(e.keyCode){
        case KEY_LEFT:
        this.xCar-=this.xv;
        break;
        case KEY_RIGHT:
        this.xCar+=this.xv;
        break;
      }
    }.bind(this);
  }

  Car.prototype.move=function(){
    console.log(this.xCar+this.widthCar);

    if(this.xCar<40){
      return this.xCar=40;
    } else if (this.xCar>300) {
      return this.xCar=300
    }
  }

  function Driveway(id) {
    var canvas = document.getElementById(id);

    this.width = 400;
    this.height = 630;
  
    this.ctx = canvas.getContext("2d");
    this.car = new Car(canvas, this.ctx);
    this.counter=0;
    this.fps=60;
    //this.setInterval ();
  }

  Driveway.prototype.drawLine = function(x,y,width, height){
    this.ctx.fillRect(x,y,width,height);
  }

  Driveway.prototype.colorGreen = function(){
    this.ctx.fillStyle="green";
  }

  Driveway.prototype.colorGray = function(){
    this.ctx.fillStyle="gray";
}

  Driveway.prototype.colorWhite = function(){
    this.ctx.fillStyle="white";
}

Driveway.prototype.start = function() {
  
  setInterval(function() {
  //  this.clear();
    this.drawAll();
    this.car.move();
    
    this.counter++;
    
    if(this.counter % 110 == 0) {
    }
  }.bind(this), 1000/this.fps);
}


  Driveway.prototype.dashed=function(){
    //var offset=0;
    
    this.ctx.beginPath();
    this.ctx.setLineDash([25]);
    this.ctx.lineDashOffset = this.offset;
    this.ctx.moveTo(200, 10);
    this.ctx.lineTo(200,650);
    this.ctx.strokeStyle="white";
    this.ctx.lineWidth=10;
    this.ctx.stroke();
    this.ctx.closePath();
    this.offset-=5;
}
  Driveway.prototype.drawAll=function(){
     
    var x=0;
    var y=0;
    var width=400;
    var height=630;

    this.colorGreen();
    this.drawLine(x,y,width*0.06,height);

    this.colorGray();
    this.drawLine(x+(width*0.06),y,width*0.02,height);

    this.colorWhite();
    this.drawLine(x+(width*0.08),y,width*0.02,height);

    this.colorGray();
    this.drawLine(x+(width*0.1),y,width*0.80,height);

    this.colorWhite();
    this.drawLine(x+(width*0.9),y,width*0.02,height);

    this.dashed();

    this.colorGray();
    this.drawLine(x+(width*0.92),y,width*0.02,height);

    this.colorGreen();
    this.drawLine(x+(width*0.94),y,width*0.06,height);

    this.dashed();
    this.car.draw();
    
  }
  
  var drawing=new Driveway("driveway");
  drawing.start();



  

  function startGame() {

  }
};

