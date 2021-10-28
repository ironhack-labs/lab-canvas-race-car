const canvas = document.getElementById('canvas') //Target canvas
const ctx = canvas.getContext ('2d') //Make the environment 2d

//LOAD IMAGES AS SOON AS PAGE OPENS
const loadedImages = {}

const imageLinks = [ 
  {link: "./images/car.png", name: 'player'},
  {link: "./images/road.png", name: 'road'}
]

let counterForLoadedImages = 0; //This counter keeps track of the images loaded

imageLinks.forEach((imagen)=>{ //Iterate over every img in the array
  const img = new Image() //Create a new img obejct
  img.src = imagen.link //Give it the url of the img
  img.onload = ()=>{ //Execute the callback function when it's loaded
    counterForLoadedImages++ //Up the counter to compare later and only draw if all imgs been loaded
    loadedImages[imagen.name] = img
  }
})

console.log(loadedImages)

//CLASSES
class Car {
  constructor(){ //Car always starts on the same pos
    this.x = 205
    this.y = 550
    this.speedX = 0
    this.width = 90
    this.height = 135
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
  ctx.drawImage(loadedImages.player, car.x, car.y, car.width, car.height)
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

const drawRoad = ()=> {
  ctx.drawImage(loadedImages.road, 0, 0, 500, 700)
}

//GAME
window.onload = () => { //When the game loads
  document.getElementById('start-button').onclick = () => { //Target start button and initiate the game
    startGame()
  }
}

const startGame = ()=>{ 
  if(imageLinks.length === counterForLoadedImages){ //Only draw if all images been loaded
    //clearCanvas()
    drawRoad()
    drawCar()
    updateCar()
  }
  requestAnimationFrame(startGame)
}