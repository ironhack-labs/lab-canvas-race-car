
const $canvas = document.querySelector("canvas")
const ctx = $canvas.getContext("2d")
const cochecito = './images/car.png'
let intervalId=0;
let frames=0;
let obstacles=[];
let score=0;


let bkgdImage = new Image();
bkgdImage.src = "./images/road.png";

class Character{
  constructor(x,y,img){
    this.x=x
    this.y=y
    this.speedX=0
    this.speedY=0
    this.width=200
    this.heigth=450
    this.car = new Image();
    this.car.src = img
  }
  draw(){
    ctx.drawImage(this.car, this.x, this.y, 50, 100)
  }
  newPos() {
    this.x += this.speedX
    this.y += this.speedY
  }
  touch(obstacle){
    return(
      // this.x>=obstacle.x+obstacle.width 
      this.y < obstacle.y + obstacle.height &&
      this.y + this.heigth > obstacle.y &&
      this.x < obstacle.x + obstacle.width &&
      this.x + this.width > obstacle.x
    )
}
}


class Obstacle{
  constructor(x,y,color,width) {
    this.x=x
    this.y=y
    this.width = width
    this.height = 25
    this.color=color
  }
  draw(){
    ctx.fillStyle=this.color
    this.y++
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

let car=new Character(225, 550, cochecito)
// let gameObstacles = new Obstacle(0,0,'red')



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
    //agregue setinterval 
    intervalId=setInterval(startGame, 1000/60)
  };
  function startGame() {
    frames++
    clearCanvas()
    ctx.drawImage(bkgdImage, 0, 0, 500, 700)
    generateObstacles()
    drawObstacles()
    checkCollitions()
    printScore()
    car.draw()
    car.newPos()
  }
  
};

function clearCanvas() {
  ctx.clearRect(0, 0, $canvas.width, $canvas.height)
}

function checkCollitions(){
  obstacles.forEach(ob=>{
    if(car.touch(ob)){
      clearInterval(intervalId)
      ctx.font = `32px 'Arial'`
      ctx.fillStyle = "black"
      ctx.fillText("Game Over", 170, 400)
    }
  })
}

intervalId = setInterval(onload, 1000 / 60)


document.addEventListener('keydown', (e) => {
  switch (e.keyCode) {
    case 37: // left arrow
      car.speedX -= 5;
      break;
    case 39: // right arrow
      car.speedX += 5;
      break;
  }
});

document.addEventListener("keyup", (e) => {
  car.speedX = 0
})


//obstaculo
function generateObstacles() {
  if (frames % 150 === 0) {
    let minWidth= 100
    let maxWidth= 370
    let minGap = 75
    let maxGap = 100
    let randomWidth = Math.floor(
      Math.random() * (maxWidth- minWidth) + minWidth
    )
    let randomGap = Math.floor(Math.random() * (maxGap - minGap) + minGap)
    let randomX=Math.floor(Math.random()*500-randomWidth)
    obstacles.push(new Obstacle(randomX, 0,'red', randomWidth))
    obstacles.push(new Obstacle(randomWidth + randomGap,$canvas.width - randomGap - randomWidth )
    )
  }
}


function drawObstacles() {
  obstacles.forEach((obstacle, i) => {
    obstacle.draw()
  })
}


function printScore(){
  ctx.font='25px Arial'
  if(frames % 100 === 0) score++
  ctx.fillText(`Score : ${score}`, 20, 680)
}