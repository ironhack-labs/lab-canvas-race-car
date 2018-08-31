window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
  
  var canvas= document.getElementById('canvas')
  var ctx = canvas.getContext('2d')
  
/*

class Carro{
  constructor(x,y){
    this.x=x
    this.y=y
    this.right=true
    this.down=false
    
  }

}
*/

//var car= new Image()
var Carmov =  {
      x: 100,
      moveIzq: function () { this.x -= 1 },
      moveDer: function () { this.x += 0 },
    }






  ctx.beginPath()
  ctx.fillStyle='green'
  ctx.fillRect(10,0,500,550)
  ctx.fillStyle='gray'
  ctx.fillRect(40,0,440,550)
  ctx.fillStyle='white'
  ctx.fillRect(50,0,10,550)
  ctx.fillRect(460,0,10,550)
  ctx.fillRect(250,20,10,150)
  ctx.fillRect(250,220,10,150)
  ctx.fillRect(250,20,10,150)
  ctx.fillRect(250,420,10,150)


  //ctx.drawImage(car, Carmov.x, 600, 50, 100)


  var image = new Image()
  image.src = 'images/car.png'
  image.onload=function(){
   ctx.drawImage(image, 270,300,100,100)
  }



  document.onkeydown = function(e) {
     switch (e.keyCode) {
     case 37: Carmov.moveIzq(); console.log('left',  Carmov); break;
     case 39: Carmov.moveDer(); console.log('right', Carmov); break;
   }
  startGame();
 }

  }

  
};
