window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {

    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')

    class Carro{
      constructor(x,y,w,h){
        this.x=175
        this.y=500
        this.w=w
        this.h=h
        this.image=new Image()
        this.image.src='../starter_code/images/car.png'
        this.image.onload=function(){
      }
        
      }
      draw(){ 
        ctx.drawImage(this.image,this.x,this.y,50,100)
      }
      goRight(){
        this.x+=10   
      }
      goLeft(){
        this.x-=10
      }
    
    }

    var carrin = new Carro()
    var interval = setInterval(function(){
    fondo()
    bache()
    carrin.draw()
    },1000/60)
    
    
    document.onkeydown=function(e){
      switch(e.keyCode){
        case 37: carrin.goLeft()
          break;
        case 39: carrin.goRight()
          break;
             }
    }

function fondo(){

  ctx.fillStyle='green'
  ctx.fillRect(0,0,20,600)

  ctx.fillStyle='grey'
  ctx.fillRect(20,0,360,600)

  ctx.fillStyle='green'
  ctx.fillRect(380,0,20,600)

  ctx.fillStyle='white'
  ctx.fillRect(30,0,10,600)

  ctx.fillStyle='white'
  ctx.fillRect(360,0,10,600)

  ctx.lineWidth=5
  ctx.strokeStyle='white'
  ctx.setLineDash([20, 10]);
  ctx.moveTo(200,0)
  ctx.lineTo(200,600)
  ctx.stroke()
}

function bache(){
  ctx.fillStyle='red'
  ctx.fillRect(0,50,150,20)

  ctx.fillStyle='red'
  ctx.fillRect(200,180,150,20)

}


}  

};
