const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')


window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
    console.log('Start game')
  };

  function startGame() {
    updateCanvas()
    start()
  }
};

let frames = 0
let interval 
const myObstacles = []
// Obstacle Class
class Component{
  constructor(width, height, color, x, y){
      this.width = width
      this.height = height
      this.color = color
      this.x = x
      this.y = y
      this.speedX = 0
      this.speedY = 0
  }
  draw(){
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.width, this.height)
  }
  newPos(){
      this.x += this.speedX
      this.y += this.speedY
  }
  top(){
      return this.y
  }
  bottom(){
      return this.y + this.height
  }
  left(){
      return this.x
  }
  right() {
      return this.x + this.width
  }

  crashWith(obstacle){
      return !(
          this.bottom() < obstacle.top() ||
          this.top() > obstacle.bottom() ||
          this.right() < obstacle.left() ||
          this.left() > obstacle.right() 
      )
  }
}
// Player Class
class Player{
  constructor() {
      this.x = 180
      this.y = 480
      this.width = 60
      this.height = 100
      this.img = new Image()
      this.img.src = "./images/car.png"
      this.img.onload = () => {
          ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
      }
  }
    draw(){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
    }

    moveRight(){
        this.x += 20
    }
    moveLeft(){
        this.x -= 20
    }

    newPos(){
        this.x += this.speedX
        this.y = 480
    }
    
    top(){
        return this.y
    }
    bottom(){
        return this.y + this.height
    }
    left(){
        return this.x
    }
    right() {
        return this.x + this.width
    }

    crashWith(obstacle){
        return !(
            this.bottom() > obstacle.top() ||
            this.top() < obstacle.bottom() ||
            this.right() > obstacle.left() ||
            this.left() < obstacle.right() 
          )
      }
}

const player = new Player()



// let player = new Component(60, 100, 'none', 180, 480)
// player.draw()

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
}

function createCanvas() {
  ctx.fillStyle="grey";
  ctx.fillRect(0, 0, 400, 600);
  ctx.fillStyle="green";
  ctx.fillRect(0, 0, 30, 600);
  ctx.fillStyle="white";
  ctx.fillRect(40, 0, 15, 600);
  ctx.fillStyle="white";
  ctx.fillRect(345, 0, 15, 600);
  ctx.fillStyle="green";
  ctx.fillRect(370, 0, 30, 600);
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 540, 10, 30);
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 480, 10, 30);
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 420, 10, 30);
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 360, 10, 30);
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 300, 10, 30);
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 240, 10, 30);
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 180, 10, 30);
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 120, 10, 30);
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 60, 10, 30)
  ctx.fillStyle="white";
  ctx.fillRect(192.5, 0, 10, 30);
}


function updateCanvas(){
    frames += 1
    clearCanvas()
    createCanvas()
    //player.newPos()
    player.draw()
    drawObstacles()
    updateObstacles()
    checkGameOver()
}
//helper functions
function start() {
    interval = setInterval(updateCanvas, 20)   //need to update
}
function stop() {
    clearInterval(interval) 
    interval = null  //need to update
}

function checkGameOver () {
    let crashed = myObstacles.some(obstacle => player.crashWith(obstacle))

    if(crashed){
        stop()
    }
}

function updateObstacles() {
  if (frames % 240 === 0) {
      let y = canvas.height
      let minWidth = canvas.width * 0.075
      let maxWidth = canvas.width * 0.75
      let width = Math.floor(Math.random() * (maxWidth - minWidth +1) + minWidth)
      let minGap = canvas.width * .18
      let maxGap = maxWidth * .75
      let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)

      myObstacles.push(new Component(width, 40, 'red', 0, 0))
      myObstacles.push(new Component(y - width - gap, 40, 'red', width + gap, 0))

  }
}


function drawObstacles() {
  myObstacles.forEach(obstacles => {
      obstacles.y++
      obstacles.draw()
  })
}

document.onkeydown = event => {
  console.log(event.keyCode)
  switch (event.keyCode) {
    //   case 38:
    //       player.moveUp()
    //       break
    //   case 40:
    //       player.moveDown()
    //       break
      case 37:
          player.moveLeft()
          break       
      case 39:
          player.moveRight()
          break
      default:
          ctx.font = '60px Courier'
          ctx.fillText('invalid key', 200, 60)
          break
  }
  updateCanvas()
}

// function updateCanvas() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height)
//   ctx.fillText(`Ghost x: ${player.x}`, 20, 40)
//   ctx.fillText(`Ghost y: ${player.y}`, 20, 80)
//   player.draw()
// }

// updateCanvas()


document.onkeyup = e => {
    player.speedX = 0;
    player.speedY = 0;
}