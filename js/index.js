// Init canvas
const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
// ctx.fillStyle = '#870007'

// Flag start game form draw
let gameOver = false;
// Score
let score = 0;

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
    this.width = 40;
    this.height = 80;
  }
}

class Obstacle {
  constructor() {
    this.x = Math.floor(Math.random() * (400 - 60 + 1)) + 60; // X position inside track
    this.y = 0;
    this.speedY = 3;
    this.width = Math.floor(Math.random() * (85 + 1)) + 85; // Width between a quarter and a half of the road width
    this.height = 20;    
  }

  // Put obstacle inside the road incase it is outside because of the width
  checkLimits() {
    if((this.x + this.width) > 400){
      this.x -= this.width;
    }
  }

  drawRectangle(){
    this.checkLimits()
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  checkCrash() {
    const bothInX = (this.x) < car.x && (this.x + this.width) > car.x
    const bothInY = (this.y) < car.y && (this.y + this.height) > car.y
    
    if( bothInX && bothInY ){ 
      console.log("PUM")
      gameOver = true;
    }
  }

}


const car = new Car()
// const obstacle = new Obstacle()

let arrayOfObstacles = []

const createObstacles = ()=>{
  const obstacle = new Obstacle()
  arrayOfObstacles.push(obstacle)
}


const drawRoad = () => {
  ctx.drawImage(loadedImages.road, 0, 0, 500, 700);
}

const drawCar = () => {
  ctx.drawImage(loadedImages.car, car.x, car.y, car.width, car.height);
}

const drawObstacle = () => {
  arrayOfObstacles.forEach((obstacle, index)=>{
    if(obstacle.y < 700) {
      obstacle.drawRectangle(); // Draw obstacle if it is inside canvas
    } else {
      arrayOfObstacles.splice(index, 1); // Delete old obstacles
      scoreCount() // Update score
    }
  })
}

const drawScore = () => {
  ctx.fillText(`Score: ${score}`, 70, 100)
}

const drawGameOver = () => {
  ctx.fillStyle = '#000' 
  ctx.fillRect(0, 0, 500, 700);
  ctx.fillStyle = '#870007'
  ctx.textAlign = 'center'
  ctx.font = '70px serif'
  ctx.fillText('GAME OVER', 250, 150)
  ctx.fillStyle = 'white'
  ctx.font = '50px serif'
  ctx.fillText(`Your final score: ${score}`, 250, 250)
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
    setInterval(function(){ createObstacles(); }, 1000); // Create new obstacles every second (iteration 3)
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

const moveObstacles = () => {
  arrayOfObstacles.forEach((obstacle)=>{
    obstacle.y += obstacle.speedY;
    obstacle.checkCrash();
  })
}

const scoreCount = () => {
  score++;
}

const updateCanvas = ()=>{ 
  if(imageLinks.length === counterForLoadedImages && !gameOver){
    clearCanvas();
    
    moveCar();
    moveObstacles();

    drawRoad();
    drawCar();
    ctx.fillStyle = '#870007' 
    drawObstacle();
    ctx.fillStyle = 'white'
    ctx.font = '40px serif'
    drawScore();
  } else {
    clearCanvas();
    drawGameOver();
  }
  requestAnimationFrame(updateCanvas)
}


