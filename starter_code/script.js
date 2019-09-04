var car = new Image()
car.src = "./images/Patty_Wagon2.png"
var obstacles = []
var plankton = new Image()
plankton.src = "./images/squashed plankton.jpg"

let gameArea= {
   cvs : document.getElementById("board"),     
    frames: 0,
    start: function(){
      this.cvs.width = 500
      this.cvs.height = 600
      this.ctx= this.cvs.getContext("2d"),
      this.cvs.style = "background-color: grey"
      drawCanvas()
      this.interval = setInterval(updateGameArea, 15)
    },
    clear: function(){
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height)
    },
    stop: function(){
      clearInterval(this.interval)
    },
    score: function(){
      var points= Math.floor(this.frames/10)
      this.ctx.font= "18px serif"
      this.ctx.fillStyle= "red"
      this.ctx.fillText("Secret Formula: " + points, 330, 13)
    }
  }

   document.getElementById("start-button").onclick= function() {gameArea.start()}

function updateGameArea(){
    gameArea.clear()
    drawCanvas()
    playerBounds()
    car1.newPos()
    car1.update()
    updateObstacles()
    checkGameOver()
    gameArea.score()

}

  class component {
    constructor(width, height, color, x, y){
      this.width= width
      this.height = height
      this.color = color
      this.x = x
      this.y = y
      this.xSpeed = 0
      this.ySpeed = 0
    }

    update(){
      var ctx = gameArea.ctx
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.drawImage(car, this.x, this.y, this.width, this.height)
    
    }
    update1() {
      var ctx = gameArea.ctx
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
      ctx.drawImage(plankton ,this.x, this.y, this.width, this.height)

    }

    newPos(){
      this.x+= this.xSpeed
      this.y+= this.ySpeed
    }

    top(){
      return this.y
    }
    left(){
      this.x
    }
    right(){
      return this.x +this.width
    }
    bottom(){
      return this.y + this.height
    }

    crashWith(obstacle){
      return !(
        (this.bottom() > obstacle.top() && this.top() > obstacle.bottom()) ||
        (this.left() < obstacle.right() && this.right() > obstacle.left )
      )
    }

  }

  var car1= new component(50, 70, car, 240, 520)

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 37: car1.xSpeed -= 5; break;
    case 38: car1.ySpeed -= 5; break;
    case 39: car1.xSpeed += 5; break;
    case 40: car1.ySpeed += 5; break;
  }
}

document.onkeyup = function (e) {
  switch (e.keyCode){
    case 37: car1.xSpeed = 0; break;
    case 38: car1.ySpeed = 0; break;
    case 39: car1.xSpeed = 0; break;
    case 40: car1.ySpeed =0; break;
  }
}



function updateObstacles(){
    gameArea.frames+=1
    if(gameArea.frames%100 === 0){
      var y= 0
      var minLength = 70;
      var maxLength = 400;
      var length = Math.floor(Math.random()*(maxLength-minLength+1)+ minLength)
      var minGap = 70
      var maxGap = 400
      var gap = Math.floor(Math.random()*(maxGap- minGap+1) + minGap)
      obstacles.push(new component(length, 20, "brown", 0, y-120))
      obstacles.push(new component(maxLength-length, 20, "brown", length+gap, y))
    }

    for(let i=0; i<obstacles.length; i++){
      obstacles[i].y += 5
      obstacles[i].update1()
    }
}

function checkGameOver(){
    var crashed = obstacles.some(function(obstacle){
        return car1.crashWith(obstacle)
    })

    if(crashed){
      gameArea.stop()
      gameArea.ctx.fillText("GAME OVER!", 200, 260)
    }
}

  
function playerBounds(){
  if(car1.x<= 24){
    car1.xSpeed= 0
    car1.x = 25
  }
  if (car1.x>= 425){
    car1.xSpeed= 0
    car1.x = 424
  }
  if (car1.y>=530){
    car1.ySpeed = 0
    car1.y = 529
  }
  if(car1.y<=3){
    car1.ySpeed = 0
    car1.y= 4
  }
}

function drawCanvas() {
  gameArea.ctx.beginPath();
  gameArea.ctx.fillStyle = "green";
  gameArea.ctx.fillRect(0, 0, 20, 600);
  gameArea.ctx.fillRect(480, 0, 20, 600);
  gameArea.ctx.fillStyle = "white"
  gameArea.ctx.fillRect(25, 0, 5, 600)
  gameArea.ctx.fillRect(470, 0, 5, 600)
  gameArea.ctx.fillRect(235, 0, 10, 25)
  gameArea.ctx.fillRect(235, 50, 10, 25)
  gameArea.ctx.fillRect(235, 100, 10, 25)
  gameArea.ctx.fillRect(235, 150, 10, 25)
  gameArea.ctx.fillRect(235, 200, 10, 25)
  gameArea.ctx.fillRect(235, 250, 10, 25)
  gameArea.ctx.fillRect(235, 300, 10, 25)
  gameArea.ctx.fillRect(235, 350, 10, 25)
  gameArea.ctx.fillRect(235, 400, 10, 25)
  gameArea.ctx.fillRect(235, 450, 10, 25)
  gameArea.ctx.fillRect(235, 500, 10, 25)
  gameArea.ctx.fillRect(235, 550, 10, 25)
  gameArea.ctx.fillRect(235, 600, 10, 25)
}




