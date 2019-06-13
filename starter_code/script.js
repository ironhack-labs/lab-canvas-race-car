const images = new Image()
images.src = '../starter_code/images/road.png'
const imageCoche =new Image()
imageCoche.src = '../starter_code/images/car.png'
let interval
let score=0
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  const canvas = document.querySelector('canvas')
  const ctx = canvas.getContext('2d')
  ctx.fillRect(0,0, canvas.width, canvas.height)
  let obsMoving = []
  let frames = 0
  class Board{
    constructor(){
      this.img=images
      //this.img.src= '../starter_code/images/road.png'
      this.x = 0 //
      this.y = 0
      this.width= canvas.width
      this.height = canvas.height

    }
    draw(){
      ctx.drawImage(this.img,this.x, this.y, this.width,this.height)
      ctx.font= "30px Arial";
      ctx.fillStyle=  'black'
      countScore()
      ctx.fillText('Score: '+score,40,480)
    }
  }
  class Coche{
    constructor(){
      this.x = 190 //
      this.y = 420
      this.width= 40
      this.height = 60
      this.img = imageCoche
    }
    draw(){
      ctx.drawImage(this.img, this.x, this.y, this.width,this.height)
    }
    moveRight(){
      console.log(this.x)
      if(this.x<320){
        this.x+=10}

    }
    moveLeft(){
      if(this.x>60){this.x-=10}
      
      
    }
    isTouching(osbtacles) {
      return (
        this.x < osbtacles.x + osbtacles.width &&
        this.x + this.width > osbtacles.x &&
        this.y < osbtacles.y + osbtacles.height &&
        this.y + this.height > osbtacles.y
      );
    }
  }
  class Osbtacles{
    constructor(){
      
      this.width = Math.floor((Math.random()*(320-60-40-100))+100) //
      this.y = 0
      this.x= Math.floor((Math.random()*(320-60-this.width)) + 60)
      this.height = 20
      
    }
    draw(){
      ctx.fillStyle= 'brown'
      ctx.fillRect(this.x, this.y, this.width, this.height)
      
      this.y++
    }


  }
  function countScore (){
    score=Math.floor(frames/300)
    // return score//Math.floor(frames/300)
  }
  function generate(){
    obsMoving.push(new Osbtacles())
  }
  function drawObstacles(){
    if(frames%200===0){generate()}
    obsMoving.forEach((e)=>{
      e.draw()
    })
  }
  function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    scenario.draw()
    coche.draw()
    checkCollition()
    drawObstacles()
    
    frames++
  }
  function startGame() {
    if(interval) return
    interval=setInterval(update, 1000/120)
  }
  function gameOver(){
    clearInterval(interval)
    interval=false
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle='black'
    ctx.fillRect(0,0,canvas.width,canvas.height)
    ctx.fillStyle = 'red'
    ctx.fillText('Game Over! ', 70,280)
    ctx.fillStyle = 'white'
    ctx.fillText('your final score',70,310)
    ctx.fillText(score,150,350)
  }
  function checkCollition(){
    obsMoving.forEach((e)=>{
      if(coche.isTouching(e)){
        gameOver()
      }
    })
  }
  const scenario = new Board()
  const osbtacles = new Osbtacles()
  const coche = new Coche()
  
   this.addEventListener('keydown',(e) =>{
    switch (e.keyCode){
      case 39:
        coche.moveRight()
        break
      case 37:
        coche.moveLeft()
        break

    }
   })
  
};


