let interval
let frames = 0
const obstaculos = []
let score = 100

  const canvas = document.getElementById('race-car')
  const ctx = canvas.getContext('2d')
  
  class backgroung{
    constructor(){
      this.x = 0
      this.y = 0
      this.width = canvas.width
      this.height = canvas.height
    }
    draw(){
      ctx.fillStyle = "green"
      ctx.fillRect(0, 0, 20,800)
      ctx.fillStyle ="gray"
      ctx.fillRect(20, 0, 10,800)
      ctx.fillStyle ="white"
      ctx.fillRect(30, 0, 10,800)
      ctx.fillStyle ="gray"
      ctx.fillRect(40, 0, 320,800)
      ctx.fillStyle ="white"
      ctx.fillRect(360, 0, 10,800)
      ctx.fillStyle ="gray"
      ctx.fillRect(370, 0, 10,800)
      ctx.fillStyle = "green"
      ctx.fillRect(380, 0, 20,800)
      ctx.fillStroke ="white"
      ctx.beginPath()
      ctx.lineWidth = 5
      ctx.strokeStyle = "white"
      ctx.setLineDash([15,15])
      ctx.moveTo(200,0)
      ctx.lineTo(200,800)
      ctx.stroke()
    }

  }

  class carro{
    constructor(x,y){
      this.x = x
      this.y = y
      this.width = 40
      this.height = 80
      this.sx = 180
      this.img = new Image()
      this.img.src = "./images/car.png"
    }
    drawCar(){
      // ctx.drawImage(this.img,200,700,40,60)
    
      ctx.drawImage(
        this.img,
        this.x, // es la posicion en x y se va a cambiar 
        this.y,// es la posicion en y y es fija
        this.width,// tamaño
        this.height,
      )
    }
    goRigth(){
      this.x += 10
      this.sx += 10
    }
    goLeft() {
      this.x -= 10
      this.sx -=10
    }
    isTouching(obstacle){
      return (
        this.x < obstacle.x + obstacle.width &&
        this.x + this.width > obstacle.x &&
        this.y < obstacle.y + obstacle.height &&
        this.y + this.height > obstacle.y
      )
    }
  }

  class obstacle{
    constructor(x){
      this.x = x
      this.y = 0
      this.width = 50
      this.height = 20
    }
    drawObstacle(){
      this.y++
      ctx.fillStyle = "red"
      ctx.fillRect(this.x,this.y,this.width,this.height)
    }
  }
 

  const background = new backgroung()
  const player = new carro(200, 700)
  const obstaculo = new obstacle()



window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  document.onkeydown = e => {
    switch (e.keyCode){
      case 39:
        return player.goRigth()
      case 37:
        return player.goLeft()
    }
  }

  function startGame() {
    if(interval) return
    interval = setInterval(update, 1000/ 60)
  }
  function drawObstaculos() {
    generateObstacles()
    obstaculos.forEach(e => e.drawObstacle())
  }
  function generateObstacles(){
    if(frames % 100 === 0){
      let rndX = Math.random() * (350 - 50) + 50
      obstaculos.push(new obstacle(rndX))
    }
  }
  function checkCollitions(){
    
    obstaculos.forEach((e, i) =>{
      
      console.log(player.isTouching(e));
      
      if(player.isTouching(e)){
        return score -= 10
      }
    })
  }

  function update() {
    frames++
    ctx.clearRect(0,0, canvas.width, canvas.height)
    background.draw()
    player.drawCar()
    drawObstaculos()
    checkCollitions()
    ctx.font = "30px Arial";
    ctx.fillText(String(score), canvas.width - 50, 50)
  }
};
