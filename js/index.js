

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')


const board = new Image()         //Loading the board image
board.src="/images/road.png"

const drawBoard = () => {
  ctx.drawImage(board, 0, 0, 500, 700)
}


//PROCESS FOR LOADING MOVING IMAGES 

//STEP 1 = CREATE AN ARRAY WITH THE IMAGES LINK
const imagesLinks = [                           
  {link: "/images/car.png", name: "car"},
  {link: "/images/arrows.png", name: "arrow"}   
]

//STEP 2 = CREATE AN EMPTY OBJECT 
let loadedImages = {}                             

let counterForLoadedImages = 0

//STEP 3 = CREATE A LOOP FOR LOADING THE IMAGES AND STORE THEM INTO THE EMPTY OBJECT

imagesLinks.forEach ((image)=>{                 
  const img = new Image()

  img.src= image.link

  img.onload = ()=>{
    counterForLoadedImages++
    loadedImages[image.name] = img
    if(imagesLinks.length === counterForLoadedImages){ 
      // console.log(loadedImages)
    }
  }
})

//CAR CLASS

class Car {                                 
  constructor(){
    this.x = 200;
    this.y = 500;
    this.speedX = 0;
    this.speedY = 0;
    this.width = 100;
    this.height = 130;
  }
  
}

//CREATING AND DRAWING THE CAR

const car = new Car()                   

// console.log(car)

const drawCar = ()=> {
  ctx.drawImage(loadedImages.car, car.x, car.y, car.width, car.height)
}



//CAR MOVEMENT DEFINITION

document.addEventListener('keydown', (event)=> {
  if(event.key === "ArrowRight") {
    car.speedX = 2 
  } else if(event.key === "ArrowLeft"){
    car.speedX = -3
  }
})

document.addEventListener('keyup', (event)=> {
  if(event.key === "ArrowRight" || event.key === "ArrowLeft"){
    car.speedX = 0
  }

})


// BOUNDARIES

const checkBund = ()=>{
  if(car.x > 400){
    car.x = 400
  }
  if(car.x < 0){
    car.x = 0
  }
}

//UPDATE THE CAR

const updateCar = ()=>{
  car.x += car.speedX
  checkBund()
}


//CLEAR CANVAS

const clearCanvas = ()=>{
  ctx.clearRect(0, 0, 500, 700)
}




//FUNCTION FOR STARTING THE GAME

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }

  function startGame() {                 //Starting game >> drawing the image.
    drawBoard()
    drawCar()
  }

}
//startGame()

//FUNCTION INFINITE LOOP FOR THE ANOTHER FUNCTIONS

const updateCanvas = ()=>{
  if(imagesLinks.length === counterForLoadedImages){
    clearCanvas()
    updateCar()
    drawBoard()
    drawCar()
  }
  requestAnimationFrame(updateCanvas) 
}

updateCanvas()



