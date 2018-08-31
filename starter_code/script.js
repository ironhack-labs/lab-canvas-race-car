window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

function startGame() {


    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')

  function road(){
    ctx.fillStyle="green"
    ctx.fillRect(0,0,50,900)
    ctx.fillRect(500,0,500,910)
    
    ctx.fillStyle="gray"
    ctx.fillRect(50,-5,500,910)
    
    ctx.fillStyle="white"
    ctx.fillRect(65,-5,10,910)
    ctx.fillRect(525,-5,10,910)

    for(x = 20; x<canvas.height; x+=50){
      ctx.beginPath();
      ctx.fillStyle="white"
      ctx.fillRect(300,x,5,20)
      }
    }
  class obstaculos{
    constructor(){
      this.x = Math.floor(Math.random()*300)
      this.w= Math.floor(Math.random()*300)
      this.y=0
      this.down=true
    }
    draw(){
    this.doDown()
    ctx.fillStyle="brown"
    ctx.fillRect(this.x,this.y,this.w,30)
    }
    doDown(){
      this.y+=3
  }
}

  var barra = []
    function createBarra(){
      var barritas = new obstaculos()
      barra.push(barritas)
    }

    function drawObstaculos(){
      barra.forEach(function(barritas){
        barritas.draw()
      })
    }

class Car {
  constructor(){
    this.x=268
  } 
  draw(){
    var image = new Image()
    image.src = './images/car.png'
    //image.onload=()=>{
    ctx.drawImage(image,this.x,795,70,100)
   //}
  }
  left(){
    this.x-=70
  }
  right(){
    this.x+=70
  //}
  // checkIfTouch = function(obstaculos){
  //   return (this.x < obstaculos.x + obstaculos.width) &&
  //           (this.x + this.width > obstaculos.x) &&
  //           (this.y < obstaculos.y + obstaculos.height) &&
  //           (this.y + this.height > obstaculos.y);
  //   }
    
}
}

var carro = new Car ();
var contador = 0;
var interval = setInterval(function(){
contador++
ctx.clearRect(0,0,600,900)
road();
if(contador%60==0)createBarra()
drawObstaculos()
carro.draw();
}, 1000/60)

document.onkeydown=function(e){
  switch(e.keyCode){
    case 37: carro.left()
      break;
    case 39: carro.right()
     break;
         }
}
}
};
