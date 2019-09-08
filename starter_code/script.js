var a = document.getElementById("winner")
var b = document.getElementById("go")
var fAudio = document.getElementById("fast")
var gAudio = document.getElementById("gOver")
var car = new Image()
car.src = "./images/Patty_Wagon2-removebg-preview.png"
var obstacles = []
var plankton = new Image()
plankton.src = "./images/squashed plankton.jpg"
var gary = new Image()
gary.src = "./images/Gary down 2.PNG"
var patty= new Image()
patty.src= "./images/krabby-patty buns.jpg"
var bigWin = new Image()
bigWin.src ="./images/spongebob-squarepants-20th-anniversary.png"


function gaOver(){
  gAudio.play()
}

function stopFast(){
  fAudio.pause()
}

function fast(){
  fAudio.play()
}

function stopGo(){
  b.pause()
}

function winnerAudio(){
a.play()
}

function goPlay(){
  b.play()
}

let gameArea= {
   cvs : document.getElementById("board"),     
    frames: 2000,
    start: function(){
      this.cvs.width = 500
      this.cvs.height = 600
      this.ctx= this.cvs.getContext("2d"),
      this.cvs.style = "background-color: grey"
      drawCanvas()
      goPlay()
      this.interval = setInterval(updateGameArea, 15)
    },
    clear: function(){
      this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height)
    },
    stop: function(){
      clearInterval(this.interval)
    },
    score: function(){
      var points= Math.floor(this.frames)
      this.ctx.font= "18px serif"
      this.ctx.fillStyle= "yellow"
      this.ctx.fillText("Secret Formula: " + points, 330, 16)
    },

  //pointer:function(){return Math.floor(this.frames / 10)}
  }

   document.getElementById("start-button").onclick= function() {gameArea.start()}

function updateGameArea(){
    gameArea.clear()
    drawCanvas()
    playerBounds()
    car1.newPos()
    car1.update()
    gameArea.score()
    updateObstacles()
  if (gameArea.frames < 1100) {
  prize.update2()
  stopGo()
  fast()
  gameArea.ctx.font = "25px Arial"
  gameArea.ctx.fillStyle = "black"
  gameArea.ctx.fillText("↑↑↑Get CAR to BUNS to WIN↑↑↑", 75, 599)
  checkCollision2(car1, prize)
  }
  if (gameArea.frames <= 0){
    gameArea.ctx.font = "60px Arial"
    gameArea.ctx.fillText("GAME OVER!", 65, 300)
    gameArea.stop()
    stopFast()
    gaOver()
  }
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
      ctx.drawImage(car, this.x, this.y, this.width, this.height)
    
    }
    update1() {
      var ctx = gameArea.ctx
      ctx.fillStyle = this.color
      ctx.drawImage(plankton ,this.x, this.y, this.width, this.height)

    }

    update2() {
      var ctx = gameArea.ctx
      ctx.fillStyle = this.color
      ctx.drawImage(patty, this.x, this.y, this.width, this.height)

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

    // crashWith(obstacle){
    //   return !(
    //     (this.bottom() > obstacle.top() && this.top() > obstacle.bottom()) ||
    //     (this.left() < obstacle.right() && this.right() > obstacle.left )
    //   )
      
    // }
  }
  
  var prize = new component(50, 50, patty, 213, 5)
  var car1= new component(50, 70, car, 240, 520)

document.onkeydown = function (e) {
  e.preventDefault()
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

function checkCollision2(rect1, rect2){
  if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y){
       gameArea.stop()
    gameArea.ctx.drawImage(bigWin, 0, 180)
    gameArea.ctx.fillStyle = "grey"
    gameArea.ctx.fillRect(0,0, 500, 180 )
    gameArea.ctx.fillStyle = "black"
    gameArea.ctx.font = "60px Arial"
    gameArea.ctx.fillText("WINNER!!!!!!!", 75, 105)
    stopGo()
    stopFast()
    winnerAudio()
    document.getElementById("start-button").onclick = function(){location.reload()
    }

}
}


function checkCollision(rect1, rect2){
  // var rect1 = { x: 5, y: 5, width: 50, height: 50 }
  // var rect2 = { x: 20, y: 10, width: 10, height: 10 }

  if (rect1.x < rect2.x + rect2.width &&
    rect1.x + rect1.width > rect2.x &&
    rect1.y < rect2.y + rect2.height &&
    rect1.y + rect1.height > rect2.y) {
    gameArea.stop()
    gameArea.ctx.font = "60px Arial"
    gameArea.ctx.fillText("GAME OVER!", 65, 300)
    stopGo()
    stopFast()
    gaOver()
    document.getElementById("start-button").onclick = function(){location.reload()
  }}}




function updateObstacles(){
    gameArea.frames-=1
    if(gameArea.frames%90 === 0){
      var y= 0
      var minLength = 70;
      var maxLength = 300;
      var length = Math.floor(Math.random()*(maxLength-minLength+1)+ minLength)
      var minGap = 70
      var maxGap = 300
      var gap = Math.floor(Math.random()*(maxGap- minGap+1) + minGap)
      //obstacles.push(new component(length, 35, "brown", 20, y-60))
      obstacles.push(new component(length, 35, "brown", length- 100, y))
    
      obstacles.push(new component(maxLength-length, 35, "brown", length+gap, y))
    }


    for(let i=0; i<obstacles.length; i++){
      obstacles[i].y += 2
      obstacles[i].update1()
      checkCollision(car1, obstacles[i])


      if (gameArea.frames < 1100) {
        obstacles[i].y +=2
      }
    }
}
let crashed = false
// function checkGameOver(){
//     // var crashed = obstacles.some(function(obstacle){
//     //     return car1.crashWith(obstacle)
//     // })

//     if(crashed){
//       gameArea.stop()
//       gameArea.ctx.fillText("GAME OVER!", 200, 260)
//     }
// }

  
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
  let game= gameArea.ctx
  game.beginPath();
  game.fillStyle = "rgba(0, 128, 0)";
  game.fillRect(0, 0, 20, 600);
  game.fillRect(480, 0, 20, 600);
  game.fillStyle = "white"
  game.fillRect(25, 0, 5, 600)
  game.fillRect(470, 0, 5, 600)
  game.fillRect(235, 0, 10, 25)
  game.fillRect(235, 50, 10, 25)
  game.fillRect(235, 100, 10, 25)
  game.fillRect(235, 150, 10, 25)
  game.fillRect(235, 200, 10, 25)
  game.fillRect(235, 250, 10, 25)
  game.fillRect(235, 300, 10, 25)
  game.fillRect(235, 350, 10, 25)
  game.fillRect(235, 400, 10, 25)
  game.fillRect(235, 450, 10, 25)
  game.fillRect(235, 500, 10, 25)
  game.fillRect(235, 550, 10, 25)
  game.fillRect(235, 600, 10, 25)
  game.strokeStyle = "yellow"
  game.moveTo(213, 5)
  game.lineTo(213,55)
  game.stroke()
  game.lineTo(263, 55)
  game.stroke()
  game.lineTo(263,5)
  game.stroke()
  game.lineTo(213, 5)
  game.stroke()
  gameArea.ctx.drawImage(gary, 34, 140, 435, 280)
}


//213 263 5 55