const canvas = document.getElementById(`canvas`)
const ctx = canvas.getContext(`2d`)




class Car {
      constructor(){
        this.img = ``
        this.width = 50
        this.height = 80
        this.x = ctx.canvas.width/2 - 25
        this.y = ctx.canvas.height - 120
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
  this.x +=10
}

moveLeft(){
  this.x -=10
}
}
const carretera = new Image()
carretera.src = `/images/road.png`
carretera.onload = ()=>{ctx.drawImage(carretera,0,0,ctx.canvas.width,ctx.canvas.height)}
const coche = new Car()

const checkForBoundaries = ()=>{
  if (coche.x > 400){
      coche.x = 400
  }
  if (coche.x < 51){
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

drawCanvas()

checkForBoundaries()

requestAnimationFrame(updateCanvas)
}

//draw
const drawCanvas=()=>{
  renderCarretera()
  coche.drawSelf()
  }
  
  document.addEventListener(`keydown`, (event)=>{
      if(event.key===`d`){
        coche.moveRight()
      }
      if(event.key===`a`){
        coche.moveLeft()
      }
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
