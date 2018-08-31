

window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };

  function startGame() {
      var canvas = document.getElementById("canvas");
      var ctx = canvas.getContext("2d");

      class Obstaculo{
        constructor(x,y,w,h,color){
          this.x=x
          this.y=y
          this.w=w
          this.h=h
          this.color=color
          this.right=true
          this.down=false
          
        }
        draw(){ 
          ctx.fillStyle=this.color
          ctx.fillRect(this.x, this.y, this.w, this.h)
        }
        goDown(){
          this.y+=2
        }
      }
      
      var obstaculo1 = new Obstaculo(0,20,400,30,'red')
        
      function board (){
            ctx.beginPath()
            ctx.fillStyle="gray"
            ctx.fillRect(20,-5,560,905);
            ctx.closePath()

            ctx.strokeStyle="white"
            ctx.lineWidth=9
            ctx.beginPath()
            ctx.moveTo(50,-5)
            ctx.lineTo(50,905)
            ctx.stroke()

            ctx.beginPath()
            ctx.moveTo(550,-5)
            ctx.lineTo(550,905)
            ctx.stroke()

            for(x = 20; x<canvas.height; x+=50){
            ctx.beginPath();
            ctx.fillStyle='white'
            ctx.fillRect(290,x,5,20)
      }

      }

      class Coche{
        constructor(x,y,width,height){
        this.x=260
        this.y=795
        this.width=70
        this.height=100
        this.image = new Image()
        this.image.src = './images/car.png'
      }
      draw(){
        ctx.drawImage(this.image, this.x, this.y,this.width, this.height)
      }
      goRight(){
        this.x+=9
      }
      goLeft(){
        this.x-=9
      }
    }
    
    var carro = new Coche()
    
    var interval = setInterval(function(){
      ctx.clearRect(0,0,600, 900)
      board ()
      carro.draw()
      obstaculo1.draw()
      obstaculo1.goDown()
    }, 1000/60)
    
    
    document.onkeydown=function(e){
      switch(e.keyCode){
        case 37:
        if (carro.x<20) return
        carro.goLeft()
          break;
        case 39: 
        if (carro.x>canvas.width-90)return
        carro.goRight()
          break;
       }
    }
    
  }
};



















  


 