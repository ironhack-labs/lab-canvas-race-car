const canvas = document.getElementById(`canvas`)
const ctx = canvas.getContext(`2d`)


class Obstacle{
  constructor(){
    this.width = Math.random()*ctx.canvas.width/2
    this.height = 10
    this.x = Math.random()*((ctx.canvas.width)-this.width)
    this.y = 0
  }

  renderObst(){
    ctx.fillStyle = `tomato`
    ctx.fillRect (this.x,this.y,this.width,this.height)
  }

  moveObst(){
    this.y +=4 
  }
}

class Car {
      constructor(){
        this.img = ``
        this.width = 50
        this.height = 80
        this.x = ctx.canvas.width/2 - 25
        this.y = ctx.canvas.height - 120
        this.direction=``
    }

renderImage(){
  this.img = new Image()
  this.img.src = `/images/car.png`
  this.img.onload = ()=>{
      this.drawSelf()
  }
}
drawSelf(){
  console.log(`hola`)
  ctx.drawImage(this.img,this.x,this.y,this.width, this.height)
}
moveRight(){
  this.x +=3
}

moveLeft(){
  this.x -=3
}
}

const carretera = new Image()
carretera.src = `/images/road.png`
carretera.onload = ()=>{ctx.drawImage(carretera,0,0,ctx.canvas.width,ctx.canvas.height)}
const coche = new Car()
const valla = new Obstacle()


const checkForBoundaries = ()=>{
  if (coche.x > 400){
      coche.x = 400
  }
  if (coche.x < 50){
      coche.x = 50
  }
}

//clear
const clearCanvas = ()=>{
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}
//update
const updateCanvas= ()=>{
clearCanvas()

if (coche.direction === `right`) {
  coche.moveRight()
}else if (coche.direction === `left`) {
  coche.moveLeft()
}
valla.moveObst()

drawCanvas()

checkForBoundaries()

requestAnimationFrame(updateCanvas)
}

//draw
const drawCanvas=()=>{
  renderCarretera()
  coche.drawSelf()
  valla.renderObst()

  }
  
 /*  document.addEventListener(`keydown`, (event)=>{
      if(event.key===`d`){
        coche.moveRight()
      }
      if(event.key===`a`){
        coche.moveLeft()
      }
  }) */
  document.addEventListener(`keydown`, (event)=>{
    coche.direction = {
        a: `left`,
        d: `right`
    }[event.key]
})

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };};
  


function renderCarretera(){
  
ctx.drawImage(carretera,0,0,ctx.canvas.width,ctx.canvas.height)}

function startGame() {
  renderCarretera()
  coche.renderImage()
  updateCanvas()
}

