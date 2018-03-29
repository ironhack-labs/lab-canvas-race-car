var RIGHT_KEY = 39;
var LEFT_KEY = 37;

function Car(canvas, ctx) {
  this.canvas = canvas; 
  this.ctx = ctx;
  this.ancho = 60;
  this.alto = 100;



  this.x = this.canvas.width/ 2 - this.ancho/2;
  this.y = this.canvas.height - this.alto - 40;

  this.img =  new Image();
  this.src = "images/car.png";
  this.img.src = this.src;
 

}




Car.prototype.movimiento = function() {
 
  document.onkeydown = function(event){
     var d = 10;

  switch (event.keyCode) {
    case RIGHT_KEY:
    if(this.x < this.canvas.width-this.ancho ){
      this.x += d;
     
    }
    break;
      

    case LEFT_KEY:
    if(this.x > 0){
      this.x -= d;
     
    }
    break;
      
  }

  }.bind(this)
}
  
  Car.prototype.draw = function (){
  
      this.ctx.drawImage(this.img, this.x, this.y, this.ancho, this.alto);
 
    
  }

  Car.prototype.clear = function (){
   this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
  }
