
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    
  };

  function startGame() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d')
    canvas.style.visibility = "visible"



    function dibuja(){
      //verde
      ctx.beginPath()
      ctx.fillStyle = "#008900";
      ctx.fillRect(0,0,50,600)
      ctx.fill();

      //verde der
      ctx.beginPath()
      ctx.fillStyle = "#008900";
      ctx.fillRect(560,0,560,600)
      ctx.fill();

      //lìnea blanca
      ctx.moveTo(70,0)
      ctx.lineTo(70,600)
      ctx.strokeStyle='white'
      ctx.lineWidth=10
      ctx.stroke()

      //lìnea blanca
      ctx.moveTo(540,0)
      ctx.lineTo(540,600)
      ctx.strokeStyle='white'
      ctx.setLineDash([0,0])
      ctx.lineWidth=10
      ctx.stroke()

      //lìnea media
      ctx.beginPath()
      ctx.lineWidth=5
      ctx.strokeStyle='white'
      ctx.setLineDash([20, 10]);
      ctx.moveTo(300,0)
      ctx.lineTo(300,610)
      ctx.stroke()
  }

class Coche{
  constructor(x,y,w,h){
    this.x=x
    this.y=y
    this.w=w
    this.h=h
    this.imagen = new Image()
    this.imagen.src = './images/car.png'
  
    this.imagen.onload = function(){
      //
      this.draw()
    }.bind(this)
  }

  draw(){ 
    ctx.drawImage(this.imagen,this.x,this.y,40,70)

  }
  goRight(){
    if(this.x>500)return
    this.x+=this.w
  }
  goLeft(){
    if(this.x<50)return
    this.x-=this.w
  }

}

    var carro = new Coche(280,480,40,70)

    document.onkeydown=function(e){
      if (e.keyCode==37){
        carro.goLeft();
      }else if(e.keyCode==39){
        carro.goRight();
      }
      ctx.beginPath()
      ctx.lineWidth=5
      ctx.strokeStyle='lightgray'
      ctx.setLineDash([500, 10]);
      ctx.moveTo(300,20)
      ctx.lineTo(300,730)
      ctx.stroke()
  }

  var interval = setInterval(function(){
    ctx.clearRect(0,0,canvas.width, canvas.height)
    dibuja();
    
    carro.draw()
  }, 1000/5)
}

}

