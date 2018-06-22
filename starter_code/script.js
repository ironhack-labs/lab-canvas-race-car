window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

  }

  var images = {
    carrito: url('./images/car.png'),
  }

  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.fillRect(128, 20, 10, 30);
  ctx.closePath();
  ctx.beginPath();
  ctx.fillRect(128, 80, 10, 30);
  ctx.closePath();


  class Car {
    constructor(x,y,w,h,img){
      //this.image = document.createElement('img');
      this.x = x;
      this.y = y;
      this.w = w;
      this.h = h;
      this.image = new Image();
      this.image.src = img;

      
      this.image.onload = function(){
        this.draw();
      }.bind(this);

      this.draw = function(){
          ctx.drawImage(this.image,this.x,this.y,this.width,this.height);
      }
    }
  }
  var carrito = new Car (10,10,30,30,images.carrito);
  carrito.draw();
}