
  //canvas
  var canvas = document.getElementById('c')
  var ctx = canvas.getContext("2d")
  //variables
  var interval
  var obstaculos = []
  var frames = 0
  var images = {
    carro : "./images/car.png"
  }

  //clases
  function Board(){
    this.x =0
    this.y =0
    this.y1 = 0
    this.width = canvas.width
    this.height = canvas.height
    this.draw = function(){
      ctx.fillStyle = "gray"
      ctx.fillRect(this.x,this.y, this.width, this.height)
      ctx.fillStyle = "green"
      ctx.fillRect(this.x,this.y,80,this.height)
      ctx.fillStyle = "green"
      ctx.fillRect(canvas.width-80, this.y,80,this.height)
      ctx.fillStyle="white"
      ctx.fillRect(110,0,30,this.height)
      ctx.fillStyle="white"
      ctx.fillRect(canvas.width-80-60,0,30,this.height)
      

    }
    this.mov = function(){
      this.y1++
      if(this.y1 > canvas.height) this.y1 = 0
      ctx.beginPath();
      ctx.setLineDash([30, 15]);
      ctx.moveTo(400, this.y1);
      ctx.lineTo(400, this.y1+canvas.height);
      ctx.lineWidth = 10;
      ctx.strokeStyle = "white"
      ctx.stroke();
      ctx.beginPath();
      ctx.setLineDash([30, 15]);
      ctx.moveTo(400, this.y1-canvas.height);
      ctx.lineTo(400, this.y1);
      ctx.lineWidth = 10;
      ctx.strokeStyle = "white"
      ctx.stroke();



    }
    this.drawScore = function(){
      ctx.font="bold 50px Helvetica"
      ctx.fillStyle="white"
      ctx.fillText(Math.floor(frames/60),50,50)
    }
    
  }
  function Carro(){
    this.x =400
    this.y =canvas.height -100
    this.height = 100
    this.width =70
    this.speedX = 0
    this.img = new Image()
    this.img.src = images.carro
    
    this.draw = function(){
      
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height)
    }
    this.newPos = function(){
      this.x += this.speedX;
    }
    this.isTouching = function(item){
      return (this.x < item.x+item.width) && 
      (this.x+this.width>item.x)&&
      (this.y<item.y+item.height)&& 
      (this.y+this.height>item.y)
  }
  }
  function Obstaculo(width, position){
    this.width = width;
    this.height = 40;
    this.y = 0
    this.x = position
    this.draw = function(){
      this.y++
      ctx.fillStyle = "red"
      ctx.fillRect(this.x,this.y,this.width, this.height)
    }

  }
  function Audios(){
    this.audio = new Audio()
    this.audio.src = "./03.mp3"
    this.play = function(){
      this.audio.play()
    }

    
  }
  //instancias
  var bg = new Board()
  var carro = new Carro()
  var audio = new Audios()
  
  //main functions
  function startGame() {

      if(!interval){
        
        interval = setInterval(update,400/60)
      }
    }
  function gameOver(){
    clearInterval(interval)
    interval = null
    ctx.font ="bold 80px Helvetica"
    ctx.fillStyle = "black"
    ctx.fillText("Game Over",200,200)
  }
  function update(){
    frames ++
    ctx.clearRect(0,0,canvas.width,canvas.height)
    
    bg.draw()
    bg.mov()
    drawObstaculos()
    carro.newPos()
    carro.draw()
    bg.drawScore()
    checkCollition()
  }
  //aux functions
  function generador(){
    if(frames%180 ===0){
      var width = Math.floor((Math.random()*400)+30)
      var posicion =Math.floor(Math.random()*((660-width)-140)+140)
      obstaculos.push(new Obstaculo(width,posicion))
    }
  }
  function drawObstaculos(){
    generador()
    obstaculos.forEach(function(obs){
        obs.draw()
    })
  }
  function checkCollition(){
    obstaculos.forEach(function(obs){
      if(carro.isTouching(obs)){
        gameOver()
      }
    })
  }
  
  function moveLeft(){
    console.log("iz")
    carro.speedX -=1;
  }
  function moveRight(){
    console.log("der")
    carro.speedX +=1;
  }
  function stopMove(){
    carro.speedX = 0;
  }

  //listeners
   var boton = document.getElementById("start-button")
  boton.addEventListener('click',function(){
      startGame()
      var audio = new Audios()

      audio.play()
  })
  document.onkeydown = function(e){
    switch(e.keyCode){
      case 37:
      moveLeft()
      break;
      case 39:
      moveRight()
      break;
    }
  }
  document.onkeyup = function(e){
    stopMove();
  }
  
  

