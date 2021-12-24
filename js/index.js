const canvas = document.getElementById('canvas')
const ctx = canvas.getContext ('2d')
//LOAD IMAGES AS SOON AS PAGE lOADS
const loadedImages = {}
const imageLinks = [
  {link: "./images/car.png", name: 'player'},
  {link: "./images/road.png", name: 'road'}
]
let counterForLoadedImages = 0;
imageLinks.forEach((imagen)=>{
  const img = new Image()
  img.src = imagen.link //Give it the url of the img
  img.onload = ()=>{
    counterForLoadedImages++
    loadedImages[imagen.name] = img
  }
})
console.log(loadedImages)
//CLASSES
class Car {
  constructor(){
    this.x = 225
    this.y = 550
    this.speedX = 0
    this.width = 50
    this.height = 100
  }
}

const car = new Car()
//EVENT LISTENERS
document.addEventListener('keydown', (event)=>{
  if(event.key === "ArrowRight"){
    car.speedX = 3
  } else if(event.key === "ArrowLeft"){
    car.speedX = -3
  } 
  })
document.addEventListener('keyup', (event)=>{
  if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
    car.speedX = 0
  }
})

//FUNCTIONS
const drawCar = ()=>{
  ctx.drawImage(loadedImages.player, car.x, car.y, car.width, car.height)  //Draw car 
}

const updateCar = ()=>{ 
  car.x += car.speedX
  checkIfInBounds()
}

const checkIfInBounds = ()=>{ 
  if(car.x > 365){
    car.x = 365
  }
  if(car.x < 50){
    car.x = 50
  }
}

const drawRoad = ()=> { //Draw road in canvas
  ctx.drawImage(loadedImages.road, 0, 0, 500, 700)
}

//GAME
window.onload = () => { 
  document.getElementById('start-button').onclick = () => { 
    startGame()
  }
}
const startGame = ()=>{ 
  if(imageLinks.length === counterForLoadedImages){ 
    //clearCanvas()
    drawRoad()
    drawCar()
    updateCar()
  }
  requestAnimationFrame(startGame) 
} 