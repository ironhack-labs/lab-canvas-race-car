var RIGHT_KEY = 39;
var LEFT_KEY = 37;

function Car(canvas, ctx) {
  this.canvas = canvas; 
  this.ctx = ctx;
  this.ancho = 60;
  this.alto = 100;
  this.src = "images/car.png";


  this.x = this.canvas.width / 2 - this.ancho / 2;
  this.y = this.canvas.height - this.alto - 40;
}


Car.prototype.posicionInicial = function(ctx, width, height) {
  
  var img = new Image();
 
  img.src = this.src;
  img.onload = function() {
   this.ctx.drawImage(img, this.x, this.y, this.ancho, this.alto);
  }.bind(this);
  
};

Car.prototype.movimiento = function() {
  this.draw();
  document.onkeydown = function(event){
     var d = 10;

  switch (event.keyCode) {
    case RIGHT_KEY:
      this.x += d;
      break;

    case LEFT_KEY:
      this.x -= d;
      break;
  }

  }.bind(this)
}
  
  Car.prototype.draw = function (){
    
    var img = new Image();
    img.src = this.src;
    img.onload = function() {
      this.ctx.drawImage(img, this.x, this.y, this.ancho, this.alto);
    }.bind(this);
    
  }

  Car.prototype.clear = function (){
   this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height)
  }
