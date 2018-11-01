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
   // debugger
    //this.ctx.drawImage(img,200,620);

  }
  Car.prototype.draw=function(){
    //console.log(this.img);
    this
    this.img.onload=function(){
     this.ctx.drawImage(this.img,this.xCar,this.yCar, this.widthCar,this.heightCar); 
    }.bind(this);
    
  }

  Car.prototype.move=function(){

  }

  function Driveway(id) {
    var canvas = document.getElementById(id);

    this.width = 400;
    this.height = 630;
  
    this.ctx = canvas.getContext("2d");
    this.car = new Car(canvas, this.ctx);
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


  Driveway.prototype.dashed=function(){
    this.ctx.beginPath();
    this.ctx.setLineDash([25]);
    this.ctx.moveTo(200, 10);
    this.ctx.lineTo(200,650);
    this.ctx.strokeStyle="white";
    this.ctx.lineWidth=10;
    this.ctx.stroke();
  
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

    this.car.draw();

  }
  
  var drawing=new Driveway("driveway");
  drawing.drawAll();



  

  function startGame() {

  }
};

