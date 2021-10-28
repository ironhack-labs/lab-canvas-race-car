// Init canvas
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

// Flag start game form draw
let startGame = false;

// Load images
const loadedImages = {}

const imageLinks = [ //Array de objetos con los enlaces (y los nombres para identificarlos) de todas mis imagenes
  {link: "./images/arrows.png", name: 'arrows'},
  {link: "./images/car.png", name: 'car'},
  {link: "./images/logo.png", name: 'logo'},
  {link: "./images/road.png", name: 'road'},
]

let counterForLoadedImages = 0; //Contador de imagenes cargadas

imageLinks.forEach((imagen)=>{
  const img = new Image()
  img.src = imagen.link 
  img.onload = ()=>{ 
    counterForLoadedImages++ 
    loadedImages[imagen.name] = img
  }
})

// Classes

class Car {
  constructor(){
    this.x = 230;
    this.y = 600;
    this.speedX = 0;
    this.speedY = 0;
    this.width = 40;
    this.height = 80;
  }
}

const car = new Car()

const drawRoad = () => {
  ctx.drawImage(loadedImages.road, 0, 0, 500, 700);
}

const drawCar = () => {
  ctx.drawImage(loadedImages.car, car.x, car.y, car.width, car.height);
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

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

  function startGame() {
    updateCanvas();
  }
};

const clearCanvas = ()=>{
  ctx.clearRect(0, 0, 500, 700)
}

const checkIfTrackLimits = () =>{
 // RACE CONTROL: Black and white flag for car 9
 // Reason: Exceeded Track limits
  if(car.x > 415){
    car.x = 415;
  }
  if(car.x < 50){
    car.x = 50;
  }
}

const moveCar = () => {
  car.x += car.speedX;
  checkIfTrackLimits();
}

const updateCanvas = ()=>{ 
  if(imageLinks.length === counterForLoadedImages){
    clearCanvas()
    
    moveCar();
    drawRoad();
    drawCar();

  }
  requestAnimationFrame(updateCanvas)
}


