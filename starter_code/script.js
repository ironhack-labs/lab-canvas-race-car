window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')


  function startGame() {
   class carImg{
     constructor(){
       this.x=0
       this.y=0
       this.width=canvas.width
       this.heigth=canvas.heigth
       this.image = new Image()
      this.image.src = 'images/car.png'
      this.image.onload=function(){
      this.draw()
      }.bind(this)
       
     }
     draw(){
      ctx.drawImage(this.image,250,690,100,100)
     }
   }
    
  




ctx.beginPath()
ctx.fillStyle="green"
ctx.fillRect(0,0,30,900)
ctx.stroke()

ctx.beginPath()
ctx.fillStyle="green"
ctx.fillRect(570,0,30,900)
ctx.stroke()

ctx.beginPath()
ctx.fillStyle="grey"
ctx.fillRect(30,0,15,900)
ctx.stroke()

ctx.beginPath()
ctx.fillStyle="grey"
ctx.fillRect(560,0,15,900)
ctx.stroke()

ctx.beginPath()
ctx.fillStyle="grey"
ctx.fillRect(50,0,505,900)
ctx.stroke()
ctx.closePath()


var carrito = new carImg()

carrito.draw()
  }



}




