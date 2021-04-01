const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')



const road = new Image()
road.src = '/images/road.png'
road.onload = ()=>{
    ctx.drawImage(road, 0, 0, ctx.canvas.width, ctx.canvas.height)
  }

const  drawBackground =()=>{
  ctx.drawImage(road, 0, 0, ctx.canvas.width, ctx.canvas.height)
}
  
//CLASES

class Obstacle{
  constructor(){
    this.width = Math.floor(Math.random())*ctx.canvas.width/2
    this.heigth= 10
    this.x= Math.floor(Math.random())*(ctx.canvas.width-this.width)
    this.y= 0
  }
  renderObstacle(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x,this.y,this.width,this.heigth)
  }

  moveObstacle(){
    this.y += 5
  }
}


class Car {

  //PROPIEDADES
  constructor(){
    this.img = ''
    this.width = 90
    this.height = 150
    this.x = ctx.canvas.width/2  -45  
    this.y = ctx.canvas.height-190
  }
  //METODOS
  renderCar(){
   
    this.img = new Image()
    
    this.img.src = '/images/car.png'
    
    this.img.onload = ()=>{
      this.drawSelf()
    }
  }
  
  drawSelf(){
    ctx.drawImage(this.img , this.x, this.y, this.width, this.height)
  }
  moveRight(){
    this.x += 3
  }
  
  moveLeft(){
    this.x -= 3
  }
}

let obstacle = new Obstacle()
let car 

//COMPROBAR LIMITES
const checkForBoundries = ()=>{
  if(car.x > 392){
    car.x = 392
    console.log('chocado a la derecha')
  }

  if(car.x <= 60){
    car.x = 61
    console.log('chocado a la izquierda')
  }
}

//CLEAR / LIMPIAR (contenido del canvas) 
const clearCanvas = ()=>{
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

//DRAW / DIBUJAR (la nueva posición)
const drawCanvas = ()=>{
  drawBackground()
  car.drawSelf()
  obstacle.renderObstacle()
}

//UPDATE / ACTUALIZAR (ultima posición)
const updateCanvas = ()=>{
  clearCanvas()
  
  drawCanvas()
  
  checkForBoundries()
  
  requestAnimationFrame(updateCanvas)
 
}



document.addEventListener('keydown', (event)=>{
  if(event.key == 'a'){
    car.moveLeft()
  } else if(event.key == 'd'){
    car.moveRight()
  } 
})

  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
    
    function startGame() {
        car = new Car()
        car.renderCar()
        updateCanvas()
      }
  }