
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');    
  function mapa(){
    ctx.beginPath();
    ctx.fillStyle='#009200'
    ctx.fillRect(0,0,canvas.width,canvas.height)

    ctx.beginPath();
    ctx.fillStyle='#7F7F7F'
    ctx.fillRect(30,0,340,canvas.height)

    ctx.beginPath();
    ctx.fillStyle='white'
    ctx.fillRect(50,0,10,canvas.height)

    ctx.beginPath();
    ctx.fillStyle='white'
    ctx.fillRect(340,0,10,canvas.height)

    for(x = 10; x<canvas.height; x+=50){
      ctx.beginPath();
      ctx.fillStyle='white'
      ctx.fillRect(190,x,10,30)
    }
  }
    class carro{
      constructor(){
        this.x=175
      }
      draw(){
      var imagen = new Image()
      imagen.src='./images/car.png'
      ctx.drawImage(imagen,this.x,530,50,70)   
      }
      goLeft(){
        this.x-=50
      }
      goRight(){
        this.x+=50
      }
    }

    class tronco{
        constructor(){
          this.x = Math.floor(Math.random()*300) 
          this.w =Math.floor(Math.random()*300)
          this.y=0
          this.down=true
        }
        draw(){
        this.goDown()
        ctx.fillStyle='brown'
        ctx.fillRect(this.x,this.y,this.w,10)
        }
        goDown(){
          this.y+=3
        }
    }

    var troncos = []
    function createTroncos(){
      var tronquito = new tronco()
      troncos.push(tronquito)
    }

    function drawTronco(){
      troncos.forEach(function(tronquito){
        tronquito.draw()
      })
  }
    var car = new carro()
    //var tronquito = new tronco()
    var contador = 0
    
    var interval = setInterval(function(){
      contador++
      ctx.clearRect(0,0,canvas.width,canvas.height)
      mapa()
      //tronquito.draw()   
      if(contador%60==0)createTroncos()
      drawTronco()
      car.draw()
    },1000/60)

    document.onkeydown=function(e){
      switch(e.keyCode){
        case 37: car.goLeft()
          break;
        case 39: car.goRight()
          break;
             }
    }

  }
};
