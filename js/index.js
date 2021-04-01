const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')



const road = new Image()
road.src = '/images/road.png'
road.onload = ()=>{
    ctx.drawImage(road, 0, 0, ctx.canvas.width, ctx.canvas.height)
  }
  
  window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      startGame();
    };
    
    function startGame() {
        car.renderCar()
      }
  
}
//CLASE 
class Car {

  //PROPIEDADES
  constructor(){
    this.img = ''
    this.width = 50
    this.height = 90
    this.x = ctx.canvas.width/2 -25   
    this.y = ctx.canvas.height-120
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

//CREAR COCHE 
const car =  new Car()

//COMPROBAR LIMITES
const checkForBoundries = ()=>{
  if(car.x > 392){
    car.x = 392
    console.log('chocado a la derecha')
  }

  if(car.x <= 60){
    car.x = 61
    console.log('chocado a la derecha')
  }
}

//CLEAR / LIMPIAR (contenido del canvas) 
const clearCanvas = ()=>{
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

//DRAW / DIBUJAR (la nueva posición)
const drawCanvas = ()=>{
  car.renderCar()
}

//UPDATE / ACTUALIZAR (ultima posición)
const updateCanvas = ()=>{
  //clearCanvas()
  
  drawCanvas()
  
  checkForBoundries()
  
  requestAnimationFrame(updateCanvas)
 
}
updateCanvas()


document.addEventListener('keydown', (event)=>{
  if(event.key == 'a'){
    car.moveLeft()
  } else if(event.key == 'd'){
    car.moveRight()
  } 
})
