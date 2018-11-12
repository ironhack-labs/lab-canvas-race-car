//canvas
var canvas = document.getElementById('game-board')
var ctx = canvas.getContext('2d')
//variables
var interval
var frames = 0
var images = {
    car: "images/car.png"
}
var points = 0
var myObstacles = [] 
var myRayitas = []
var car
var component
var rayitas
//clases
function Car(x, y, width, height) {
    this.width = width 
    this.height = height 
    this.x = x 
    this.y = y 
    this.speedX = 0 
    this.image = new Image()
    this.image.src = images.car
    this.image.onload = () => this.draw()

    this.draw = () => ctx.drawImage(this.image, this.x, this.y, this.width, this.height)

    this.newPos = () => {
      this.x += this.speedX

      if (this.x < 50) this.x = 50
      else if (this.x > (350 - this.width)) this.x = 350 - this.width
    }

    this.moveLeft = () => this.speedX -= 3
    
    this.moveRight = () => this.speedX += 3
    
    this.stopMove = () => this.speedX = 0

    this.left = () => {return this.x}

    this.right = () => {return this.x + this.width}

    this.top = () => {return this.y}

    this.bottom = ()  => {return this.y + this.height}

    this.crashWith = obstacle => {
      return !(
        this.bottom() < obstacle.top() ||
        this.top() > obstacle.bottom() ||
        this.right() < obstacle.left() ||
        this.left() > obstacle.right()
      )
    }
}

function Component(width, height, color, x, y) {
    this.width = width 
    this.height = height 
    this.x = x 
    this.y = y 
    ctx.fillStyle = color 
    ctx.fillRect(this.x, this.y, this.width, this.height) 

    this.draw = () => {
      ctx.fillStyle = color 
      ctx.fillRect(this.x, this.y, this.width, this.height) 
    }

    this.newPosition = () => {
      this.x += this.speedX 
      this.y += this.speedY 
    }

    this.left = () => {return this.x} 
    this.right = () => {return this.x + this.width} 
    this.top = () => {return this.y} 
    this.bottom = () => {return this.y + this.height} 
  }

  function Rayitas(width,height,color,x,y){
      Component.call(this,width,height,color,x,y)
      this.draw = () => {
        ctx.fillStyle = color
        ctx.fillRect(this.x,this.y,this.width,this.height)
      }
  }
//instances
//main functions
function start(){
    car  = new Car(175, 520,50,70)
    
    drawStreet()
    drawScore()
    car.draw()
    if(!interval) interval = setInterval(update,1000/60)
}

function update(){
    frames++
    ctx.clearRect(0,0,canvas.width, canvas.height)

    
    drawStreet()
    
    for (var i = 0; i < myRayitas.length; i++) {
      myRayitas[i].y ++
      myRayitas[i].draw()
    }

    if (frames % 60 === 0) {
        createRayitas()
    }

    car.draw()
    car.newPos()

    for (var i = 0; i < myObstacles.length; i++) {
      myObstacles[i].y ++
      myObstacles[i].draw()
    }
    
    
    if (frames % 220 === 0) {
        createObstacle()
    }
    
    calcScore()
    drawScore()

    for (var i = 0; i < myObstacles.length; i++) {
      if (car.crashWith(myObstacles[i])) {
          gameOver()
      }
    }
}

function gameOver(){
    clearInterval(interval)
      ctx.clearRect(0,0,this.canvas.width, this.canvas.height) 
      myObstacles = [] 
      myRayitas = []
      frames = 0
      ctx.fillStyle = "black" 
      ctx.fillRect(0,0,this.canvas.width, this.canvas.height) 
      ctx.font = "40px arial" 
      ctx.fillStyle = "red" 
      ctx.fillText("GAME OVER", 40,100) 
      ctx.fillStyle = "white" 
      ctx.font = "30px monospace" 
      ctx.fillText("Your final score: ", 40,200) 
      ctx.fillText(this.points, 40,300) 
}

//aux functions
function drawStreet() {
    ctx.fillStyle = "green" 
    ctx.fillRect(0,0,30,600) 
    ctx.fillRect(370,0,30,600) 
    ctx.fillStyle = "grey" 
    ctx.fillRect(30,0,10,600) 
    ctx.fillRect(50,0,300,600) 
    ctx.fillRect(360,0,10,600) 
    ctx.fillStyle = "white" 
    ctx.fillRect(40,0,10,600) 
    ctx.fillRect(350,0,10,600) 
  }

  function calcScore() {
    if (myObstacles.length <= 3) {
      points = 0 
    }
    else if (myObstacles.length > 3) {
      points = myObstacles.length - 3 
    }
  }
  
  function drawScore() {
    ctx.fillStyle = "white" 
    ctx.font = "20px arial" 
    ctx.fillText("Points: " + points, 60,30)
  }

  function createObstacle() {
     
    var y = 0 
    var gapLeft = Math.floor(Math.random() * 150)
    var gapRight = Math.floor(Math.random() * 150)
    var width = 290 - gapLeft - gapRight
    myObstacles.push(new Component(width, 10, "red", 100 + gapLeft, y))

  }

  function createRayitas(){
    var y = 0 
    myRayitas.push(new Component(5, 20, "white", 195, y))
  }

//listeners
addEventListener('keydown',function(e){
    switch(e.keyCode){    
        case 37:
            car.moveLeft() 
        return

      case 39:
            car.moveRight()
        return

        default:
            return
    }
})

addEventListener('keyup',function(e){
    car.stopMove() 
})

document.getElementById("start-button").onclick = function(){ 
    ctx.clearRect(0,0,canvas.width, canvas.height)
    start() 
}