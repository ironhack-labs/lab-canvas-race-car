const $canvas = document.querySelector('canvas')
const $ctx=$canvas.getContext('2d')

let frames=0
let ratio=200

let obstacles=[]


const image = new Image()
const carImg = new Image()
carImg.src = "./images/car.png"


class Board {
  constructor(x,y){
    this.x=x
    this.y=y
    this.img=new Image()
    //this.img.src= imageUrl ///El background se puso en CSS porque nunca pudimos aqui
  }
  draw(){
    $ctx.drawImage(this.img, this.x, this.y, 200,200)
  }
}  

class Character{
  constructor(x,y,imageUrl) {
    this.x=x
    this.y=y
    this.img=new Image()
    this.img.src= imageUrl
  }
  draw(){
    $ctx.drawImage(this.img, this.x, this.y, 70,100)
  }
  move(Dir){
    switch (Dir) {
      case 'Right':
        if (this.x>=$canvas.width) return;
        this.x++;
        break;
      case 'Left':
          if (this.x<=0) return;
          this.x--
          break;
      default: 
      throw new Error('invalid direction')
    }
  }
}

class Obstacle {
  constructor(x, width) {
    this.x = x
    this.y = 0
    this.width = width
    this.height = 30
  }
  draw() {
    this.y++
    $ctx.fillStyle = "forestgreen"
    $ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}

function generateObstacles() {
  // if (frames % 150 === 0) ratio -= 10
  if (frames % ratio === 0) {
    const min = 100
    const max = 400 //$canvas.width
    const randomWidth = Math.floor(Math.random() * (max - min))
    //const gap = 100
    obstacles.push(new Obstacle(100, randomWidth))
    //obstacles.push(
      //new Obstacle(randomWidth + gap, $canvas.width - randomHeight - gap)
    //)
  }
}

function drawObstacles() {
  obstacles.forEach(obs => obs.draw())
}


const board= new Board(0,0)
const character= new Character(200,400,carImg.src)



function Update() {
  frames++
  clearCanvas()
  board.draw()
  character.draw()
  generateObstacles()
  drawObstacles()
  console.log(obstacles)
}






window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };
  function startGame() {
    setInterval(Update,1000/60)
  }
};

document.onkeydown = e => {
  switch (e.key) {
    case 'ArrowRight':
      return character.move('Right')
    case 'ArrowLeft':
      return character.move('Left')
    default:
      break;
  }
}

function clearCanvas(){
  $ctx.clearRect(0,0,$canvas.width,$canvas.height)
}